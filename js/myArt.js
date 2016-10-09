var timer=null;

//下雪
snow();

//作品划入效果
(function(){
	var timer=null;
	
	$('#bottombar-art li').on('mouseover',function(){
		
		$(this).children('.work').stop().animate({top:0},400);
		
	});	
	$('#bottombar-art li').on('mouseout',function(){
		
		$(this).children('.work').stop().animate({top:400},400);
		
	});	
	
	$('#asidebar').on('mouseover',function(){
		clearTimeout(timer);
		$(this).stop().animate({right:60},300)
		
	})
	
	$('#asidebar').on('mouseout',function(){
		timer=setTimeout(function(){		
			$('#asidebar').stop().animate({right:-70},300);
		},2000)
		
	})
	
	$('#asidebar li').on('mouseover',function(){
		
			//$(this).children().animate({background:'green'},{duration:300});
		
		$(this).children().css({background:'green'})
		
	})
	$('#asidebar li').on('mouseout',function(){
		
			//$(this).children().animate({background:'green'},{duration:300});
		
		$(this).children().css({background:'red'})
		
	})
	
	
	
})()


//音乐
$.fn.music=function(){
	var oA=new Audio();
	
	oA.src='mp3/铃儿响叮当(英文版)_黑鸭子.mp3';
	
	oA.play();
};

$(function(){
	//音乐
	$(window).music();
})






















