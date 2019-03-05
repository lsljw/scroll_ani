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
	
});