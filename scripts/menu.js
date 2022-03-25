let sidebar = document.getElementById("sidebar-mobile");
let overlay = document.getElementById("overlay");
function openMenu() {
	sidebar.style.marginLeft = "0px";
	sidebar.style.left = "0";
	overlay.style.opacity = ".5";
	overlay.style.pointerEvents = "auto";
}
function closeMenu() {
	sidebar.style.left = "-90%";
	overlay.style.opacity = "0";
	overlay.style.pointerEvents = "none";
}
//Swiping!
let startX = 0;
let startY = 0;
sidebar.addEventListener("touchstart", e => {
	startX = e.changedTouches[0].screenX;
	startY = e.changedTouches[0].screenY;
});
sidebar.addEventListener("touchend", e => {	
	let distanceX = e.changedTouches[0].screenX - startX;
	let distanceY = e.changedTouches[0].screenY - startY;
	if(distanceX < -10 & Math.abs(distanceX) > Math.abs(distanceY)) {
		closeMenu();
	} else {
		sidebar.style.marginLeft = "0px";
	}
});
sidebar.addEventListener("touchmove", e => {	
	let distanceX = e.changedTouches[0].screenX - startX;
	if(distanceX < 0) {
		sidebar.style.marginLeft = distanceX + "px";
	}
});
