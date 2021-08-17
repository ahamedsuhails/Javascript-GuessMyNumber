'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const display = function (message) {
  document.querySelector('.message').textContent = message;
};

const a = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    display('No Number Entered 😒');
  } else if (guess === secretNumber) {
    display('Correct Number 👏😉');
    document.querySelector('.number').textContent = secretNumber;
    let newHighScore = Number(document.querySelector('.score').textContent);
    if (newHighScore > highScore) {
      highScore = newHighScore;
    }
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      display(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      display('Game Over ⚡');
      document.querySelector('.score').textContent = 0;
    }
  }
};

const b = function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  display('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', a);
document.querySelector('.again').addEventListener('click', b);
