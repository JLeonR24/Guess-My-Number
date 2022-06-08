'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	if (!guess) {
		document.querySelector('.message').textContent = '🚫 No Number!';
	} else if (guess > number) {
		document.querySelector('.message').textContent = 'Too High!';
	} else if (guess < number) {
		document.querySelector('.message').textContent = 'Too Low!';
	} else if (guess === number) {
		document.querySelector('.message').textContent = '🎉 Correct Number!';
	}
});
