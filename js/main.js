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
		start: null,
		middle: null,
		end: null,
		sound: null,
	};
});

function initiatePage() {
	// hide results and soundtest
	document.getElementById("results").style.display = "none";
	document.getElementById("sound-test").style.display = "none";
	// Select all radios based on class .radio-btn
	var radios = document.querySelectorAll(".radio-btn");

	// itterate through each class, and create a function that fires when clicked
	radios.forEach((radio) => {
		radio.onclick = function() {
			// modify Results by the value of the radio clicked
			Results[currentLetterPosition][
				radio.getAttribute("name")
			] = JSON.parse(radio.getAttribute("value"));

			console.log(Results)
			showSoundTest()

		};
	});

	// Creating itterations through next and previous buttons
	document.getElementById("next-button").onclick = function() {
		if (currentLetterPosition < letters.length - 1) {
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

	// Ensure that page is starting at the correct position
	document.getElementById("main-letter").innerHTML =
		letters[currentLetterPosition];

	document.getElementById("img-start").src =
		"images/" + letters[currentLetterPosition] + "-start.png";
	document.getElementById("img-mid").src =
		"images/" + letters[currentLetterPosition] + "-mid.png";
	document.getElementById("img-end").src =
		"images/" + letters[currentLetterPosition] + "-end.png";

	document.getElementById("submit-button").onclick = function() {
		generateOutput();
	};

	document.getElementById("go-back-button").onclick = function() {
		document.getElementById("questions").style.display = "inline";
		document.getElementById("results").style.display = "none";
	};

	// Update progress bar at the bottom
	renderPagination();
	// select radio buttons based on previous inputs
	selectRadios();
}

// refresh page to current letter, images and pagination
function updatePage() {
	document.getElementById("main-letter").innerHTML =
		letters[currentLetterPosition];

	document.getElementById("word-start").innerHTML =
		wordLibrary[letters[currentLetterPosition]].words[0];
	document.getElementById("word-mid").innerHTML =
		wordLibrary[letters[currentLetterPosition]].words[1];
	document.getElementById("word-end").innerHTML =
		wordLibrary[letters[currentLetterPosition]].words[2];

	document.getElementById("img-start").src =
		"images/" + letters[currentLetterPosition] + "-start.png";
	document.getElementById("img-mid").src =
		"images/" + letters[currentLetterPosition] + "-mid.png";
	document.getElementById("img-end").src =
		"images/" + letters[currentLetterPosition] + "-end.png";

	// Update progress bar at the bottom
	renderPagination();
	// select radio buttons based on previous inputs
	selectRadios();
}

function showSoundTest() {
	


			// Show or hide optional sound test if all are incorrect
			if (
					Results[currentLetterPosition].start === true &&
					Results[currentLetterPosition].middle === true &&
					Results[currentLetterPosition].end === true
			
			) {
				// all results were false
				document.getElementById("sound-test").style.display = "none";
				
			}
			else{
				// hide sound test
				document.getElementById("sound-test").style.display = "inline";
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
			currentLetterPosition = key;
			updatePage();
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
	var availableSounds = [];
	var missingSounds = [];
	// by Jasper
	var toPractice = [];

	// Go through each letter and add to either available, missing, or toPractice
	Results.forEach((letter) => {
		if (letter.start && letter.middle && letter.end) {
			availableSounds.push(letter);
		} else if (!(letter.start || letter.middle || letter.end)) {
			missingSounds.push(letter);
		} else {
			toPractice.push(letter);
		}
	});

	// Hide questions, and display results
	document.getElementById("questions").style.display = "none";
	document.getElementById("results").style.display = "inline";

	// Convert array of letters to a single string joined by commas (,)
	const missingSoundsArray = missingSounds
		.map((sound) => {
			return sound.letter;
		})
		.join(",");

	const availableSoundsArray = availableSounds
		.map((sound) => {
			return sound.letter;
		})
		.join(",");

	const toPracticeArray = toPractice
		.map((sound) => {
			return sound.letter;
		})
		.join(",");

	// make string the inner html to print
	document.getElementById("missing-sounds").innerHTML = missingSoundsArray;
	document.getElementById(
		"available-sounds"
	).innerHTML = availableSoundsArray;
	document.getElementById("to-practice").innerHTML = toPracticeArray;
}