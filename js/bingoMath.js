(function(){
    const bingoCard = document.getElementById('bingoCard');
const bingoAnswerPool = document.getElementById('answerPool');
const bingoMessage = document.getElementById('bingoMessage');
const restartGame = document.getElementById('restartGame');

let correctAnswers = [];

const generateMathProblem = () => {
    const operations = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let problem, answer;
    switch (operation) {
        case '+':
            problem = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            problem = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            problem = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
        case '/':
            problem = `${num1} / ${num2}`;
            answer = (num1 / num2).toFixed(2); // Limit to 2 decimal places
            break;
    }
    return { problem, answer };
};

function createBingoCard() {
    const problems = [];
    while (problems.length < 25) {
        const { problem, answer } = generateMathProblem();
        if (!problems.some(item => item.problem === problem)) {
            problems.push({ problem, answer });
        }
    }
    
    
    
    problems.forEach((item, index) => {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');
        cell.dataset.answer = item.answer;
        cell.textContent = item.problem;
        cell.addEventListener('click', () => checkAnswer(cell));
        bingoCard.appendChild(cell);
    });
}

function createAnswerPool() {
    const answers = Array.from(new Set(bingoCard.querySelectorAll('.bingo-cell')).values()).map(cell => cell.dataset.answer);
    
    
    const shuffledAnswers = answers.sort(() => 0.5 - Math.random());


    shuffledAnswers.forEach(answer => {
        const cell = document.createElement('div');
        cell.classList.add('answer-cell');
        cell.textContent = answer;
        cell.addEventListener('click', () => selectAnswer(cell));
        bingoAnswerPool.appendChild(cell);
    });
}

function checkAnswer(cell) {
    if (correctAnswers.includes(cell.dataset.answer)) {
        cell.classList.add('correct');
        checkWin();
    }
}

function selectAnswer(cell) {
    if (!correctAnswers.includes(cell.textContent)) {
        correctAnswers.push(cell.textContent);
        bingoMessage.textContent = `Selected: ${cell.textContent}`;
    }
}

function checkWin() {
    const cells = bingoCard.querySelectorAll('.bingo-cell');
    const rows = [[], [], [], [], []];
    const cols = [[], [], [], [], []];

    cells.forEach((cell, index) => {
        const row = Math.floor(index / 5);
        
        const col = index % 5;
        
        rows[row].push(cell);
        cols[col].push(cell);
    });
    ;
    

    rows.concat(cols).forEach(line => {
        if (line.every(cell => cell.classList.contains('correct'))) {
            bingoMessage.textContent = 'Bingo! You win!';
            endGame();
        }
    });
}

function endGame() {
    document.querySelectorAll('.bingo-cell, .answer-cell').forEach(cell => {
        cell.removeEventListener('click', checkAnswer);
        cell.removeEventListener('click', selectAnswer);
    });
    restartGame.style.display = 'block';    
}

function startGame() {
    bingoCard.innerHTML = '';
    bingoAnswerPool.innerHTML = '';
    bingoMessage.textContent = '';
    correctAnswers = [];
    createBingoCard();
    createAnswerPool();
}

restartGame.addEventListener('click', () => {
    restartGame.style.display = 'none';
    startGame();
});

startGame();

})()