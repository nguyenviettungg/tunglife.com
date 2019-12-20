 $(function(){
 	new WOW().init();

 	
 // 	hieuungload = new TimelineMax({onComplete:hiennd});
 // 	hieuungload
 // 	.from($('.loading'),1,{opacity:0})
 // 	.from($('.khoiload'),1,{scale:2,opacity:0})
 // 	.to($('.khoiload'),1,{scale:0.5,ease:Power4.easeOut})
 // 	.to($('.khoiload'),1,{scale:1,ease:Elastic.easeOut.config(1,0.3)})
	// .to($('.khoiload'),1,{scale:0.5,ease:Power4.easeOut})
 // 	.to($('.khoiload'),1,{scale:1,ease:Elastic.easeOut.config(1,0.3)})
	// // .to($('.khoiload'),1,{scale:0.5,ease:Power4.easeOut})
 // // 	.to($('.khoiload'),1,{scale:1,ease:Elastic.easeOut.config(1,0.3)})
 // 	//ketthuc
 // 	.to($('.khoiload'),1,{scale:3,opacity:0,ease:Power4.easeOut})
 // 	.to($('.loading'),1,{y:-2000,ease:Power4.easeOut})


 	console.log($('.phanmenuduoi').offset().top);
 	// var thoigian = setInterval(function(){
 	// 	$('.header').addClass('_2');

 	// },5000)
 	// $(window).scroll(function(event) {
 	// 	var vitri = $('html,body').scrollTop();
 	// 	if (vitri >= 100) {
 	// 		$('.navbar').addClass('navbar-fixed-top maunenden fadeInDown animated');
 	// 		$('.navbar').removeClass('navbar-light bg-faded');
 	// 		$('.nav-link').removeClass('wow fadeInDown animated')

 	// 	}
 	// 	else {
 	// 		$('.navbar').removeClass('navbar-fixed-top maunenden fadeInDown animated');
 	// 		// $('.nav-link').removeClass('wow fadeInUp animated')
 	// 	}
 	// });
 	$(window).scroll(function(event) {
 		var vitrimenuduoi = $('.phanmenuduoi').offset().top;
 		var vitrimuitenlen = $('.nutshowmenu').offset().top;
 		var vitri = $('html,body').scrollTop();
 		if (vitri >= vitrimenuduoi )
 		{
	 		$('.phanmenuduoi .navbar').addClass('navbar-fixed-top maunenden fadeInDown animated');
 	 		$('.phanmenuduoi ul').addClass('divaotrong');	
 		}
 		else {
 			$('.phanmenuduoi .navbar').removeClass('navbar-fixed-top maunenden fadeInDown animated');
 			$('.phanmenuduoi ul').removeClass('divaotrong');
 		}
 		if (vitri >= vitrimuitenlen) {
 			$('.muitenlen').addClass('hienthi wow slideInRight animated');
 		}
 		else {
 			$('.muitenlen').removeClass('hienthi wow slideInRight animated');
 		}
 	});
 	$('.muitenlen').click(function(event) {
 		$("html,body").animate({scrollTop:0},2000);
 		return false;
 	});
 	
})  
 