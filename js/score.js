const letters = ['p','b','t','d', 'k']
console.log(letters)




var Results = letters.map(value => {
	return {
			letter: value,
			begining: null,
			middle: null,
			end: null
	}

})

console.log(Results)