'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value);

//Refactor code using functions
const displayMessage = (message) => {
	document.querySelector('.message').textContent = message;
};

const displayScore = (score) => {
	document.querySelector('.score').textContent = score;
};

const displayGuess = (guess) => {
	document.querySelector('.guess').value = guess;
};

const displayNumber = (number) => {
	document.querySelector('.number').textContent = number;
};

const randomNumber = () => {
	let number = Math.trunc(Math.random() * 20 + 1);
	console.log(`The answer is ${number}`); // cheat code, see the answer in console :)
	return number;
};

// Create a random secret number
let secretNumber = randomNumber();

// Variable for score
let score = 20;

// Array for high score using function
// const highScore = [0];

// Variable for highscore
let highScore = 0;

// Restart the game. Reset values, and generate a new random number
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	displayScore(score);
	displayGuess('');
	displayMessage('Start guessing...');

	document.querySelector('body').style.backgroundColor = '#393e46';
	document.querySelector('body').style.backgroundImage =
		'-webkit-linear-gradient(80deg, #222831 50%, #393e46 50%)';
	document.querySelector('.number').style.width = '15rem';
	displayNumber('?');
	secretNumber = randomNumber();
});

// Function for event listener
document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value); // Convert the guess value to Number
	// console.log(guess, typeof guess); // check the value and type of guess

	if (!guess) {
		// Condition if no input is submitted
		displayMessage('🚫 No Number!');
		score--;
		displayScore(score);
	} else if (guess === secretNumber) {
		// Player wins
		//console.log(highScore, score);
		displayMessage('🎉 Correct Number!');
		displayNumber(secretNumber);

		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('body').style.backgroundImage = 'none';
		document.querySelector('.number').style.width = '30rem';

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}

		// HighScore using function
		// highScore.push(score); // Push highScore to array
		// document.querySelector('.highscore').textContent = storeHighScore(); //call highscore function
	} else if (score > 1) {
		displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!'); //refactor code
		score--;
		displayScore(score);

		// if (guess > secretNumber) {
		// 	// Guess too high
		// 	document.querySelector('.message').textContent = 'Too High!';
		// 	score--;
		// 	document.querySelector('.score').textContent = score;
		// } else if (guess < secretNumber) {
		// 	// Guess too low
		// 	document.querySelector('.message').textContent = 'Too Low!';
		// 	score--;
		// 	document.querySelector('.score').textContent = score;
	} else {
		displayMessage('You lost the game!');
		displayScore(0);
	}
});

// Store highscore function
// const storeHighScore = function () {
// 	let latestHigh = highScore[0];
// 	for (let i = 0; i < highScore.length; i++) {
// 		if (highScore[i] > latestHigh) latestHigh = highScore[i];
// 	}
// 	return latestHigh;
// };

//----------------------------Non refactor code----------------------------------------------

// // Create a random secret number
// let secretNumber = Math.trunc(Math.random() * 20 + 1);

// // Variable for score
// let score = 20;

// // Array for high score
// const highScore = [0];

// // Restart the game (store the highscore in array, reset values, and generate a new random number
// document.querySelector('.again').addEventListener('click', function () {
// 	score = 20;
// 	document.querySelector('.score').textContent = 20;
// 	document.querySelector('.guess').value = null;
// 	document.querySelector('.message').textContent = 'Start guessing...';

// 	document.querySelector('body').style.backgroundColor = '#393e46';
// 	document.querySelector('body').style.backgroundImage =
// 		'-webkit-linear-gradient(80deg, #222831 50%, #393e46 50%)';
// 	document.querySelector('.number').style.width = '15rem';
// 	document.querySelector('.number').textContent = '?';

// 	secretNumber = Math.trunc(Math.random() * 20 + 1);
// });

// // Function for event listener
// document.querySelector('.check').addEventListener('click', function () {
// 	const guess = Number(document.querySelector('.guess').value); // Convert the guess value to Number
// 	console.log(guess, typeof guess); // check the value and type of guess

// 	if (!guess) {
// 		document.querySelector('.message').textContent = '🚫 No Number!';
// 		score--;
// 		document.querySelector('.score').textContent = score;
// 	} else if (score > 1) {
// 		if (guess > secretNumber) {
// 			// Guess too high
// 			document.querySelector('.message').textContent = 'Too High!';
// 			score--;
// 			document.querySelector('.score').textContent = score;
// 		} else if (guess < secretNumber) {
// 			// Guess too low
// 			document.querySelector('.message').textContent = 'Too Low!';
// 			score--;
// 			document.querySelector('.score').textContent = score;
// 		} else if (guess === secretNumber) {
// 			//When player wins
// 			document.querySelector('.message').textContent = '🎉 Correct Number!';
// 			document.querySelector('.number').textContent = secretNumber;

// 			document.querySelector('body').style.backgroundColor = '#60b347';
// 			document.querySelector('body').style.backgroundImage = 'none';
// 			document.querySelector('.number').style.width = '30rem';

// 			highScore.push(score); // Push highScore to array
// 			document.querySelector('.highscore').textContent = storeHighScore(); //call highscore function
// 		}
// 	} else {
// 		document.querySelector('.message').textContent = 'You lost the game!';
// 		document.querySelector('.score').textContent = 0;
// 	}
// });

// // Store highscore
// const storeHighScore = function () {
// 	let latestHigh = highScore[0];
// 	for (let i = 0; i < highScore.length; i++) {
// 		if (highScore[i] > latestHigh) latestHigh = highScore[i];
// 	}
// 	return latestHigh;
// };
