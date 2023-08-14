let loadingScreen = document.getElementById("loading-screen");
function loaded(isMain) {
	loadingScreen.style.opacity = 0;
	setTimeout(() => {
		if(isMain) {
			animateName();
		}	
		loadingScreen.style.display = "none";
	}, 400);
}