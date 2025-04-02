let name = document.getElementsByClassName("name-letters");
let subtitle = document.getElementById("name-subtitle");

function fontShuffleName() {
	shuffle(indices);
	for(let i = 0; i < 10; i++) {
		name[i].style.fontFamily = styles[indices[i]];
		name[i].style.marginTop = Math.floor(Math.random() * 20) + "px";
	}
}
fontShuffleName();

function animateHome() {
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
	}, 300);
	setTimeout(() => {
		setInterval(fontShuffleName, 1300);
	}, 1800);
}