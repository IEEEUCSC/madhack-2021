var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var brandname = document.getElementById("brandname");
var menu = document.getElementById("nav-toggle");

document.addEventListener("scroll", function () {
	/*Apply classes for slide in bar*/
	scrollpos = window.scrollY;
	if (scrollpos > 10) {
		header.classList.add("bg-white");
		menu.classList.remove("text-white");
		menu.classList.add("text-black");
		header.classList.add("shadow");
		navcontent.classList.remove("bg-gray-100");
		navcontent.classList.add("bg-white");
	} else {
		header.classList.remove("bg-white");
		menu.classList.remove("text-black");
		menu.classList.add("text-white");
		header.classList.remove("shadow");
		navcontent.classList.remove("bg-white");
		navcontent.classList.add("bg-gray-100");
	}
});
