/* 

About: 
Main .js file that manipulates the functionality of index.html

Requirements:
lettersLibrary.js contains the following constants
- Letters: An Array of letters that will be renders
- wordsLibrary: An object that maps letters to words and youtube links

Notes:

Developers:
Jasper Hawkins
Prageeth Jayathissa

Date:
November 2021

*/

// This number will itterate through the letters
currentLetterPosition = 0;

// Create object for storing results based on the letters array
var Results = letters.map((letter) => {
	return {
		letter: letter,
		...wordLibrary[letter].words[0] == "" ? {start: null} : {start: 'notSelected'},
		...wordLibrary[letter].words[1] == "" ? {middle: null} : {middle: 'notSelected'},
		...wordLibrary[letter].words[2] == "" ? {end: null} : {end: 'notSelected'},
		sound: 'notSelected',
	};
});

function initiatePage() {
	// hide results and soundtest
	document.getElementById("results").style.display = "none";
	document.getElementById("sound-test").style.display = "none";
	// Select all radios based on class .radio-btn
	var radios = document.querySelectorAll(".custom-radio");

	// itterate through each class, and create a function that fires when clicked
	radios.forEach((radio) => {
		radio.onclick = function() {
			// modify Results by the value of the radio clicked
			Results[currentLetterPosition][
				radio.getAttribute("name")
			] = JSON.parse(radio.getAttribute("value"));
			showSoundTest();
		};
	});

	// Creating itterations through next and previous buttons
	document.getElementById("next-button").onclick = function() {
		if (checkAllSelected() && currentLetterPosition < letters.length - 1) {
			currentLetterPosition++;
			updatePage();
		}
	};

	document.getElementById("previous-button").onclick = function() {
		if (currentLetterPosition > 0) {
			currentLetterPosition--;
			updatePage();
		}
	};

	document.getElementById("submit-button").onclick = function() {
		generateOutput();
	};

	document.getElementById("go-back-button").onclick = function() {
		document.getElementById("questions").style.display = "inline";
		document.getElementById("results").style.display = "none";
	};

	updatePage()
}

function createCard(position){
	console.log(Results[currentLetterPosition])
	console.log(document.getElementById('card-'+position))
	if (Results[currentLetterPosition][position] == null) {
		document.getElementById('card-'+position).style.display = 'none'
	} else {
		document.getElementById('card-'+position).style.display = 'flex'
	}
}

// refresh page to current letter, images and pagination
function updatePage() {
	showSoundTest()

	//scroll to top
	document.body.scrollTop = 0; // For Safari
  	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  	// change letterrs to current letter
	document.getElementById("main-letter").innerHTML =
		letters[currentLetterPosition];

	// Create the card depending on if there is a word available for that position
	createCard('start')
	createCard('middle')
	createCard('end')

	// update words under image
	document.getElementById("word-start").innerHTML =
		wordLibrary[letters[currentLetterPosition]].words[0];
	document.getElementById("word-mid").innerHTML =
		wordLibrary[letters[currentLetterPosition]].words[1];
	document.getElementById("word-end").innerHTML =
		wordLibrary[letters[currentLetterPosition]].words[2];

	// modify video to Library
	let videoIframe = document.getElementById("vidlink");
	videoIframe.src = wordLibrary[letters[currentLetterPosition]].videoLink;
		
	// Update progress bar at the bottom
	renderPagination();
	// select radio buttons based on previous inputs
	selectRadios();

	document.getElementById("img-start").src =
		"images/" + letters[currentLetterPosition] + "-start.png";
	document.getElementById("img-mid").src =
		"images/" + letters[currentLetterPosition] + "-mid.png";
	document.getElementById("img-end").src =
		"images/" + letters[currentLetterPosition] + "-end.png";

}

function checkAllSelected() {
	// reader be warned, this is a mind-fuck

	// create a size 4 array of trues if unselected
	let resultsSelected = [
		Results[currentLetterPosition].start === 'notSelected',
		Results[currentLetterPosition].middle === 'notSelected',
		Results[currentLetterPosition].end === 'notSelected',
		Results[currentLetterPosition].sound === 'notSelected',
	];

	let alerts = document.querySelectorAll(".button-validation")

	alerts.forEach((alert, key) => {
		resultsSelected[key] ? alert.style.display = 'block' : alert.style.display = 'none'
	})
	

	// Are start, middle and end radios selected? returns true if all three are selected
	const picturesSelected = !(
		Results[currentLetterPosition].start === 'notSelected' ||
		Results[currentLetterPosition].middle === 'notSelected' ||
		Results[currentLetterPosition].end === 'notSelected'
	)

	// Is the sound test available? returns true if sound test is available
	const soundTestAvailable = (
		Results[currentLetterPosition].start === false &&
		Results[currentLetterPosition].middle === false &&
		Results[currentLetterPosition].end === false
	)

	// if sound test not available, or available and selected we want it to be true
	soundTestSelected = (!soundTestAvailable || Results[currentLetterPosition].sound != 'notSelected')

	// retrun true if all available radio buttons are selected
	return (picturesSelected && soundTestSelected)
}

