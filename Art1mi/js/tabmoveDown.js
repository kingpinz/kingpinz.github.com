// JavaScript Document


define(function(require){
	
	function tabmoveDown(arg){
		var aHeader=$('#'+arg+' .list li');
		var aContent=$('#'+arg+' .sublist-wrapper ul')
		var aContentUl=$('#'+arg+' .sublist-wrapper ul:first');
		var aSublistwrapper=$('#'+arg+' .sublist-wrapper');
				
		aHeader.hover(function(){
			
			aSublistwrapper.stop().animate({bottom:'-200px',display:'blcok'});
//			aContent.eq($(this).index()).stop().animate({opacity:1},{duration:300});
//			aSublistwrapper.css('zIndex','3');
		},function(){
			
			aSublistwrapper.stop().animate({bottom:'0',display:'none'})
//			aContent.animate({opacity:0});
//			aSublistwrapper.css('zIndex','0');
		})
	}
	
/*
	var aMenu=$('.menu li');
	//卡体外框
	var aContent=$('#submenu-wrapper');
	//第一个卡体
	var aContentUl=$('#submenu-wrapper ul:first');
	//卡体
	var aContentAllUl=$('#submenu-wrapper ul');
	//划入划出JQ效果
	aMenu.hover(function(){//划出入，餐单内容出现、消失
		aContent.stop().animate({marginTop:0});	
	},function(){
		aContent.stop().animate({marginTop:'-130px'});		
	});	
	//划出入，餐单内容上下滑动
	aMenu.hover(function(){
		//划入时直接跳到指定选项卡的位置
		aContentUl.stop().animate({marginTop:-$(this).index()*129});
	},function(){
		//划出时把整个内容全部消失
		aContent.stop().animate({marginTop:'-130px'});	
	});
	
	//给餐单内容做滑入划出
	aContentAllUl.hover(function(){
		aContent.stop().animate({marginTop:0});	
		aMenu.eq($(this).index()).addClass('selected');
	},function(){
		aContent.stop().animate({marginTop:'-130px'});
		aMenu.eq($(this).index()).removeClass('selected');
	});
	
	//给每个餐单ul下面的li添加over/out
	aContentAllUl.find('li').hover(function(){
		aContentAllUl.find('li').stop().animate({opacity:0.5});
		$(this).stop().animate({opacity:1});	
	},function(){
		aContentAllUl.find('li').stop().animate({opacity:1});
	});
*/
return {
	tabmoveDown:tabmoveDown
}
})
















