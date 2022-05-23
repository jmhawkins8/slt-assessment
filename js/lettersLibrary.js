// Add new letters as needed
//const letters = ["P", "B", "T", "D", "K", "G", "F", "V", "M", "N", "L", "H", "S", "Z", "Sh", "Ch", "J", "Th", "Thh", "R", "W", "Y", "Ng", "PR", "BR", "FR", "TR", "DR", "CR", "GR", "BL", "PL", "CL", "GL", "FL", "SL", "SW", "SM", "SN", "SP", "SC", "ST", "SPR", "STR", "SCR", "SKW"];

const letters = ["S", "SM", "SN", "SP", "ST", "SW", "K", "G", "SK", "L", "SL", "PL", "BL", "FL", "CL", "GL", "F", "V", "H", "P", "B", "T", "D", "Sh", "M", "N", "Y", "W", "Z", "Ch", "J", "R", "PR", "BR", "FR", "TR", "DR", "CR", "GR", "Th", "TH", "Ng", ];

// const singleSounds = ["P", "B", "T", "D", "K", "G", "F", "V", "M", "N", "L", "H", "S", "Z","Sh", "Ch", "J", "Th", "Thh", "R", "W", "Y", "Ng"]

// Changing the wordLibrary below the images to match
const wordLibrary = {
	P: {
		words: ["Pen", "Apple", "Cup"],
		videoLink: "https://www.youtube.com/embed/3gtEbMtn9LE",
	},
	B: {
		words: ["Ball", "Baby", "Web"],
		videoLink: "https://www.youtube.com/embed/huhA6KGKCDc",
	},
	T: {
		words: ["Tent", "Butter", "Boat"],
		videoLink: "https://www.youtube.com/embed/-RnCxGgdNis",
	},
	D: {
		words: ["Duck", "Ladder", "Hand"],
		videoLink: "https://www.youtube.com/embed/BTw-OvSJL94",
	},
	K: {
		words: ["Cat", "Bucket", "Book"],
		videoLink: "https://www.youtube.com/embed/h1_0xcfFalE",
	},
	G: {
		words: ["Gate", "Tiger", "Dog"],
		videoLink: "https://www.youtube.com/embed/soRnhLXRstE",
	},
	F: {
		words: ["Fire", "Dolphin", "Leaf"],
		videoLink: "https://www.youtube.com/embed/4bwVmEcRnu8",
	},
	V: {
		words: ["Van", "TV", "Love"],
		videoLink: "https://www.youtube.com/embed/2aynzXwfNQ8",
	},
	M: {
		words: ["Monkey", "Hammer", "Worm"],
		videoLink: "https://www.youtube.com/embed/pp2Z41hWLFQ",
	},
	N: {
		words: ["Nose", "Money", "Lion"],
		videoLink: "https://www.youtube.com/embed/Eo879p5MSPg",
	},
	L: {
		words: ["Lemon", "Toilet", "Girl"],
		videoLink: "https://www.youtube.com/embed/1__E8RV9XFY",
	},
	H: {
		words: ["Hat", "Beehive", ""],
		videoLink: "https://www.youtube.com/embed/6hZCVBaTbQs",
	},
	S: {
		words: ["Sun", "Muscle", "House"],
		videoLink: "https://www.youtube.com/embed/LeowR71I66g",
	},
	Z: {
		words: ["Zebra", "Puzzle", "Cheese"],
		videoLink: "https://www.youtube.com/embed/zz3CqdTfNjk",
	},
	Sh: {
		words: ["Shoe", "Fishing", "Bush"],
		videoLink: "https://www.youtube.com/embed/j7ntd7adhBQ",
	},
	Ch: {
		words: ["Chair", "Catching", "Witch"],
		videoLink: "https://www.youtube.com/embed/Rs1ZkpkU-UQ",
	},
	J: {
		words: ["Juice", "Magic", "Fridge"],
		videoLink: "https://www.youtube.com/embed/iC2J2aJZkEk",
	},
	Th: {
		words: ["Thumb", "Birthday", "Bath"],
		videoLink: "https://www.youtube.com/embed/x_L6LM7oLzI",
	},
	TH: {
		words: ["Do you like this one? or that one?", "Feather", ""],
		videoLink: "https://www.youtube.com/embed/ZrhRT5Ix6do",
	},
	R: {
		words: ["Road", "Carrot", ""],
		videoLink: "https://www.youtube.com/embed/K2nADYdOMrw",
	},
	W: {
		words: ["Whale", "", ""],
		videoLink: "https://www.youtube.com/embed/ndtBg8Bjsm8",
	},
	Y: {
		words: ["Yellow", "", ""],
		videoLink: "https://www.youtube.com/embed/IzAMNVHdnuY",
	},
	Ng: {
		words: ["", "Singing", "Ring"],
		videoLink: "https://www.youtube.com/embed/tZbg1RvU2RY",
	},
	PR: {
		words: ["Present", "", ""],
		videoLink: "https://www.youtube.com/embed/ZDpz5C_wlI8",
	},
	BR: {
		words: ["Bread", "", ""],
		videoLink: "https://www.youtube.com/embed/DheHCx9yAVc",
	},
	FR: {
		words: ["Frog", "", ""],
		videoLink: "https://www.youtube.com/embed/lafhYpvjCdk",
	},
	TR: {
		words: ["Truck", "", ""],
		videoLink: "https://www.youtube.com/embed/2Qgw27Mt4Yw",
	},
	DR: {
		words: ["Drum", "", ""],
		videoLink: "https://www.youtube.com/embed/ZTXn5cc4iR8",
	},
	CR: {
		words: ["Crab", "", ""],
		videoLink: "https://www.youtube.com/embed/Z1eI0FiXkEo",
	},
	GR: {
		words: ["Grape", "", ""],
		videoLink: "https://www.youtube.com/embed/9cKcWEZjBLY",
	},
	BL: {
		words: ["Blue", "", ""],
		videoLink: "https://www.youtube.com/embed/hz9wS6iVVS0",
	},
	PL: {
		words: ["Plane", "", ""],
		videoLink: "https://www.youtube.com/embed/tW_19Rsd8sU",
	},
	CL: {
		words: ["Clap", "", ""],
		videoLink: "https://www.youtube.com/embed/xqYGTirO5cY",
	},
	GL: {
		words: ["Glue", "", ""],
		videoLink: "https://www.youtube.com/embed/sTXHuLGXutk",
	},
	FL: {
		words: ["Flower", "", ""],
		videoLink: "https://www.youtube.com/embed/BNEcDlt3Zx0",
	},
	SL: {
		words: ["Slide", "", ""],
		videoLink: "https://www.youtube.com/embed/FaQAS8U7xPw",
	},
	SW: {
		words: ["Swing", "", ""],
		videoLink: "https://www.youtube.com/embed/B1eD7luEiI0",
	},
	SM: {
		words: ["Smile", "", ""],
		videoLink: "https://www.youtube.com/embed/OKr4ioEBLmg",
	},
	SN: {
		words: ["Snail", "", ""],
		videoLink: "https://www.youtube.com/embed/a0F1TgwDi18",
	},
	SP: {
		words: ["Spider", "", ""],
		videoLink: "https://www.youtube.com/embed/Efg5CMaCxGM",
	},
	SC: {
		words: ["Skateboard", "", ""],
		videoLink: "https://www.youtube.com/embed/jz6I7ETnR-0",
	},
	ST: {
		words: ["Stop", "", ""],
		videoLink: "https://www.youtube.com/embed/jBHR4PKDzH0",
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
	SK: {
		words: ["Skate", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SKW: {
		words: ["Square", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	KL: {
		words: ["Clown", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	KR: {
		words: ["Crown", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
};