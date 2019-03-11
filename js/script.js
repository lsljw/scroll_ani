$(function(){
	var windowWidth=$(window).width();
	var sWidth=$(".s-button").width();
	var ws=(windowWidth-sWidth)/2;
	$(".s-button").css({
		left:ws
	});
	
	$(window).resize(function(){
		var windowWidth=$(window).width();
		var sWidth=$(".s-button").width();
		var ws=(windowWidth-sWidth)/2;
		$(".s-button").css({
			left:ws
		});
	});
	
	//스크롤 버튼 애니메이션
	
	
	setInterval(function(){
		$(".s-button").animate({
		bottom:30
		});
		$(".s-button").animate({
			bottom:20
		});
	});
	
	console.log("섹션0 : "+$(".s0").offset().top);
	console.log("섹션1 : "+$(".s1").offset().top);
	
	$(window).scroll(function(){
		var sTop=$(window).scrollTop();
		if($(".s0").offset().top<sTop+700){
			
			$(".s0").css({opacity:1});
			if($(".s0").offset().top<sTop+300){
				$(".s0-title").stop().animate({
					top:"20%"
				});
				$(".s0>.content").delay(500).animate({
					left:"25%"
				});
			}
		}
		if($(".s1").offset().top<sTop+700){
			
			$(".s1").css({opacity:1});
		}
		if($(".s2").offset().top<sTop+700){
			
			$(".s2").css({opacity:1});
		}
		if($(".s3").offset().top<sTop+700){
			
			$(".s3").css({opacity:1});
		}
		if($(".s4").offset().top<sTop+700){
			
			$(".s4").css({opacity:1});
		}
	});

});