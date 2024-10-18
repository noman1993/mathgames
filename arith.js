const problemElement = document.getElementById('problem')
const inputValues = document.getElementById('answer')
const submitButton = document.getElementById('submit')
const showResult = document.getElementById('result')
const scoreElement = document.getElementById('score')
const restartBtn = document.getElementById('start')

let currentProblem ={}
let score = 0
let turns = 10

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
        score++
    }else{
        showResult.textContent = `wrong! the correct answer was ${correctAnswer}`
        score -= 0.5
    }

    scoreElement.textContent = `score: ${score}`
    turns--
    showResult.textContent += ` and turns remains ${turns}`

    if(turns > 0){
       setTimeout(displayProblem, 4000)
    }else{
        endGame()
    }
}

function endGame(){
    problemElement.textContent = ''
    showResult.textContent = `Game over!! your final score is ${score}`
    restartBtn.style.display = 'block'
    document.getElementById('game').style.display = 'none'
    scoreElement.style.display = 'none'
}

function reStartGame(){
    score = 0
    turns = 10
    score.textContent = `Score: ${score}`
    document.getElementById('game').style.display = 'block'
    scoreElement.style.display = 'block'
    restartBtn.style.display = 'none'
    displayProblem()
}


restartBtn.addEventListener('click', reStartGame)
submitButton.addEventListener('click',checkAnswer)


