var timer=null;

//下雪
snow();
$(window).resize(snow);

//移入移出效果
$.fn.movetoggle=function(id){
	
	var oDiv=this;
	var oT=id;
	var timer=null;
	oDiv.on('mouseover',show);
	oDiv.on('mouseout',hide);
	oT.on('mouseover',show);
	oT.on('mouseout',hide);
	
	function show(){
		clearTimeout(timer);
		oT.css({'display':'block'}).stop().animate({'opacity':1},1000);
	}
	function hide(){
		timer=setTimeout(function(){
			oT.css({'display':'none'});
		},1000);
		
	}
};

//读取字数
$.fn.readWord=function(){
	$('#oTmp-content').on('focusin',onFocus)
	$('#oTmp-content').on('focusout',onBlur)
	$('#oTmp-content').on('keydown',onKeydown)
	var timer=null;
	//获取焦点
	function onFocus(){
			timer=setInterval(function(){
				$('#kb').html(500-$('#oTmp-content').val().length);	
			},100);	
		}
	};
	//失去焦点
	function onBlur(timer){
		clearInterval(timer);
	}
	//键盘按下事件	
	function onKeydown(ev){
		var e=ev||event;
		if($('#oTmp-content').val().length>=500){
			if(e.keyCode != 8){
				return false;	
			}
		}	
	}
			
//加载留言条
$.fn.sendMessage=function(){
	
	$('#send').on('click',sendMessage);
	function sendMessage(){
		if(!$('#oTmp-content').val()){
			//alert('内容不能为空');
			return;
		}
		
		var oTmp=$('#oTmp')[0];
		var d=time();
		var rnd=parseInt(Math.random()*(6-1)+1);
		var json={content:$('#oTmp-content').val(),time:d,num:rnd};
		console.log(json);
		var oLi=tmplate(oTmp,json);
		$('#contentUl').prepend(oLi);
		$('#oTmp-content').val('');
		console.log($('#kb').html());
	}
	//时间
	function time(){
		var oDate=new Date();
		var y=oDate.getFullYear();
		var m=oDate.getMonth()+1;
		var d=oDate.getDate();				
		var str=y+'年'+m+'月'+d+'日';
		return str;
	}
	
	//模版
	function tmplate(oTmp,json){
		console.log(oTmp.innerHTML)
		var obj=oTmp.cloneNode(true);
		
		obj.innerHTML=obj.innerHTML.replace(/\{\{\w+\}\}/g,function(s){
			s=s.substring(2,s.length-2);
			//s是前面的函数的值扔进函数内做形参
			return json[s];
		})
		
		obj.removeAttribute('id');
		
		return obj;
	}
	
};
		
		
//设定插件
//移动到某个位置自动显示
$.fn.lazyLoad=function(){
	var aLi=this;
	lazyLoad();
	function lazyLoad(){

		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		var scrollBottom=document.documentElement.clientHeight+scrollTop;

		aLi.each(function(index){
			//liT
			var liT=$(this).offset().top;

			if(scrollBottom>=liT){
				
				$(this).stop().animate({'opacity':1},1000);
			}
		});
	}
	$(window).on('scroll',lazyLoad);
};
//移入到某个位置显示移出就隐藏
$.fn.fastLoad=function(){
	var aLi=this;
	lazyLoad();
	function lazyLoad(){

		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		var scrollBottom=document.documentElement.clientHeight+scrollTop;
		var screenHeight=document.documentElement.clientHeight;
		
		aLi.each(function(index){
			//liT
			var liT=150;
			
			if(scrollTop>=liT){
				
				$(this).animate({'opacity':1},300);
			}else{
				$(this).stop().animate({'opacity':0},300);
			}
		});
	}
	$(window).on('scroll',lazyLoad);
};
		
//音乐
$.fn.music=function(){
	var oA=new Audio();
	
	oA.src='mp3/铃儿响叮当(英文版)_黑鸭子.mp3';
	
	oA.play();
};


$.fn.train=function(){
	$this=$(this);
	var n=$(window).width();
	var m=$(this).width();
	$this.stop().animate({left:n-m+30},{duration:4000,complete:function(){
		$this.stop().animate({left:(n-m+30)/2},{duration:2000});		
	}})	
};

$.fn.screen=function(){
		var client = {
		  versions: function() {
			var u = navigator.userAgent;
			return {
			  ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
			  android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
			}
		  }()
		}
		
		//get value 
		
		if (client.versions.ios) {
		  console.log("ios");
		  $('#contentUl li').each(function(index, element) {
            	$(this).removeClass('info');
				alert(2)
        	});
		} else if (client.versions.android) {
		  console.log("andriod");
		  $('#contentUl li').each(function(index, element) {
            	$(this).removeClass('info');
				alert(1);
        	});
		} else {
		  console.log("不是移动设备");
		}
}


//执行框架			
$(function(){
	$(window).screen();
	$('#contentUl li').lazyLoad();
	$('.loadedContent').lazyLoad();
	$('#returnTop').fastLoad();
	$('#send').sendMessage();
	$('#oTmp-content').readWord();
	$('#returnTop').on('click',function(){
		var timer=null;
		move(0,1000);
		function move(iTarget,time){
				var start=document.documentElement.scrollTop||document.body.scrollTop;
				
				var dis=iTarget-start;
				var count=Math.round(time/30);
				var n=0;
				clearInterval(timer);
				timer=setInterval(function(){
					n++;
					
					var a=1-n/count;
					var cur=start+dis*(1-a*a*a);
					
					document.documentElement.scrollTop=cur;
					document.body.scrollTop=cur;
					
					
					if(n==count){
						clearInterval(timer);
					}
				},30);	
			}
	})
	//$(window).music();
	$('#weixin').movetoggle($('#erweima'));
	//$('#train').train();
});

	






