function showSoundTest() {
	// Show or hide optional sound test if all are incorrect
	// note that the nulls are included for situations where only 1 or 2 cards are shown
	if (
		(Results[currentLetterPosition].start === false ||
			Results[currentLetterPosition].start === null) &&
		(Results[currentLetterPosition].middle === false ||
			Results[currentLetterPosition].middle === null) &&
		(Results[currentLetterPosition].end === false ||
			Results[currentLetterPosition].end === null)

	) {
		// all results were false or null
		document.getElementById("sound-test").style.display = "inline";
	} else {
		// hide sound test
		document.getElementById("sound-test").style.display = "none";
	}
}

function renderPagination() {
	var progressBar = document.getElementById("progress-bar");
	// delete internal HTML
	progressBar.replaceChildren();

	// create internal blocks that contain letters for navigation
	letters.forEach((letter, key) => {
		// square element that contains the letter
		var progressBlock = document.createElement("li");
		// link that contains the letter
		var pageNumber = document.createElement("a");
		pageNumber.innerHTML = letter;
		pageNumber.setAttribute("class", "page-link");
		pageNumber.setAttribute("href", "#");

		// colour the blocks so that the selected letter is actice
		if (key == currentLetterPosition) {
			progressBlock.setAttribute("class", "page-item active");
		} else {
			progressBlock.setAttribute("class", "page-item");
		}

		// navigate to the clicked letter
		pageNumber.onclick = function() {
			if(checkAllSelected()){
				currentLetterPosition = key;
				updatePage();
			}
		};
		progressBlock.appendChild(pageNumber);
		progressBar.appendChild(progressBlock);
	});
}

function selectRadios() {
	// Collect all radios
	var allRadios = document.querySelectorAll(".all-radios");

	// Create an array of results that can be null, false, or true
	let currentResults = [
		Results[currentLetterPosition].start,
		Results[currentLetterPosition].middle,
		Results[currentLetterPosition].end,
		Results[currentLetterPosition].sound,
	];

	// mapping to convert the currentResults into an array for the radios
	const radioMapping = {
		null: [false, false],
		true: [true, false],
		false: [false, true],
	};

	// map the result from the [start,middle,end] into an size 6 array of booleans
	// .flat() at the end converts the 3x2 array into a 6x1
	var radioStatus = currentResults
		.map((result) => {
			return radioMapping[result];
		})
		.flat();

	// Select all radios based on Radio Status
	allRadios.forEach((radio, key) => {
		radio.checked = radioStatus[key];
	});
}

function generateOutput() {
	// Empty arrays for collecting human readable result data
	let availableSounds = [];
	let startMissing = [];
	// by Jasper
	let endMissing = [];
	let notAvailable = []
	let notAssessed = []

	// Go through each letter and add to either available, missing, or endMissing
	// note: middle is not included in the scoring
	// TODO: Fix scoring
	Results.forEach((letter) => {
		console.log(letter)
		if ((letter.start == true || letter.start == null) && (letter.end == true || letter.end == null)) {
			availableSounds.push(letter);
		} else if ((letter.start == 'notSelected' || letter.start == null) && (letter.end == 'notSelected' || letter.end == null) && (letter.middle == 'notSelected' || letter.middle == null)){
			notAssessed.push(letter)
		} else if ((letter.start == false || letter.start == null) && (letter.end == false || letter.end == null) && (letter.middle == false || letter.middle == null) && (letter.sound == false || letter.sound == null)) {
			notAvailable.push(letter)
		} else if ((letter.start == false || letter.start == null) && (letter.end == false || letter.end == null)) {
			startMissing.push(letter);
		} else if (letter.start == true || letter.null == null) {
			endMissing.push(letter)
		} else {
			startMissing.push(letter);
		}
	});

	// Hide questions, and display results
	document.getElementById("questions").style.display = "none";
	document.getElementById("results").style.display = "inline";

	// Convert array of letters to a single string joined by commas (,)
	const startMissingArray = startMissing
		.map((sound) => {
			return sound.letter;
		})
		.join(",");

	const availableSoundsArray = availableSounds
		.map((sound) => {
			return sound.letter;
		})
		.join(",");

	const endMissingArray = endMissing
		.map((sound) => {
			return sound.letter;
		})
		.join(",");

	const notAvailableArray = notAvailable
		.map((sound) => {
			return sound.letter;
		})
		.join(",");

	const notAssessedArray = notAssessed
		.map((sound) => {
			return sound.letter;
		})
		.join(",");

	// make string the inner html to print
	document.getElementById("start-missing").innerHTML = startMissingArray;
	document.getElementById("available-sounds").innerHTML = availableSoundsArray;
	document.getElementById("end-missing").innerHTML = endMissingArray;
	document.getElementById("not-available").innerHTML = notAvailableArray;
	document.getElementById("not-assessed").innerHTML = notAssessedArray;
}