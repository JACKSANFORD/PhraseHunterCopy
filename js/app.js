/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById('btn__reset');
const keyboard = document.querySelector("#qwerty");

startButton.addEventListener('click', () => {
	game = new Game();
	game.startGame();
});

keyboard.addEventListener('click', (e) => {
	if (e.target.tagName === "BUTTON") {
		game.handleInteraction(e.target);
	}
});