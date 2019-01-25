function createAudioEvent(i) {
	if (i !== 0) {
		$("#sandstorm-")
			.clone()
			.attr("id", `sandstorm-${i}`)
			.appendTo($(this).parent());
	}
	$(this).data("darude", i);
}

function playAudioEvent() {
	$(`#sandstorm-${$(this).data("darude")}`)[0].play();
}

$(document).ready(() => {
	let windowHeight = $(window).height();
	let navigationHeight;

	/* ============== Slider ============== */
	$("#header-slide").slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 8000,
		mobileFirst: true
	});

	$(window)
		.resize(() => {
			windowHeight = $(window).height();
			navigationHeight = $("#navigation").height();
			$("#header-wrap").css(
				"height",
				`${windowHeight - navigationHeight / 2}px`
			);
			$("#header-wrap .logo").css(
				"width",
				`${$("#header-wrap .container").width()}px`
			);
		})
		.resize();

	/* ============== MENU ============== */
	$("#menulink").click(event => {
		event.preventDefault();
		if ($(".navigation-wrapper").hasClass("show-menu")) {
			$(".navigation-wrapper").removeClass("show-menu");
			$(".navigation").hide();
			$(".navigation li").removeClass("small-padding");
		} else {
			$(".navigation-wrapper").addClass("show-menu");
			$(".navigation").fadeIn();
			$(".navigation li").addClass("small-padding");
		}
	});

	// Play Audio
	$(".navigation__item")
		.each(createAudioEvent)
		.mouseenter(playAudioEvent);
	$("#sandstorm-").attr("id", "sandstorm-0");
});
