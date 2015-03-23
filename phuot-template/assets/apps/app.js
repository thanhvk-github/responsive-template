$(document).ready(function() {
	// Call carousel function
	carousel();

	// Call back to top function
	backTop();

	// Hilight header image click

	$(".carousel").click(function() {
		$(".search").addClass("highlight");
	});

	// Toggle menu
	$(".btn-nav").click(function() {
		$("nav ul").slideToggle('fast');
	});
	$(window).resize(function(){
  		if($(window).innerWidth() > 768) {
      		$("nav ul").removeAttr("style");
  		}
	});
});

// Carousel function
var carousel = function() {
	var infiniteSlider = setInterval(function(){next()}, 5000);
	// Next function
	var next = function() {
		var currentSlider = $(".item-slider-active");
		var currentDot = $(".item-dot-active");

		var nextSlider = currentSlider.next();
		var nextDot = currentDot.next();

		if(nextSlider.length === 0) {
			nextSlider = $(".item-slider").first();
			nextDot = $(".item-dot").first();
		}

		$(currentSlider).fadeOut("slow").removeClass("item-slider-active");
		$(nextSlider).fadeIn("slow").addClass("item-slider-active");

		$(currentDot).removeClass("item-dot-active");
		$(nextDot).addClass("item-dot-active");
	};
	// Event next-narrow click
	$(".next-narrow").click(function() {
		clearInterval(infiniteSlider);
		next();
	});
	// Preview function
	var prev = function() {
		var currentSlider = $(".item-slider-active");
		var currentDot = $(".item-dot-active");

		var prevSlider = currentSlider.prev();
		var prevDot = currentDot.prev();

		if(prevSlider.length === 0) {
			prevSlider = $(".item-slider").last();
			prevDot = $(".item-dot").last();
		}

		$(currentSlider).removeClass("item-slider-active");
		$(prevSlider).addClass("item-slider-active");

		$(currentDot).removeClass("item-dot-active");
		$(prevDot).addClass("item-dot-active");
	};
	// Event prev-narrow click
	$(".prev-narrow").click(function() {
		clearInterval(infiniteSlider);
		prev();
	});
};

// Show/hide button "back to top"
var backTop = function () {
	$(window).scroll(function() {
    	if($(this).scrollTop() > 200) {
      	$('.btn-top').fadeIn('slow');
    } else {
      	$('.btn-top').fadeOut('slow');
    }
		});
  	$('.btn').click(function() {
    	$('html, body').animate({scollTop : 0}, 800);
	});
}

