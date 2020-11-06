'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
document.querySelector('.guess').focus();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const msg = document.querySelector('.message');
  // when no input
  if (!guess) {
    msg.textContent = '⛔ No Number!';

    // when player wins
  } else if (guess === secretNumber) {
    if (highScore < score) {
      highScore = score;
    }
    msg.textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = highScore;

    // when guess is wrong
  } else if (guess !== secretNumber) {
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').focus();
    if (score > 1) {
      msg.textContent = guess < secretNumber ? '📉 Too low!' : '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      msg.textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
});
