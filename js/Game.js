/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //Game Class
 class Game {

 	constructor() {
 		this.missed = 0;
 		this.phrases = [
 			new Phrase('Life is like a box of chocolates'),
 			new Phrase('There is no trying'),
 			new Phrase('May the force be with you'),
 			new Phrase('You have to see the matrix for yourself'),
 			new Phrase('You talking to me')
 		]
 		this.activePhrase = 'null';
 	}
 	/**
	* Selects random phrase from phrases property
	* @return {Object} Phrase object chosen to be used
	*/
	getRandomPhrase() {
		const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
		return randomPhrase;
	};

	//Begins game by selecting a random phrase and displaying it to user
	startGame() {
		document.getElementById('overlay').style.display = 'none';
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}

	//Checks for winning move
	checkForWin() {
		let win = false;
		let hidden = this.activePhrase.showMatchedLetter();
		hidden = document.getElementsByClassName("hide").length;

		if (hidden === 0) {
			return win = true;
		} else {
			return win = false;
		}
	}

	//Increases the value of the missed property, removes life from scoreboard, checks if player has remaining lives and ends game if player is out
	removeLife() {
		let heart = document.querySelector(".tries img");
		let tries = document.querySelector(".tries");

		if (this.activePhrase.checkLetter(this.letter) === false) {
			this.missed++;
			heart.src = "images/lostHeart.png";
			tries.className = "fails";
		}
		if (this.missed === 5) {
			this.gameOver();
		}
	}

	//displays game over message
	gameOver(gameWon) {
		const gameOverMess = document.getElementById("game-over-message");
		const start = document.querySelector("#overlay");

		if (this.checkForWin(true) === true) {
			start.style.display = "block";
			start.className = "win";
			gameOverMess.innerHTML = "Great Job!";
			this.resetGame();
		} else {
			start.style.display = "block";
			start.className = "lose";
			gameOverMess.innerHTML = "Sorry, better luck next time!";
			this.resetGame();
		}
	}

	//handles onscreen keyboard clicks
	handleInteraction(button) {
		if (this.activePhrase.checkLetter(button.innerHTML) === false) {
			button.disabled = true;
			button.className = "wrong";
			this.removeLife();
		} else {
			button.disabled = true;
			button.className = "chosen";
			this.activePhrase.showMatchedLetter(button.innerHTML);
			this.checkForWin();

			if (this.checkForWin() === true) {
				this.gameOver();
			}
		}
	}

	resetGame() {
		let ul = document.querySelector("ul");
		let chosen = document.querySelectorAll(".chosen");
		let wrong = document.querySelectorAll(".wrong");
		let heart = document.querySelectorAll(".fails");
		console.log(heart);

		//remove all li elements from the phrase ul element
		ul.innerHTML = "";

		//enable all onscreen keyboard elements
		for (let i = 0; i < chosen.length; i++) {
      chosen[i].className = "key";
      chosen[i].disabled = false;
		}

		for (let i = 0; i < wrong.length; i++) {
      wrong[i].className = "key";
      wrong[i].disabled = false;
		}

		//reset all heart images
    for (let i = 0; i < heart.length; i++) {
			heart[i].className = "tries";
			heart[i].src = "images/liveHeart.png";
		}
	}
}