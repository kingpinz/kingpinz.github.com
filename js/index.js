var timer=null;
snow();

//头部 nav移动效果
(function(){
		var oUl=document.getElementById('nav-left-list');
		var aLi=oUl.children;
		var oBar=aLi[aLi.length-1];
		for(var i=0;i<aLi.length-1;i++){
			aLi[i].onmouseover=function(){
				move(oBar,this.offsetLeft);
			};
			aLi[i].onmouseout=function(){
				move(oBar,0);
			};
		}
		var left=0;
		var timer=null;
		var speed=0;

		function move(obj,iTarget){
			clearInterval(timer);
			timer=setInterval(function(){

				speed+=(iTarget-obj.offsetLeft)/5;//加速度
				speed*=0.7  //衰减
				left+=speed;

				obj.style.left=Math.round(left)+'px';

				if(speed<1 && iTarget==obj.offsetLeft){//停止条件
					clearInterval(timer);
				}
			},30);
		}	
})();



//banner轮播图的效果	
/*var banner=function(){
	var now=0;
	var timer=null;
	$('#banner-left-nav li').on('mouseover',function(){
		now=$(this).index();
		$('#hover-bg').stop().animate({top:now*70},300)
		$('#banner-left-content li').stop().animate({opacity:0},1000);
		$('#banner-left-content li').eq(now).stop().animate({opacity:1},1000)
	})
	timer=setInterval(function(){
		now++;
		if(now==$('#banner-left-content li').length){
			now=0;
		}	
		$('#hover-bg').stop().animate({top:now*70},300)
		$('#banner-left-content li').stop().animate({opacity:0},1000);
		$('#banner-left-content li').eq(now).stop().animate({opacity:1},1000)
	},4000);
}	*/
/*var banner=function(){
	(function(){
		var oDiv=document.getElementById('banner');
		var aBox=oDiv.children;
		var col=7;
		var row=4;
		var now=0;
		var w=oDiv.offsetWidth;
		var h=oDiv.offsetHeight;
		console.log(h,w);
		//开关
		var ready=true;
		//分块	确定每一块的w/h/backgroundPostion
		for(var r=0;r<row;r++){
			for(var c=0;c<col;c++){
				var oBox=document.createElement('div');
				oBox.style.width=w/col+'px';
				
				oBox.style.height=h/row+'px';
				oDiv.appendChild(oBox);
				oBox.style.backgroundPosition=-oBox.offsetWidth*c+'px '+ -oBox.offsetHeight*r +'px';
				console.log(oBox.offsetWidth*c)
			}
		}
		//给一堆小盒子(oBox)做分步运动
		setInterval(function(){
				if(!ready) return;
				ready=false;
				var i=0;
				var timer=setInterval(function(){
					(function(index){
						move(aBox[i],{opacity:0},{duration:800,complete:function(){
							if(index==aBox.length-1){
								now++;
								now%=6;	
								//重置
								for(var i=0;i<aBox.length;i++){
									aBox[i].style.backgroundImage='url(img/team'+now+'.png)';
									aBox[i].style.opacity=1;	
								}
								oDiv.style.backgroundImage='url(img/team'+(now+1)%6+'.png)';
								ready=true;
							}
						}});
					})(i);
					
					i++;
					if(i==aBox.length){
						clearInterval(timer);	
					}
				},100);
				
		},5000)
		
	})()	
}*/


//头部 时钟的效果
$.fn.clock=function(){
	var aSpan=document.querySelectorAll('#clock span');

	clock();

	setInterval(clock,30);

	function clock(){
		var oDate=new Date();
		
		var oH=oDate.getHours();
		var oM=oDate.getMinutes();
		var oS=oDate.getSeconds();	
		var oMs=oDate.getMilliseconds();
		
		
		//小时
		aSpan[0].style.transform='rotate('+(oH%12*30+oM/60*30)+'deg)';
		
		//分钟
		aSpan[1].style.transform='rotate('+(oM*6+oS/60*6)+'deg)';
		
		//秒针
		aSpan[2].style.transform='rotate('+(oS*6+oMs/1000*6)+'deg)';	
	}
}



//音乐
$.fn.music=function(){
	var oA=new Audio();
	
	oA.src='mp3/铃儿响叮当(英文版)_黑鸭子.mp3';
	
	oA.play();
};


//钢琴

$.fn.piano=function(){
		var oUl=document.querySelector('.piano');
		var aLi=oUl.children;
		
		for(var i=0; i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				var oA=new Audio();
				
				oA.src=oggSound['sound'+(49+this.index)];
				
				oA.play();	
				
				move(this,{opacity:1},{duraton:500})
			};
			aLi[i].onmouseout=function(){
				move(this,{opacity:0},{duraton:200})
			}
		}
}

//自适应屏幕
$(function(){
	$(window).resize(snow);
	$(window).music();
	$(window).clock();
	$(window).piano();
})













