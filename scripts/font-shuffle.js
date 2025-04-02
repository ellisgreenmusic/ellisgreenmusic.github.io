let indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let styles = [
	"'Abril Fatface', sans-serif",
	"'Alfa Slab One', sans-serif",
	"'Boogaloo', sans-serif",
	"'Fredoka One', sans-serif",
	"'Henny Penny', sans-serif",
	"'Lobster', sans-serif",
	"'Palette Mosaic', sans-serif",
	"'Sevillana', sans-serif",
	"'Smokum', sans-serif",
	"'Syne Tactile', sans-serif"
];
let keyframes = [
	{transform: 'translateY(-10px)',  opacity: 0},
	{transform: 'translateY(-10px)',  opacity: 0, offset: .5},
	{transform: 'translateY(0)',  opacity: 1}
];
let title = document.getElementById("title");

function fontShuffleTitle() {
	shuffle(indices);
	let letters = title.children;
	for(let i = 0; i < letters.length; i++) {
		letters[i].style = "font-family: " + styles[indices[i]] + ";";
		letters[i].animate(keyframes, {
			duration: 80 * indices[i] + 50,
			easing: 'ease-out'
		});
	}
}