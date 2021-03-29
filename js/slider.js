$(function(){
	$('.slider').slick({
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		fade: true,
		cssEase: 'linear'
	});

$('.dropdown-toggle').on('click', function () {
	if ($('.dropdown-menu').css("display") == "flex") {
		$('.dropdown-menu').css("display","none");
	} else {
		$('.dropdown-menu').css("display","flex");
	}
	});

});

