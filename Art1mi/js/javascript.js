// JavaScript Document
window.onload=function(){
//导航栏显示下拉滚动条	
var aHeader=$('#header_middle .list li');
var aContent=$('#header_middle .sublist-wrapper ul')
var aContentUl=$('#header_middle .sublist-wrapper ul:first');
var aSublistwrapper=$('#header_middle .sublist-wrapper');
		
aHeader.hover(function(){
	aSublistwrapper.stop().animate({opacity:1},{duration:1000});
	aContent.eq[$(this).index()].stop().animate({opacity:1},{duration:1000});
	aSublistwrapper[0].css('zIndex','43333');
	aContent.eq[$(this).index()].attr('zIndex','4');
	aContentUl.stop().animate({marginTop:-$(this).index()*220});
},function(){
	aSublistwrapper.stop().animate({opacity:0},{duration:1000})
	aContent.animate({opacity:0});
	aSublistwrapper.css('zIndex','0');
	aContent.removeAttr('zIndex')
})



//左侧导航条 移入显示


var oHeaderSubNav=document.getElementById('headerSubNav');
//获取头部 因为我知道第一个子集就是头部所以就children【0】，去获取里面的li。
//如果不是那你自己要看清楚到底获取的是哪一个子集下面的什么标签。卡身也是一样
var aHead=oHeaderSubNav.children[0].getElementsByTagName('li');
//这里切的li所以用class
var aContent=oHeaderSubNav.children[1].children;
//这里切的是ul所以用children
var timer=null;
for(var i=0;i<aHead.length;i++){
	(function(index){
		aContent[i].onmouseover=aHead[i].onmouseover=function(){
			clearTimeout(timer);
			for(var i=0;i<aHead.length;i++){
				aHead[i].className='';
				aContent[i].className='subdiv clearfix';
			}
			this.className='on';
			aContent[index].className='subdiv clearfix show';
		};	
		aHead[i].onmouseout=function(){
			timer=setTimeout(function(){
				for(var i=0;i<aHead.length;i++){
					aHead[i].className='';
					aContent[i].className='subdiv clearfix';
				}
			},1000)
			
		};	
		aContent[i].onmouseout=function(){
				for(var i=0;i<aHead.length;i++){
					aHead[i].className='';
					aContent[i].className='subdiv clearfix';
				}					
		};	
	})(i);
}
	




//封装函数
//获取行间样式的函数
	function getStyle(obj,attr){
			return (obj.currentStyle||getComputedStyle(obj,false))[attr]	
		}
//获取类的兼容函数
	function getByClass(oParent,sClass){
			if(oParent.getElementsByClassName){
				return 	oParent.getElementsByClassName(sClass);
			}
			var aEle=oParent.getElementsByTagName('*');
			var result=[];
			for(var i=0;i<aEle.length;i++){
				var tmpArr=aEle[i].className.split(' ');	
				for(var j=0;j<tmpArr.length;j++){
					if(tmpArr[j]==sClass){
						result.push(aEle[i]);
						break;
					}
				}
			}
			return result;
		}
	
	
}