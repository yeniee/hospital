//alert("ddd")
let tab_li = document.querySelectorAll(".tab-li a")
let cont = document.querySelectorAll(".cont")
console.log(tab_li)
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
})//end


/*tab menu script */



  let tabList = document.querySelectorAll('.tab_menu .list li');
  
  for(var i = 0; i < tabList.length; i++){
    tabList[i].querySelector('.btn').addEventListener('click', function(e){
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('is_on');
      }
      this.parentNode.classList.add('is_on');
    });
  }



/*
  let tabList = document.querySelectorAll('.is_on');
  
  for(var i = 0; i < tabList.length; i++){
	console.log(i)
    tabList[i].querySelector('.btn').addEventListener('click', function(e){
	alert("눌렀당")
      e.preventDefault();
      for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('is_on');
      }
      this.parentNode.classList.add('is_on');
    });
  }
*/
