let sections = document.getElementsByClassName("page-section");
let linksMobile = document.getElementsByClassName("sidebar-link-mobile");
let linksDesktop = document.getElementsByClassName("sidebar-link-desktop");
let current = 0;
let semaphore = false;
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
	
	sections[current].classList.remove("page-section-active");
	sections[index].classList.add("page-section-active");
	semaphore = true;
	setTimeout(() => {
		current = index;
		semaphore = false;
	}, 400);
}