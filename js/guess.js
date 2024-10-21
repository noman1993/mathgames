(function(){
    const inputValue = document.getElementById("guessField")
const submitBtn = document.getElementById("submitGuess")
const feedback = document.getElementById("feedback")
const previousValue = document.getElementById("previousGuesses")
const resetButton = document.getElementById("resetGame")



let randomNum = Math.floor(Math.random()*100)+1
let guess =[]
let guessCount = 8

function checkGuess(){
    const guessValue = Number(inputValue.value)

    if(guessValue<1 || guessValue> 100){
        feedback.innerText = `please input a number between 1 and 100`
        return false
    }

    guess.push(guessValue)

    if(guessValue === randomNum){
        feedback.innerText = `Congratulation , you are genious. you got the correct number.`
        gameOver()
    } else if(guessCount < 1){
        feedback.innerText = `Game is Over. the guess number is ${randomNum}`
        gameOver()
    }else{
        guessCount --
        feedback.innerText = `the guess number is ${guessValue < randomNum ? "low" : "high"} and turns left: ${guessCount}`
        previousValue.innerText =`previous guess numbers are:  ${guess.join(",")}`

    }
    inputValue.value = ""
}

function gameOver (){
    inputValue.disabled = true 
    submitBtn.disabled = true
    resetButton.style.display = "inline"
}


function resetGame(){
    guess=[]
    guessCount = 1
    inputValue.value = ''
    randomNum = Math.floor(Math.random()*100)+1
    inputValue.disabled = false
    submitBtn.disabled = false
    feedback.innerText = ''
    previousValue.innerText = ''
    resetButton.style.display = "none"
}



submitBtn.addEventListener('click', checkGuess)
resetButton.addEventListener('click', resetGame)
})()