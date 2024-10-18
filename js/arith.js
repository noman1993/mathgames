const problemElement = document.getElementById('problem')
const inputValues = document.getElementById('answer')
const submitButton = document.getElementById('submit')
const showResult = document.getElementById('result')
const scoreElement = document.getElementById('score')
const restartBtn = document.getElementById('start')

let currentProblem ={}
let scoreArith = 0
let turnsArith = 10

function generateProblem (){
    const operations = ['+','-','*','/']
    const num1 = Math.floor(Math.random()*100)
    const num2 =Math.floor(Math.random()*100)+1
    const operation = operations[Math.floor(Math.random()*operations.length)]
    return {num1,num2,operation}
}

function displayProblem(){
    currentProblem = generateProblem()
    const {num1,num2,operation} = currentProblem
    problemElement.textContent = `${num1} ${operation} ${num2} =?`
    inputValues.value = ''
    showResult.textContent = ''
}

function checkAnswer (){
    const {num1,num2,operation} = currentProblem
    let correctAnswer
    switch(operation){
        case '+': correctAnswer = num1 + num2; break
        case '-': correctAnswer = num1 - num2; break
        case '*': correctAnswer = num1 * num2; break
        case '/': correctAnswer = (num1 / num2).toFixed(2); break
    }

    const userAnswer = parseFloat(inputValues.value)
    if(userAnswer === parseFloat(correctAnswer)){
        showResult.textContent = 'correct'
        scoreArith++
    }else{
        showResult.textContent = `wrong! the correct answer was ${correctAnswer}`
        scoreArith -= 0.5
    }

    scoreElement.textContent = `score: ${scoreArith}`
    turnsArith--
    showResult.textContent += ` and turns remains ${turnsArith}`

    if(turnsArith > 0){
       setTimeout(displayProblem, 4000)
    }else{
        endGame()
    }
}

function endGame(){
    problemElement.textContent = ''
    showResult.textContent = `Game over!! your final score is ${scoreArith}`
    restartBtn.style.display = 'block'
    document.getElementById('game').style.display = 'none'
    scoreElement.style.display = 'none'
}

function reStartGame(){
    scoreArith = 0
    turnsArith = 10
    score.textContent = `Score: ${scoreArith}`
    document.getElementById('game').style.display = 'block'
    scoreElement.style.display = 'block'
    restartBtn.style.display = 'none'
    displayProblem()
}


restartBtn.addEventListener('click', reStartGame)
submitButton.addEventListener('click',checkAnswer)


