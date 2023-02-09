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
let name = document.getElementsByClassName("name-letters");
let subtitle = document.getElementById("name-subtitle");
function textifyName() {
	shuffle(indices);
	for(let i = 0; i < 10; i++) {
		name[i].style.fontFamily = styles[indices[i]];
		name[i].style.marginTop = Math.floor(Math.random() * 20) + "px";
	}
}
textifyName();

function animateName() {
	setTimeout(() => {
		for(let i = 0; i < 10; i++) {
			setTimeout(() => {
				name[indices[i]].classList.remove("font-hidden");
			}, 25*i);
		}
		setTimeout(() => {
			subtitle.style.visibility = "visible";
			subtitle.style.opacity = "1";
		}, 500);
	}, 500);
	setTimeout(() => {
		setInterval(textifyName, 1300);
	}, 1800);
}

let titles = document.getElementsByClassName("page-title-text");
let keyframes = [
	{transform: 'translateY(-10px)',  opacity: 0},
	{transform: 'translateY(-10px)',  opacity: 0, offset: .5},
	{transform: 'translateY(0)',  opacity: 1}
];
function textifyTitle(index) {
	shuffle(indices);
	let letters = titles[index - 1].children
	for(let i = 0; i < letters.length; i++) {
		letters[i].style = "font-family: " + styles[indices[i]] + ";";
		letters[i].animate(keyframes, {
			duration: 80 * indices[i] + 50,
			easing: 'ease-out'
		});
	}
}