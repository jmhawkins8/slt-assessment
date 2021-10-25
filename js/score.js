
// Add new letters as needed
const letters = ["P", "B", "T", "D", "K"];

// This number will itterate through the letters
currentLetterPosition = 0;

// Create object for storing results based on the letters array
var Results = letters.map((letter) => {
	return {
		letter: letter,
		start: null,
		middle: null,
		end: null,
	};
});

function initiatePage() {
	console.log(Results)
	// Select all radios based on vlass .radio-btn
	var radios = document.querySelectorAll(".radio-btn");

	// itterate through each class, and create a function that fires when clicked
	radios.forEach((radio) => {
		radio.onclick = function() {
			// modify Results by the value of the radio clicked
			Results[currentLetterPosition][radio.getAttribute("name")] = radio.getAttribute("value");
			console.log(Results);
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

	renderPagination();
}

// refresh page to current letter, images and pagination
function updatePage() {
	document.getElementById("main-letter").innerHTML =
		letters[currentLetterPosition];

	document.getElementById("img-start").src =
		"images/" + letters[currentLetterPosition] + "-start.png";
	document.getElementById("img-mid").src =
		"images/" + letters[currentLetterPosition] + "-mid.png";
	document.getElementById("img-end").src =
		"images/" + letters[currentLetterPosition] + "-end.png";

	renderPagination();
}

function renderPagination() {
	var progressBar = document.getElementById("progress-bar");
	progressBar.replaceChildren();

	letters.forEach((letter, key) => {
		var progressBlock = document.createElement("li");
		var pageNumber = document.createElement("a");
		pageNumber.innerHTML = letter;
		pageNumber.setAttribute("class", "page-link");
		pageNumber.setAttribute("href", "#");

		if (key == currentLetterPosition) {
			progressBlock.setAttribute("class", "page-item active");
		} else {
			progressBlock.setAttribute("class", "page-item");
		}
		pageNumber.onclick = function() {
			currentLetterPosition = key;
			updatePage();
		};
		progressBlock.appendChild(pageNumber);
		progressBar.appendChild(progressBlock);
	});
}


function selectRadios() {
	

}