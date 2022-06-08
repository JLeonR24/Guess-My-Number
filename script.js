'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value);

// Create a random number to guess
// let number = Math.trunc(Math.random() * 20) + 1;

// Function that creates a random number
const createRandomNumber = function () {
	return Math.trunc(Math.random() * 20 + 1);
};

// Assign the value of the random number to a variable
let number = createRandomNumber();

// Variable for score
let score = 20;

// Array for high score
const highScore = [0];

// Restart the game (store the highscore in array, reset values, and generate a new random number
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	document.querySelector('.score').textContent = 20;
	document.querySelector('.guess').value = null;
	document.querySelector('.message').textContent = 'Start guessing...';
	number = createRandomNumber();
	return number;
});

// Function for event listener
document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value); // Convert the guess value to Number
	console.log(guess, typeof guess); // check the value and type of guess

	if (!guess) {
		document.querySelector('.message').textContent = '🚫 No Number!';
		score--;
		document.querySelector('.score').textContent = score;
	} else if (guess > number) {
		document.querySelector('.message').textContent = 'Too High!';
		score--;
		document.querySelector('.score').textContent = score;
	} else if (guess < number) {
		document.querySelector('.message').textContent = 'Too Low!';
		score--;
		document.querySelector('.score').textContent = score;
	} else if (guess === number) {
		document.querySelector('.message').textContent = '🎉 Correct Number!';
		highScore.push(score); // Push highScore to array
		document.querySelector('.highscore').textContent = storeHighScore(); //call highscore function
	}
});

// Store highscore
const storeHighScore = function () {
	let latestHigh = highScore[0];
	for (let i = 0; i < highScore.length; i++) {
		if (highScore[i] > latestHigh) latestHigh = highScore[i];
	}
	return latestHigh;
};
