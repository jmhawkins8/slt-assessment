
// Add new letters as needed
const letters = ["P", "B", "T", "D", "K", "G", "F", "V", "M", "N", "L", "H", "S", "Z", "Sh", "Ch"];

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

// Changing the words below the images to match

const words = {P:["Pen", "Apple", "Cup"],
B:["Ball", "Baby", "Web"],
T:["Tent", "Butter", "Boat"],
D:["Duck", "Ladder", "Hand"],
K:["Cat", "Bucket", "Book"],
G:["Gate", "Tiger", "Dog"], 
F:["Fire", "Dolphin", "Leaf"],
V:["Van", "TV", "Love"],
M:["Monkey", "Hammer", "Worm"],
N:["Nose", "Money", "Lion"],
L:["Lemon", "Toilet", "Girl"],
H:["Hat", "Beehive", ""],
S:["Sun", "Muscle", "House"],
Z:["Zebra", "Puzzle", "Cheese"],
Sh:["Shoe", "Fishing", "Bush"],
Ch:["Chair", "Catching", "Witch"],
}

function initiatePage() {
	console.log(Results)
	// Select all radios based on class .radio-btn
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
	selectRadios()
}

// refresh page to current letter, images and pagination
function updatePage() {

	selectRadios()

	document.getElementById("main-letter").innerHTML =
		letters[currentLetterPosition];

	document.getElementById("word-start").innerHTML =
		words[letters[currentLetterPosition]][0];
	document.getElementById("word-mid").innerHTML =
		words[letters[currentLetterPosition]][1];
	document.getElementById("word-end").innerHTML =
		words[letters[currentLetterPosition]][2];

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

	// Collect all radios
	var allRadios = document.querySelectorAll('.all-radios')

	// Create an array of results that can be null, false, or true
	let currentResults = [Results[currentLetterPosition].start, Results[currentLetterPosition].middle, Results[currentLetterPosition].end]

	// mapping to convert the currentResults into an array for the radios
	const radioMapping = {null: [false,false],
						true: [true, false],
						false: [false,true]}

	// map the result from the [start,middle,end] into an size 6 array of booleans 
	// .flat() at the end converts the 3x2 array into a 6x1
	var radioStatus = currentResults.map((result)=>{
		return radioMapping[result]
	}).flat()

	// Select all radios based on Radio Status
	allRadios.forEach((radio, key) =>{
		radio.checked = radioStatus[key]
	})

}