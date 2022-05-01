let loadingScreen = document.getElementById("loading-screen");
function loaded() {
	loadingScreen.style.opacity = 0;
	setTimeout(() => {
		animateName();
		loadingScreen.style.display = "none";
	}, 400);
}