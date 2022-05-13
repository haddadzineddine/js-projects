'use strict';

const maxNumber = 20;


let generateRandomNumber = function (max) {
    return Math.floor(Math.random() * max) + 1;
}



let correctNumber = generateRandomNumber(maxNumber);

let score = maxNumber;

let highScore = 0;

let guess = '';



document.querySelector('.check').addEventListener('click', function () {

    guess = document.querySelector('.guess').value;

    verifyGuess(guess);

    isValidGuess(guess) ? discountScore() : null;
});


let displayMessage = function (selector, message) {
    document.querySelector(selector).textContent = message;
}

let setBodyBackgroundColor = function (color) {
    document.body.style.backgroundColor = color;
}

let discountScore = function () {
    score = score - 1;
    document.querySelector('.score').textContent = score;
}

let isValidGuess = function (guess) {
    return guess != '' && guess <= maxNumber && guess >= 1;
}

let recordNewHighScore = function () {
    if (score > highScore) {
        highScore = score;
        document.querySelector('.high-score').textContent = highScore;
    }
}

let verifyGuess = function (guess) {

    // logic to check if the guess is valid
    if (!isValidGuess(guess)) {
        displayMessage('.message', '⛔️ No number!');
        return;
    }

    // logic to check if guess is correct
    if (guess == correctNumber) {
        displayMessage('.message', '🎉 Correct!');
        setBodyBackgroundColor('#60b347')
        displayMessage('.number', correctNumber);
        recordNewHighScore();
    }

    // logic to check if guess is higher than correct number
    if (guess > correctNumber) {
        displayMessage('.message', '🔥 Too high!');
    }

    // logic to check if guess is lower than correct number
    if (guess < correctNumber) {
        displayMessage('.message', '🔥 Too low!');
    }
}

const reset = function () {
    score = maxNumber;
    displayMessage('.message', '🔄 Start guessing...');
    displayMessage('.score', score);
    document.querySelector('.guess').value = '';
    displayMessage('.number', '?');
    correctNumber = generateRandomNumber(maxNumber);
    setBodyBackgroundColor('#222')
}

document.querySelector('.again').addEventListener('click', reset);