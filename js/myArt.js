// JavaScript Document
snow();
$(function(){
	
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
	
	})()
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})






















