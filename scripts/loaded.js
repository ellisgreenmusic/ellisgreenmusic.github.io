//reveal holiday sidebar links if Novermber or December
let month = new Date().getMonth();
if(month === 10 || month === 11) {
	let holidayLinks = document.getElementsByClassName("holiday-link");
	for (let i = 0; i < holidayLinks.length; i++) {
		holidayLinks[i].style.display = "block";
	}
}

let page = document.getElementById("page");
let loadingScreen = document.getElementById("loading-screen");
function loaded(isHome) {
	if(!isHome) {
		fontShuffleTitle();
	}
	loadingScreen.style.opacity = 0;
	page.classList.add("page-active");
	//animate home screen
	setTimeout(() => {
		if(isHome) {
			animateHome();
		}
		loadingScreen.style.display = "none";
	}, 400);
}