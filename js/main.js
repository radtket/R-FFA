$(document).ready(function(){
 
      var window_height = $(window).height(),
        window_width = $(window).width(),
        navigation_height;



      /* ============== SLIDERS ============== */




	$('#header-slide').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      mobileFirst: true,
    });

      $(window).resize(function() {

        window_height = $(window).height();

        navigation_height = $("#navigation").height();

        $('#header-wrap').css('height', (window_height - (navigation_height / 2)) + 'px');
        $('#header-wrap .logo').css('width', $('#header-wrap .container').width() + 'px');

      }).resize();



      /* ============== MENU ============== */


	$('#menulink').click(function(event) {
		event.preventDefault();
		if($('.navigation-wrapper').hasClass('show-menu')) {
			$('.navigation-wrapper').removeClass('show-menu');
			$('.navigation').hide();
			$('.navigation li').removeClass('small-padding');
		} else {
			$('.navigation-wrapper').addClass('show-menu');
			$('.navigation').fadeIn();
			$('.navigation li').addClass('small-padding');
	   }
	});




$("#nav-two a")
  .each(function(i) {
    if (i != 0) {
      $("#beep-two")
        .clone()
        .attr("id", "beep-two" + i)
        .appendTo($(this).parent());
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function() {
    $("#beep-two" + $(this).data("beeper"))[0].play();
  });
$("#beep-two").attr("id", "beep-two0");
  
  
});