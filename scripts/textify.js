let styles = [
	"font-family: 'Abril Fatface', cursive;",
	"font-family: 'Alfa Slab One', cursive;",
	"font-family: 'Boogaloo', cursive;",
	"font-family: 'Fredoka One', cursive;",
	"font-family: 'Henny Penny', cursive;",
	"font-family: 'Lobster', cursive;",
	"font-family: 'Palette Mosaic', cursive;",
	"font-family: 'Sevillana', cursive;",
	"font-family: 'Smokum', cursive;",
	"font-family: 'Syne Tactile', cursive;"
];
function shuffle() {
	for(let i = styles.length - 1; i > 0; i--) {
		//durstenfeld shuffle
		let j = Math.floor(Math.random() * (i + 1));
		let temp = styles[i];
		styles[i] = styles[j];
		styles[j] = temp;
	}
}
let fonts = document.getElementsByClassName("font");
let max_margin = 8;
function textify() {
	shuffle();
	for(let i = 0; i < fonts.length; i++) {
		fonts[i].style = styles[i] + " margin-top: " + Math.floor(Math.random() * max_margin) + "px;"
	}
}
textify();