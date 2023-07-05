$(function(){
	/*ham nav script*/

	$(".ham-nav").click(function(){
		$(".mobile-nav").css({marginLeft:0});
	})
	$(".close-btn").click(function(){
		$(".mobile-nav").css({marginLeft:-2000});
	})

	$(".mobile-nav-li>a").click(function(){
		$(".mobile-sub-nav").stop().slideUp();
		$(this).next(".mobile-sub-nav").stop().slideDown();
	})

	$(".gnb-li").mouseover(function(){
		$(".sub-ul").stop().slideDown();
	})

	$(".gnb-li").mouseleave(function(){
		$(".sub-ul").stop().slideUp();
	})



	/*auto slide script*/

	setInterval(function(){
		$(".slide-section-ul").animate({marginLeft:-100+"%"},function(){
			$(".slide-section-ul>li:first").appendTo(".slide-section-ul");
			$(".slide-section-ul").css({marginLeft:0});
		})
	},5000);



	/*special-medical-glt script*/
/*
	$(".special-medical-lt").click(function(){
		$(".special-medical-ul").animate({marginLeft:-100+"%"},function(){
			$(".special-medical-ul>li:first").appendTo(".special-medical-ul");
			$(".special-medical-ul").css({marginLeft:0});
		})
	})

	$(".special-medical-gt").click(function(){
		$(".special-medical-ul>li:last").prependTo(".special-medical-ul");
		$(".special-medical-ul").css({marginLeft:-100+"%"});
		$(".special-medical-ul").animate({marginLeft:0});
	})

*/










 
})//end