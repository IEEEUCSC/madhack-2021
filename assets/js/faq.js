var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			content.classList.remove("py-2", "lg:py-4", "sm:py-2", "md:py-4", "mb-2");
		} else {
			content.classList.add("py-2", "lg:py-4", "sm:py-2", "md:py-4", "mb-2");
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}
