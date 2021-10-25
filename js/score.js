const letters = ["P", "B", "T", "D", "K"];
console.log(letters);

// This number will itterate through the letters
currentLetterPosition = 0;

var Results = letters.map((value) => {
	return {
		letter: value,
		begining: null,
		middle: null,
		end: null,
	};
});

function initiatePage() {
	console.log(Results);

	// Select all radios based on vlass .radio-btn
	var radios = document.querySelectorAll(".radio-btn");

	// itterate through each class, and create a function that fires when clicked
	radios.forEach((radio) => {
		radio.onclick = function() {
			console.log(radio.getAttribute("value"));
			// modify Results by the value of the radio clicked
			Results[currentLetterPosition][
				radio.getAttribute("name")
			] = radio.getAttribute("value");
			console.log(Results);
		};
	});

	// Prepare letters to itterate through
	document.getElementById("next-button").onclick = function() {
		if (currentLetterPosition < letters.length - 1) {
			currentLetterPosition++;
			refreshPage();
		}
		console.log(letters[currentLetterPosition]);
	};

	document.getElementById("previous-button").onclick = function() {
		if (currentLetterPosition > 0) {
			currentLetterPosition--;
			refreshPage();
		}
		console.log(letters[currentLetterPosition]);
	};

	// Ensure that page is starting at the correct position
	document.getElementById("main-letter").innerHTML =
		letters[currentLetterPosition];

	document.getElementById("img-start").src =
		"images/" + letters[currentLetterPosition] + "-start.jpg";
	document.getElementById("img-mid").src =
		"images/" + letters[currentLetterPosition] + "-mid.jpg";
	document.getElementById("img-end").src =
		"images/" + letters[currentLetterPosition] + "-end.jpg";

	renderPagination();
}

function refreshPage() {
	document.getElementById("main-letter").innerHTML =
		letters[currentLetterPosition];

	document.getElementById("img-start").src =
		"images/" + letters[currentLetterPosition] + "-start.jpg";
	document.getElementById("img-mid").src =
		"images/" + letters[currentLetterPosition] + "-mid.jpg";
	document.getElementById("img-end").src =
		"images/" + letters[currentLetterPosition] + "-end.jpg";

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
			refreshPage();
		};
		progressBlock.appendChild(pageNumber);
		progressBar.appendChild(progressBlock);
	});
}


function selectRadios() {
	
}