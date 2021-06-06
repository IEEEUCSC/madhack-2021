document.onreadystatechange = function () {
	if (screen.width > 720) {
		$(document).on("click mousemove", "body", function (e) {
			var x = e.clientX;
			var y = e.clientY;
			var newposX = x / -15;
			var newposY = y / 30;
			$(".bbred").css("transform", "translate3d(" + newposX + "px," + newposY + "px, 0px)");
		});
	} else {
		let android = document.getElementById("android");
		let phone = document.getElementById("phone");
		let flutter = document.getElementById("flutter");
		let react = document.getElementById("react");
		let footerAnimation = document.getElementById("waves");
		footerAnimation.remove();
		android.classList.remove("top-96", "left-16", "animate-pulse");
		phone.classList.remove("left-96", "animate-pulse");
		phone.classList.add("right-10");
		android.classList.add("top-10");
		react.classList.remove("animate-pulse");
		flutter.classList.remove("animate-pulse", "top-10");
		flutter.classList.add("bottom-40");
	}
};
