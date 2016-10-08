// JavaScript Document

define(function(require){
	var $ = require('js/jquery-1.7.2');
	
	function indexdown(arg){
		//卡头
		var aMenu=$('#'+arg+' .list li');
		//卡体外框
		var aContent=$('#'+arg+' .sublist-wrapper');
		//第一个卡体
		var aContentUl=$('#'+arg+' .sublist-wrapper ul:first');
		//卡体
		var aContentAllUl=$('#'+arg+' .sublistul');
		//划入划出JQ效果
		aMenu.hover(function(){//划出入，餐单内容出现、消失
			aContent.stop().animate({marginTop:0});	
		},function(){
			aContent.stop().animate({marginTop:'-210px'});		
		});	
		//划出入，餐单内容上下滑动
		aMenu.hover(function(){
			//划入时直接跳到指定选项卡的位置
			aContentUl.stop().animate({marginTop:-$(this).index()*129});
		},function(){
			//划出时把整个内容全部消失
			aContent.stop().animate({marginTop:'-210px'});	
		});
		
		//给餐单内容做滑入划出
		aContentAllUl.hover(function(){
			aContent.stop().animate({marginTop:0});	
			aMenu.eq($(this).index()).addClass('selected');
		},function(){
			aContent.stop().animate({marginTop:'-210px'});
			aMenu.eq($(this).index()).removeClass('selected');
		});
		
		//给每个餐单ul下面的li添加over/out
		aContentAllUl.find('li').hover(function(){
			aContentAllUl.find('li').stop().animate({opacity:0.5});
			$(this).stop().animate({opacity:1});	
		},function(){
			aContentAllUl.find('li').stop().animate({opacity:1});
		});
	}
})