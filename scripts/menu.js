let sidebar = document.getElementById("sidebar-mobile");
let overlay = document.getElementById("overlay");
function openMenu() {
	sidebar.style.left = "0";
	overlay.style.opacity = ".5";
	overlay.style.pointerEvents = "auto";
}
function closeMenu() {
	sidebar.style.left = "-90%";
	overlay.style.opacity = "0";
	overlay.style.pointerEvents = "none";
}