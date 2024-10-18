// const inputNumber = document.getElementById('guess-number')
// const submitButtn = document.getElementById("submit-btn")
// const hint = document.getElementById("hint")
// const message = document.getElementById("message")
// const prevGuess = document.getElementById("prevGuess")
// const resetBtn = document.getElementById("resetBtn")
// const difficultyLabel = document.querySelectorAll(".difficulty-label button")
// const gameInterface = document.querySelector(".game-body")

// let randomNumber;
// let rangeMax;
// let turns = 7
// let GuessNumbers =[]
// let difficultySelected = false

// difficultyLabel.forEach(button =>{
//     button.addEventListener('click',()=>{
//         if(button.id === 'easy'){
//             rangeMax = 100
//         }else if(button.id === 'medium'){
//             rangeMax = 200
//         }else{
//             rangeMax = 300
//         }
//         startGame()
//     })
// })

// function startGame(){
//      randomNumber = Math.floor(Math.random() * rangeMax)+1
//      turns = 7
//      GuessNumbers = []
//      difficultySelected = true
//      document.getElementById("range").textContent = ` 1 to ${rangeMax}`
//      gameInterface.style.display = "block"
//      document.querySelector(".difficulty-label").style.display = "none"
//      resetBtn.style.display = "none"
//      inputNumber.value=''
//      inputNumber.focus()
//      hint.textContent = giveHints(randomNumber)
//      message.textContent = ''
//      prevGuess.textContent = ''
// }

// submitButtn.addEventListener('click', ()=>{
//     let guess = Number(inputNumber.value)
//     if(difficultySelected && guess > 0 && guess <= rangeMax){
//         GuessNumbers.push(guess)
//         if(turns > 1){
//             checkguesnum(guess)
//         }else{
//             message.textContent = `Game is over!! the guessed number was ${randomNumber}`
//             endTheGame()
//         }
//         inputNumber.value = ''
//         inputNumber.focus()

//     }else{
//         message.textContent = `please, provide a number between 1 and ${rangeMax}`
//     }
// })

// function checkguesnum(num){
//     if( num === randomNumber){
//         message.textContent = `Congratulation !!!! you are genious.`
//         hint.textContent =''
//         prevGuess.textContent = ''
//         endTheGame()
//     } else{
//         turns-- 
//         if(num < randomNumber){
//             message.textContent = `your number is low. turn left ${turns}`
//         }else{
//             message.textContent = `your number is high. turn left ${turns}`
//         }
//         hint.textContent = giveHints(randomNumber)
//         prevGuess.textContent = `previous guessed numbers: ${GuessNumbers.join(",")}`
//     }
// }

// function giveHints(num){
//     let hintMessage = `Hint: the number is ${num % 2 === 0 ? "even" : "odd"}`
//     let multiples = []
//     if( num % 3 === 0) multiples.push('3')
//     if( num % 4 === 0) multiples.push('4')
//     if( num % 5 === 0) multiples.push('5')
//     if( num % 6 === 0) multiples.push('6')
//     if( num % 7 === 0) multiples.push('7')
//     if( num % 8 === 0) multiples.push('8')
//     if( num % 9 === 0) multiples.push('9')
    
//     if(multiples.length > 0){
//         hintMessage += ` and it is multiples of ${multiples.join(",")}`
//     }

//     if(isPrimenumber(num)){
//         hintMessage += ` and it is a prime number`
//     }
//     return hintMessage

// }

// function isPrimenumber(number){
//     if(number <= 1) return false
//     for(let i = 2; i< Math.sqrt(number); i++){
//         if( number % i === 0) return false
//     }
//     return true
// }

// function endTheGame(){
//     inputNumber.disabled = true
//     submitBtn.disabled = true
//     resetBtn.style.display = "block"
// }


// resetBtn.addEventListener('click', ()=>{
//     inputNumber.disabled = false
//     submitBtn.disabled = false
//     document.querySelector(".difficulty-label").style.display = "block"
//     gameInterface.style.display = "none"
// })



const inputNumber = document.getElementById('guess-number');
const submitButtn = document.getElementById("submit-btn");
const hint = document.getElementById("hint");
const message = document.getElementById("message");
const prevGuess = document.getElementById("prevGuess");
const resetBtn = document.getElementById("resetBtn");
const difficultyLabel = document.querySelectorAll(".difficulty-label button");
const gameInterface = document.querySelector(".game-body");

let randomNumber;
let rangeMax;
let turns = 7;
let GuessNumbers = [];
let difficultySelected = false;

// Difficulty selection
difficultyLabel.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'easy') {
            rangeMax = 100;
        } else if (button.id === 'medium') {
            rangeMax = 200;
        } else {
            rangeMax = 300;
        }
        startGame();
    });
});

// Start game
function startGame() {
    randomNumber = Math.floor(Math.random() * rangeMax) + 1;
    turns = 7;
    GuessNumbers = [];
    difficultySelected = true;
    document.getElementById("range").textContent = ` 1 to ${rangeMax}`;
    gameInterface.style.display = "block";
    document.querySelector(".difficulty-label").style.display = "none";
    resetBtn.style.display = "none";
    inputNumber.value = '';
    inputNumber.focus();
    hint.textContent = giveHints(randomNumber);
    message.textContent = '';
    prevGuess.textContent = '';
}

// Submit button
submitButtn.addEventListener('click', () => {
    let guess = Number(inputNumber.value);
    if (difficultySelected && guess > 0 && guess <= rangeMax) {
        GuessNumbers.push(guess);
        if (turns > 1) {
            checkguesnum(guess);
        } else {
            message.textContent = `Game over! The number was ${randomNumber}`;
            endTheGame();
        }
        inputNumber.value = '';
        inputNumber.focus();
    } else {
        message.textContent = `Please provide a number between 1 and ${rangeMax}`;
    }
});

// Check the guessed number
function checkguesnum(num) {
    if (num === randomNumber) {
        message.textContent = `Congratulations! You guessed the number!`;
        hint.textContent = '';
        prevGuess.textContent = '';
        endTheGame();
    } else {
        turns--;
        if (num < randomNumber) {
            message.textContent = `Your guess is too low. Turns left: ${turns}`;
        } else {
            message.textContent = `Your guess is too high. Turns left: ${turns}`;
        }
        hint.textContent = giveHints(randomNumber);
        prevGuess.textContent = `Previous guesses: ${GuessNumbers.join(", ")}`;
    }
}

// Provide hints
function giveHints(num) {
    let hintMessage = `Hint: The number is ${num % 2 === 0 ? "even" : "odd"}.`;
    let multiples = [];

    if (num % 3 === 0) multiples.push('3');
    if (num % 4 === 0) multiples.push('4');
    if (num % 5 === 0) multiples.push('5');
    if (num % 6 === 0) multiples.push('6');
    if (num % 7 === 0) multiples.push('7');
    if (num % 8 === 0) multiples.push('8');
    if (num % 9 === 0) multiples.push('9');

    if (multiples.length > 0) {
        hintMessage += ` It is a multiple of ${multiples.join(", ")}.`;
    }

    if (isPrimenumber(num)) {
        hintMessage += ` It is a prime number.`;
    }

    return hintMessage;
}

// Check if prime
function isPrimenumber(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// End the game
function endTheGame() {
    inputNumber.disabled = true;
    submitButtn.disabled = true;
    resetBtn.style.display = "block";
}

// Reset the game
resetBtn.addEventListener('click', () => {
    inputNumber.disabled = false;
    submitButtn.disabled = false;
    document.querySelector(".difficulty-label").style.display = "block";
    gameInterface.style.display = "none";
    difficultySelected = false;
});
