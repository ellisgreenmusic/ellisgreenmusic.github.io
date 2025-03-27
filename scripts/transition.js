let sections = document.getElementsByClassName("page-section");
let linksMobile = document.getElementsByClassName("sidebar-link-mobile");
let linksDesktop = document.getElementsByClassName("sidebar-link-desktop");
let current = 0;
let semaphore = false;

//for reloading page
let anchor = window.location.hash;
if(anchor === "#home" || anchor === "") {
	current = 0;
} else {
	if(anchor === "#about") {
		current = 1;
	} else if(anchor === "#albums") {
		current = 2;
	} else if(anchor === "#jazz-band") {
		current = 3;
	} else if(anchor === "#solo-piano") {
		current = 4;
	} else if(anchor === "#weddings") {
		current = 5;
	} else if(anchor === "#holiday") {
		current = 6;
	} else { //contact, or anything else
		current = 7;
	}
	textifyTitle(current);
}
sections[current].classList.add("page-section-active");
linksMobile[current].classList.add("sidebar-link-active");
linksDesktop[current].classList.add("sidebar-link-active");

let month = new Date().getMonth();
if(month === 10 || month === 11) {
	let holidayLinks = document.getElementsByClassName("holiday-link");
	for (let i = 0; i < holidayLinks.length; i++) {
		holidayLinks[i].style.display = "block";
	}
}

function transition(index) {
	if(current === index || semaphore === true) {
		return;
	}
	for(let i = 0; i < sections.length; i++) {
		if(i === index) {
			sections[i].classList.add("page-section-active");
			linksMobile[i].classList.add("sidebar-link-active");
			linksDesktop[i].classList.add("sidebar-link-active");
		} else {
			sections[i].classList.remove("page-section-active");
			linksMobile[i].classList.remove("sidebar-link-active");
			linksDesktop[i].classList.remove("sidebar-link-active");
		}
	}
	
	if(index !== 0) {
		textifyTitle(index);
	}
	
	sections[current].classList.remove("page-section-active");
	sections[index].classList.add("page-section-active");
	window.scrollTo({top: 0});
	semaphore = true;
	setTimeout(() => {
		current = index;
		semaphore = false;
	}, 400);
}
