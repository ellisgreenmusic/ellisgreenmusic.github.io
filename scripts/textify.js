let indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
let fonts = document.getElementsByClassName("font");
let max_margin = 0;
function textify() {
	shuffle(indices);
	for(let i = 0; i < fonts.length; i++) {
		fonts[i].style = styles[indices[i]] + " animation-delay: " + (indices[i] * -1/4) + "s;";
	}
}
textify();