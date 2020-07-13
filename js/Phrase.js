/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Phrase Class
 class Phrase {
 	constructor(phrase) {
 		this.phrase = phrase.toLowerCase();
 	}
 	//Display phrase on game board
 	addPhraseToDisplay() {
 		const ul = document.getElementById('phrase').firstElementChild;
 		[...this.phrase].map((character) => {
 			const li = document.createElement('li');
 			if (character != ' ') {
 				li.className = `hide letter ${character}`;
	 			li.innerText = character;
	 			ul.appendChild(li);
	 		} else {
	 			li.className = 'space';
	 			li.innerText = ' ';
	 			ul.appendChild(li);
	 		}
 		 });
	 }

	//Checks if passed letter is in phrase
	checkLetter(letter) {
		if (this.phrase.includes(letter))  {
			return true;
		} else {
			return false;
		}
	}

	//Displays passed letter on screen after a match is found
	showMatchedLetter(letter) {
		let matched = document.querySelectorAll("#phrase li");

		for (let i=0; i < matched.length; i++) {
			if (matched[i].textContent.toLowerCase() === letter) {
				matched[i].classList.remove('hide');
				matched[i].classList.add('show');
			}
		}
	}
}
