
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
		
		
	})()
	
	//banner轮播图的效果	
	var banner=function(){
						var now=0;
						var timer=null;
						$('#banner-left-nav li').on('mouseover',function(){
							now=$(this).index();
							$('#hover-bg').stop().animate({top:now*70},300)
							$('#banner-left-content li').stop().animate({opacity:0},400);
							$('#banner-left-content li').eq(now).stop().animate({opacity:1},400)
						})
						
						
						timer=setInterval(function(){
							now++;
							if(now==$('#banner-left-content li').length){
								now=0;
							}	
							$('#hover-bg').stop().animate({top:now*70},300)
							$('#banner-left-content li').stop().animate({opacity:0},400);
							$('#banner-left-content li').eq(now).stop().animate({opacity:1},400)
						},2000);
					}	
		banner();
	
	
	
	//头部 时钟的效果
	/*$('#clock').html(time());
	setInterval(function(){
		$('#clock').html(time());
	},1000)

	//获取时间的函数
	function toDou(n){
		return n<10?'0'+n:''+n;
	}
	function time(){
		var oDate=new Date();
		var y=oDate.getFullYear();
		var m=oDate.getMonth()+1;
		var d=oDate.getDate();
		var w=oDate.getDay();
		var h=oDate.getHours();
		var f=oDate.getMinutes();
		var s=oDate.getSeconds();
		
		var str1=toDou(parseInt(y))+'-'+toDou(parseInt(m))+'-'+toDou(parseInt(d));
		var str2=toDou(parseInt(h))+'-'+toDou(parseInt(f))+'-'+toDou(parseInt(s));
		return str1+'<br/>'+str2;
	
	}*/






(function(){
	var aSpan=document.querySelectorAll('#clock span');
	
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
	
	
	clock();
	setInterval(clock,30);
})()



	//音乐
	$.fn.music=function(){
		var oA=new Audio();
		
		oA.src='mp3/铃儿响叮当(英文版)_黑鸭子.mp3';
		
		oA.play();
	};



$(function(){
	
	
	$(window).music();
})













