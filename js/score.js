const letters = ["p", "b", "t", "d", "k"];
console.log(letters);

// This number will itterate through the letters
currentLetterPosition = 0

var Results = letters.map((value) => {
	return {
		letter: value,
		begining: null,
		middle: null,
		end: null,
	};
});

function prepareButtons() {
	console.log(Results);

	// Select all radios based on vlass .radio-btn
	var radios = document.querySelectorAll(".radio-btn");

	// itterate through each class, and create a function that fires when clicked
	radios.forEach((radio) => {
		radio.onclick = function(){
			console.log(radio.getAttribute("value"))
			Results[currentLetterPosition][radio.getAttribute("name")] = radio.getAttribute("value")
			// if (radio.getAttribute("name") == "start-buttons") {
			// 	Results[currentLetterPosition][radio.getAttribute("name")] = radio.getAttribute("value")
			// }
			console.log(Results)
		}
	});

}
