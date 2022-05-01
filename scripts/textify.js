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
		}, 750);
	}, 500);
	setTimeout(() => {
		setInterval(textifyName, 1300);
	}, 1800);
}

function textify(title) {
	shuffle(indices);
	for(let i = 0; i < title.children.length; i++) {
		title.children[i].style = "font-family: " + styles[indices[i]] + "; animation-delay: " + (indices[i] * -1/4) + "s;";
	}
}

let titles = document.getElementsByClassName("page-title");
for(let i = 0; i < titles.length; i++) {
	textify(titles[i]);
}