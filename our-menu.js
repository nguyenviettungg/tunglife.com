$(function() {
	new WOW().init();
	$(window).scroll(function(event) {
 		var vitrimenuduoi = $('.phanchuto .text').offset().top;
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
 	$('.menumonan ul li').click(function(event) {
 		console.log('hello');
 		$('._1item').removeClass('active');
 		$(this).addClass('active');
 		var danhmuc = $(this).data('abc');
 		var ten = $(this).text();
 		$('.phanchuto .text').text(ten);
 		$('.khoianh_menu_bigsize section').each(function() {
 			if($(this).hasClass(danhmuc))
 			{
 				$(this).show(500);
 			}
 			else 
 			{
 				$(this).hide(500);
 			}
 		});
 		return false;
 	});

 	// $('.pasta_rice').hide();
 	// $('.drink').hide();
 	// $('.salad').hide();
 	// $('.combo').hide();


 	// $('.menumonan ul li.pa').click(function(event) {
 	// 	$('.pizza').hide();
 	// 	$('.drink').hide();
 	// 	$('.salad').hide();
 	// 	$('.combo').hide();
 	// 	$('.hiennd').removeClass('hiennd');
 	// 	$('.pasta_rice').addClass('hiennd').show();
 		

 	// });
 	// $('.menumonan ul li.pi').click(function(event) {
 	// 	$('.pasta_rice').hide();
 	// 	$('.drink').hide();
 	// 	$('.salad').hide();
 	// 	$('.combo').hide();
 	// 	$('.hiennd').removeClass('hiennd');
 	// 	$('.pizza').addClass('hiennd').show();
 		
 	// });
 	// $('.menumonan ul li.dr').click(function(event) {
 	// 	$('.pizza').hide();
 	// 	$('.pasta_rice').hide();
 	// 	$('.salad').hide();
 	// 	$('.combo').hide();
 	// 	$('.hiennd').removeClass('hiennd');
 	// 	$('.drink').addClass('hiennd').show();
 		
 	// });
 	// $('.menumonan ul li.sa').click(function(event) {
 	// 	$('.pizza').hide();
 	// 	$('.pasta_rice').hide();
 	// 	$('.drink').hide();
 	// 	$('.combo').hide();
 	// 	$('.hiennd').removeClass('hiennd');
 	// 	$('.salad').addClass('hiennd').show();
 		
 	// });
 	// $('.menumonan ul li.co').click(function(event) {
 	// 	$('.pizza').hide();
 	// 	$('.pasta_rice').hide();
 	// 	$('.drink').hide();
 	// 	$('.salad').hide();
 	// 	$('.hiennd').removeClass('hiennd');
 	// 	$('.combo').addClass('hiennd').show();
 		
 	// });
 	// $('.muitenlen').click(function(event) {
 	// 	$("html,body").animate({scrollTop:0},2000);
 	// 	return false;
 	// });

});