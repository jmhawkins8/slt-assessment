// Add new letters as needed
//const letters = ["P", "B", "T", "D", "K", "G", "F", "V", "M", "N", "L", "H", "S", "Z", "Sh", "Ch", "J", "Th", "Thh", "R", "W", "Y", "Ng", "PR", "BR", "FR", "TR", "DR", "CR", "GR", "BL", "PL", "CL", "GL", "FL", "SL", "SW", "SM", "SN", "SP", "SC", "ST", "SPR", "STR", "SCR", "SKW"];

const letters = ["S", "SM", "SN", "SP", "ST", "SW", "K", "G", "SK", "L", "SL", "PL", "BL", "FL", "CL", "GL", "F", "V", "H", "P", "B", "T", "D", "Sh", "M", "N", "Y", "W", "Z", "Ch", "J", "R", "PR", "BR", "FR", "TR", "DR", "CR", "GR", "Thh", "TH", "Ng", ];

// const singleSounds = ["P", "B", "T", "D", "K", "G", "F", "V", "M", "N", "L", "H", "S", "Z","Sh", "Ch", "J", "Th", "Thh", "R", "W", "Y", "Ng"]

// Changing the wordLibrary below the images to match
const wordLibrary = {
	P: {
		words: ["<u><b>P</b></u>en", "A<u><b>pp</b></u>le", "Cu<u><b>p</b></u>"],
		videoLink: "https://www.youtube.com/embed/3gtEbMtn9LE",
	},
	B: {
		words: ["<u><b>B</b></u>all", "Ba<u><b>b</b></u>y", "We<u><b>b</b></u>"],
		videoLink: "https://www.youtube.com/embed/huhA6KGKCDc",
	},
	T: {
		words: ["<u><b>T</b></u>ent", "Bu<u><b>tt</b></u>er", "Boa<u><b>t</b></u>"],
		videoLink: "https://www.youtube.com/embed/-RnCxGgdNis",
	},
	D: {
		words: ["<u><b>D</b></u>uck", "La<u><b>dd</b></u>er", "Han<u><b>d</b></u>"],
		videoLink: "https://www.youtube.com/embed/BTw-OvSJL94",
	},
	K: {
		words: ["<u><b>C</b></u>at", "Bu<u><b>ck</b></u>et", "Boo<u><b>k</b></u>"],
		videoLink: "https://www.youtube.com/embed/h1_0xcfFalE",
	},
	G: {
		words: ["<u><b>G</b></u>ate", "Ti<u><b>g</b></u>er", "Do<u><b>g</b></u>"],
		videoLink: "https://www.youtube.com/embed/soRnhLXRstE",
	},
	F: {
		words: ["<u><b>F</b></u>ire", "Dol<u><b>ph</b></u>in", "Lea<u><b>f</b></u>"],
		videoLink: "https://www.youtube.com/embed/4bwVmEcRnu8",
	},
	V: {
		words: ["<u><b>V</b></u>an", "Tele<u><b>v</b></u>ision", "Lo<u><b>v</b></u>e"],
		videoLink: "https://www.youtube.com/embed/2aynzXwfNQ8",
	},
	M: {
		words: ["<u><b>M</b></u>onkey", "Ha<u><b>mm</b></u>er", "Wor<u><b>m</b></u>"],
		videoLink: "https://www.youtube.com/embed/pp2Z41hWLFQ",
	},
	N: {
		words: ["<u><b>N</b></u>ose", "Mo<u><b>n</b></u>ey", "Lio<u><b>n</b></u>"],
		videoLink: "https://www.youtube.com/embed/Eo879p5MSPg",
	},
	L: {
		words: ["<u><b>L</b></u>emon", "Toi<u><b>l</b></u>et", "Gir<u><b>l</b></u>"],
		videoLink: "https://www.youtube.com/embed/1__E8RV9XFY",
	},
	H: {
		words: ["<u><b>H</b></u>at", "Bee<u><b>h</b></u>ive", ""],
		videoLink: "https://www.youtube.com/embed/6hZCVBaTbQs",
	},
	S: {
		words: ["<u><b>S</b></u>un", "Mu<u><b>sc</b></u>le", "Hou<u><b>s</b></u>e"],
		videoLink: "https://www.youtube.com/embed/LeowR71I66g",
	},
	Z: {
		words: ["<u><b>Z</b></u>ebra", "Pu<u><b>zz</b></u>le", "Chee<u><b>s</b></u>e"],
		videoLink: "https://www.youtube.com/embed/zz3CqdTfNjk",
	},
	Sh: {
		words: ["<u><b>Sh</b></u>oe", "Fi<u><b>sh</b></u>ing", "Bu<u><b>sh</b></u>"],
		videoLink: "https://www.youtube.com/embed/j7ntd7adhBQ",
	},
	Ch: {
		words: ["<u><b>Ch</b></u>air", "Cat<u><b>ch</b></u>ing", "Wit<u><b>ch</b></u>"],
		videoLink: "https://www.youtube.com/embed/Rs1ZkpkU-UQ",
	},
	J: {
		words: ["<u><b>J</b></u>uice", "Ma<u><b>g</b></u>ic", "Fri<u><b>dg</b></u>e"],
		videoLink: "https://www.youtube.com/embed/iC2J2aJZkEk",
	},
	Thh: {
		words: ["<u><b>Th</b></u>umb", "Bir<u><b>th</b></u>day", "Ba<u><b>th</b></u>"],
		videoLink: "https://www.youtube.com/embed/x_L6LM7oLzI",
	},
	TH: {
		words: ["Do you like <u><b>th</b></u>is one, or <u><b>th</b></u>at one?", "Fea<u><b>th</b></u>er", ""],
		videoLink: "https://www.youtube.com/embed/ZrhRT5Ix6do",
	},
	R: {
		words: ["<u><b>R</b></u>oad", "Ca<u><b>rr</b></u>ot", ""],
		videoLink: "https://www.youtube.com/embed/K2nADYdOMrw",
	},
	W: {
		words: ["<u><b>W</b></u>hale", "", ""],
		videoLink: "https://www.youtube.com/embed/ndtBg8Bjsm8",
	},
	Y: {
		words: ["<u><b>Y</b></u>ellow", "", ""],
		videoLink: "https://www.youtube.com/embed/IzAMNVHdnuY",
	},
	Ng: {
		words: ["", "Si<u><b>ng</b></u>ing", "Ri<u><b>ng</b></u>"],
		videoLink: "https://www.youtube.com/embed/tZbg1RvU2RY",
	},
	PR: {
		words: ["<u><b>Pr</b></u>esent", "", ""],
		videoLink: "https://www.youtube.com/embed/ZDpz5C_wlI8",
	},
	BR: {
		words: ["<u><b>Br</b></u>ead", "", ""],
		videoLink: "https://www.youtube.com/embed/DheHCx9yAVc",
	},
	FR: {
		words: ["<u><b>Fr</b></u>og", "", ""],
		videoLink: "https://www.youtube.com/embed/lafhYpvjCdk",
	},
	TR: {
		words: ["<u><b>Tr</b></u>uck", "", ""],
		videoLink: "https://www.youtube.com/embed/2Qgw27Mt4Yw",
	},
	DR: {
		words: ["<u><b>Dr</b></u>um", "", ""],
		videoLink: "https://www.youtube.com/embed/ZTXn5cc4iR8",
	},
	CR: {
		words: ["<u><b>Cr</b></u>ab", "", ""],
		videoLink: "https://www.youtube.com/embed/Z1eI0FiXkEo",
	},
	GR: {
		words: ["<u><b>Gr</b></u>ape", "", ""],
		videoLink: "https://www.youtube.com/embed/9cKcWEZjBLY",
	},
	BL: {
		words: ["<u><b>Bl</b></u>ue", "", ""],
		videoLink: "https://www.youtube.com/embed/hz9wS6iVVS0",
	},
	PL: {
		words: ["<u><b>Pl</b></u>ane", "", ""],
		videoLink: "https://www.youtube.com/embed/tW_19Rsd8sU",
	},
	CL: {
		words: ["<u><b>Cl</b></u>ap", "", ""],
		videoLink: "https://www.youtube.com/embed/xqYGTirO5cY",
	},
	GL: {
		words: ["<u><b>Gl</b></u>ue", "", ""],
		videoLink: "https://www.youtube.com/embed/sTXHuLGXutk",
	},
	FL: {
		words: ["<u><b>Fl</b></u>ower", "", ""],
		videoLink: "https://www.youtube.com/embed/BNEcDlt3Zx0",
	},
	SL: {
		words: ["<u><b>Sl</b></u>ide", "", ""],
		videoLink: "https://www.youtube.com/embed/FaQAS8U7xPw",
	},
	SW: {
		words: ["<u><b>Sw</b></u>ing", "", ""],
		videoLink: "https://www.youtube.com/embed/B1eD7luEiI0",
	},
	SM: {
		words: ["<u><b>Sm</b></u>ile", "", ""],
		videoLink: "https://www.youtube.com/embed/OKr4ioEBLmg",
	},
	SN: {
		words: ["<u><b>Sn</b></u>ail", "", ""],
		videoLink: "https://www.youtube.com/embed/a0F1TgwDi18",
	},
	SP: {
		words: ["<u><b>Sp</b></u>ider", "", ""],
		videoLink: "https://www.youtube.com/embed/Efg5CMaCxGM",
	},
	SC: {
		words: ["<u><b>Sk</b></u>ateboard", "", ""],
		videoLink: "https://www.youtube.com/embed/jz6I7ETnR-0",
	},
	ST: {
		words: ["<u><b>St</b></u>op", "", ""],
		videoLink: "https://www.youtube.com/embed/jBHR4PKDzH0",
	},
	SPR: {
		words: ["<u><b>Spr</b></u>ing", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	STR: {
		words: ["<u><b>Str</b></u>aight", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SCR: {
		words: ["<u><b>Scr</b></u>atch", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SCW: {
		words: ["<u><b>Squ</b></u>are", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SK: {
		words: ["<u><b>Sk</b></u>ate", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	SKW: {
		words: ["<u><b>Squ</b></u>are", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	KL: {
		words: ["<u><b>Cl</b></u>own", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
	KR: {
		words: ["<u><b>Cr</b></u>own", "", ""],
		videoLink: "https://www.youtube.com/embed/VOENA0wtBOk",
	},
};