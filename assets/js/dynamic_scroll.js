var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");
var menu = document.getElementById("nav-toggle");

document.addEventListener("scroll", function () {
	/*Apply classes for slide in bar*/
	scrollpos = window.scrollY;
	if (scrollpos > 10) {
		header.classList.add("bg-white");
		menu.classList.remove("text-white");
		menu.classList.add("text-black");
		//Use to switch toggleColour colours
		for (var i = 0; i < toToggle.length; i++) {
			toToggle[i].classList.add("text-gray-800");
			toToggle[i].classList.remove("text-gray-400");
		}
		header.classList.add("shadow");
		for (var i = 0; i < navcontent.children.length; i++) {
			navcontent.children[i].classList.remove("text-gray-400");
			navcontent.children[i].classList.add("text-black");
		}
		navcontent.classList.remove("bg-gray-100");
		navcontent.classList.add("bg-white");
	} else {
		header.classList.remove("bg-white");
		menu.classList.remove("text-black");
		menu.classList.add("text-white");
		//Use to switch toggleColour colours
		for (var i = 0; i < toToggle.length; i++) {
			toToggle[i].classList.add("text-gray-800");
			toToggle[i].classList.remove("text-gray-800");
		}
		for (var i = 0; i < navcontent.children.length; i++) {
			navcontent.children[i].classList.add("text-gray-400");
			navcontent.children[i].classList.remove("text-black");
		}

		header.classList.remove("shadow");
		navcontent.classList.remove("bg-white");
		navcontent.classList.add("bg-gray-100");
	}
});
