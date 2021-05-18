const handleNavbarMobile = function(){
	let menuButton = document.querySelector(".menu-button");
	let navBar = document.querySelector(".nav-bar")
	let isNavbarClosed = true;
	 menuButton.addEventListener("click", function(){
		navBar.classList.toggle("nav-bar-visible");
		if(navBar.classList.contains("nav-bar-visible")){
			menuButton.innerHTML = "close"
		} else {
			menuButton.innerHTML = "menu"
		}

	});
};

export default handleNavbarMobile 
 