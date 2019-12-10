$(function() {
	new WOW().init();
	$(window).scroll(function(event) {
 		// var vitrimenuduoi = $('.phanchuto .text').offset().top;
 		// var vitrimuitenlen = $('.nutshowmenu').offset().top;
 		var vitri = $('html,body').scrollTop();
 		if (vitri >= 500 )
 		{	
 			$('.phanmenuduoi .navbar').addClass('hienthiramanhinh');
	 		$('.phanmenuduoi .navbar').addClass('navbar-fixed-top maunenden fadeInDown animated');
 	 		$('.phanmenuduoi ul').addClass('divaotrong');	
 		}
 		else {
 			$('.phanmenuduoi .navbar').removeClass('hienthiramanhinh');
 			$('.phanmenuduoi .navbar').removeClass('navbar-fixed-top maunenden fadeInDown animated');
 			$('.phanmenuduoi ul').removeClass('divaotrong');
 		}
 		// if (vitri >= vitrimuitenlen) {
 		// 	$('.muitenlen').addClass('hienthi wow slideInRight animated');
 		// }
 		// else {
 		// 	$('.muitenlen').removeClass('hienthi wow slideInRight animated');
 		// }
 	});
 	// $('.maunen').click(function(event) {
 		
 	// });
	$('.phananh a').fancybox();
 	
});