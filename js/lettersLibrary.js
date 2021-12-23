// Add new letters as needed
const letters = ["P", "B", "T", "D", "K", "G", "F", "V", "M", "N", "L", "H", "S", "Z", "Sh", "Ch", "J", "Th", "Thh", "R", "W", "Y", "Ng", "PR", "BR", "FR", "TR", "DR", "CR", "GR", "BL", "PL", "CL", "GL", "FL", "SL", "SW", "SM", "SN", "SP", "SC", "ST", "SPR", "STR", "SCR", "SKW"];

// const singleSounds = ["P", "B", "T", "D", "K", "G", "F", "V", "M", "N", "L", "H", "S", "Z","Sh", "Ch", "J", "Th", "Thh", "R", "W", "Y", "Ng"]

// Changing the wordLibrary below the images to match
const wordLibrary = {
	P: {
		words: ["Pen", "Apple", "Cup"],
		videoLink: "https://www.youtube.com/embed/XP0GQjiL82I",
	},
	B: {
		words: ["Ball", "Baby", "Web"],
		videoLink: "https://www.youtube.com/embed/4CoxQ3gMp4I",
	},
	T: {
		words: ["Tent", "Butter", "Boat"],
		videoLink: "https://www.youtube.com/embed/vm4MvGw-wt8",
	},
	D: {
		words: ["Duck", "Ladder", "Hand"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	K: {
		words: ["Cat", "Bucket", "Book"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	G: {
		words: ["Gate", "Tiger", "Dog"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	F: {
		words: ["Fire", "Dolphin", "Leaf"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	V: {
		words: ["Van", "TV", "Love"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	M: {
		words: ["Monkey", "Hammer", "Worm"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	N: {
		words: ["Nose", "Money", "Lion"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	L: {
		words: ["Lemon", "Toilet", "Girl"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	H: {
		words: ["Hat", "Beehive", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	S: {
		words: ["Sun", "Muscle", "House"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	Z: {
		words: ["Zebra", "Puzzle", "Cheese"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	Sh: {
		words: ["Shoe", "Fishing", "Bush"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	Ch: {
		words: ["Chair", "Catching", "Witch"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	J: {
		words: ["Juice", "Magic", "Fridge"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	Th: {
		words: ["Thumb", "Birthday", "Bath"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	Th: {
		words: ["Do you like this one? or that one?", "Feather", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	R: {
		words: ["Road", "Carrot", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	W: {
		words: ["Whale", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	Y: {
		words: ["Yellow", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	Ng: {
		words: ["", "Singing", "Ring"],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	PR: {
		words: ["Present", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	BR: {
		words: ["Bread", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	FR: {
		words: ["Frog", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	TR: {
		words: ["Truck", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	DR: {
		words: ["Drum", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	CR: {
		words: ["Crab", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	GR: {
		words: ["Grape", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	BL: {
		words: ["Blue", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	PL: {
		words: ["Plane", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	CL: {
		words: ["Clap", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	GL: {
		words: ["Glue", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	FL: {
		words: ["Flower", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SL: {
		words: ["Slide", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SW: {
		words: ["Swing", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SM: {
		words: ["Smile", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SN: {
		words: ["Snail", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SP: {
		words: ["Spider", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SC: {
		words: ["Skateboard", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	ST: {
		words: ["Stop", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SPR: {
		words: ["Spring", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	STR: {
		words: ["Straight", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SCR: {
		words: ["Scratch", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SCW: {
		words: ["Square", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
};