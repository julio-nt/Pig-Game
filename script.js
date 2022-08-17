const player1 = document.querySelector('.score-1');
let diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 1;

// ROLL BUTTON
btnRoll.addEventListener('click', function () {
	// ROLL DICE
	const dice = Math.trunc(Math.random() * 6) + 1;
	let diceNumber = 0;

	// SHOW ROLLED DICE NUMBER
	diceEl.textContent = dice;

	// ADD SCORE TO PLAYER 1
	if (dice !== 1) {
		currentScore += dice;
		document.querySelector(`.score-${activePlayer}`).textContent =
			currentScore;
	} else {
		//CHANGE PLAYER
		currentScore = 0;
		document.querySelector(`.score-${activePlayer}`).textContent =
			currentScore;
		activePlayer = activePlayer === 1 ? 2 : 1;
	}
});

// HOLD BUTTON
btnHold.addEventListener('click', function () {
	// SAVE SCORE
	document.querySelector(`.highscore-${activePlayer}`).textContent =
		document.querySelector(`.score-${activePlayer}`).textContent;
	//CHANGE PLAYER
	currentScore = 0;
	document.querySelector(`.score-${activePlayer}`).textContent = currentScore;
	activePlayer = activePlayer === 1 ? 2 : 1;
});

// WIN CASE
