/* eslint-disable no-undef */

$(document).ready(function () {
	window.addEventListener("scroll", function () {
		if (window.pageYOffset > 90) document.querySelector(".navbar").classList.add("navbar-shrink");
		else document.querySelector(".navbar").classList.remove("navbar-shrink");
	});

	const videoSrc = document.querySelector("#player-1").getAttribute("src");
	const videoPlayBtns = document.querySelectorAll(".video-play-btn, .video-popup");
	videoPlayBtns.forEach(function (videoPlayBtn) {
		videoPlayBtn.addEventListener("click", function () {
			const videoPopup = document.querySelector(".video-popup");
			if (videoPopup.classList.contains("open")) {
				videoPopup.classList.remove("open");
				document.querySelector("#player-1").setAttribute("src", "");
			} else {
				videoPopup.classList.add("open");
				const playerSrc = document.querySelector("#player-1").getAttribute("src");
				if (!playerSrc) document.querySelector("#player-1").setAttribute("src", videoSrc);
			}
		});
	});

	const c = { loop: true, margin: 0, autoplay: true, responsiveClass: true };
	const r = { responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 6 } } };
	const r2 = { responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } } };
	$(".features-carousel").owlCarousel({ ...c, ...r2 });
	$(".screenshots-carousel").owlCarousel({ ...c, ...r });
	$(".testimonials-carousel").owlCarousel({ ...c, ...r2 });
	$(".team-carousel").owlCarousel({ ...c, ...r2 });

	$.scrollIt({ topOffset: -50 });

	$(".nav-link").on("click", function () {
		$(".navbar-collapse").collapse("hide");
	});
});
