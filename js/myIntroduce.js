var timer=null;
//下雪
snow();
$(window).resize(snow);

//炮 的旋转插件
$.fn.rotate=function(ev){
	var x1=ev.clientX;
	
	//到content事件的左上角的距离
	var y1=ev.clientY;
	//到content事件的左上角的距离
	var x2=this.parent().width();
	
	var y2=this.parent().height();
	//父级的宽度
	var x=x2/2-(x1-this.parent().offset().left);
	//父级到边的距离
	var y=y2-(y1-this.parent().offset().top);
	//console.log(this.parent());
	//父级到边的距离
	//alert(x1);
	//alert(y1);
	//alert(this.parent().offset().left);
	//alert(this.parent().offset().top);
	
	var d=a2d(Math.atan2(y,x))-90;
	//alert(d);
	this[0].style.transform='rotate('+d+'deg)'
	
	//弧转角
	function a2d(n){
		return n/Math.PI*180;
	}
};

//游戏
(function(){
	var oUl=document.getElementById('ul');
	var aLi=oUl.children;
	var index=0;
	var arg=null;
	var n=16;
	var timer=null;
	var arr=[];
	var num=0;
	
	//创建一个数组
	for(var i=0;i<8;i++){
		for(var j=0;j<2;j++){
			arr.push(i+1);
		}
	}
	
	//打乱数组
	function changearr(arr){
		arr.sort(function(n,m){
			return Math.random()-0.5;
			})
		return arr;
	};
	
	var arr1=changearr(arr);
	console.log(arr1);
	//拼图组建
	//数组打乱回去查一下
	//添加oLi插图
	for(var i=0;i<n;i++){
		var oLi=document.createElement('li');
		//再研究一下
		oLi.innerHTML='<img alt="tupian" class="p'+arr1[i]+'" src="img/1 ('+arr1[i]+').jpg" >';
		oLi.style.transition='1s all ease';
		oUl.appendChild(oLi);
	}
	//拼图开始
	for(var i=0;i<aLi.length;i++){
		//封闭空间
		(function(a){			
			aLi[i].onclick=function(){
				//alert('点击');
				if(this.children[0].alt=='tupian'){
					//alert(123);
					this.children[0].style.display='block';
					//设置定时器让第二张图片显示再判断
					var _this=this;
					//传值定时器
					clearTimeout(timer);
					timer=setTimeout(function(){
						//获取位置
						if(!index){
							index=a+1;
						}
						//获取指定属性
						//alert('你点击的是第'+(a+1)+'张图片');
						//alert('获取的index是'+index);
						if(!arg){
							//alert(this);
							arg=_this.children[0].className;
							//alert('获取class'+arg)
						}
						if(!(index==(a+1))){
							//alert('进入判定是否翻牌');
							if(arg==_this.children[0].className){
								//alert('属性相同可以翻牌')
								//alert(arg);
								//alert('真棒');
								aLi[index-1].children[0].style.display='block';
								aLi[index-1].children[0].alt=index-1;
								_this.children[0].style.display='block';
								_this.children[0].alt=a;
								num++;
								if(num==8){
									alert('通关成功')
									return;
								}
							}else{
								//alert('属性不相同不可以翻牌');
								aLi[index-1].children[0].style.display='none';
								_this.children[0].style.display='none';
							}
							arg=null;
							index=0;
						}else{
							//alert('点击的是同一个图片');
							return ;
						}	
						//测试得出100；			
					},100)
				};						
			}
		})(i)
	}
})()
	
//打字效果
$.fn.word=function(){
	
		var $this=$(this);
		var str=$this.text();
		//循环生成每个字的单独的span标签
		
		for(var i=0; i<str.length;i++){
			var oSpan=document.createElement('span');
			oSpan.innerHTML=str[i];
			$this.append(oSpan);
		}
		console.log($this[0].children.length);
		//获取所有的span标签
		var aSpan=$this[0].children;
		console.log(aSpan);
		var i=0;
		var timer=setInterval(function(){
			aSpan[i].className='on';
			i++;
			
			if(i==str.length){
				clearInterval(timer);
			}	
		},200);
}

//音乐
$.fn.music=function(){
	var oA=new Audio();
	
	oA.src='mp3/铃儿响叮当(英文版)_黑鸭子.mp3';
	
	oA.play();
};

$(function(){
	//炮弹事件	
	$('#content').find('.part').on('click',function(ev){
		//console.log($(this));
			var $this=$(this).index();
			var x=ev.clientX-$(this).parent().offset().left;
			
			var y=ev.clientY-$(this).parent().offset().top;
			//alert(ev.clientX)
			//alert(ev.clientY)
			//alert(x);
			//alert(y);
			$('#cannon').rotate(ev);
			$('#snowball').stop().animate(
			//$(this).offset().left点击li的坐标位置,$(this).offset().top
				{left:x,bottom:$('#content').height()-y-40},
				{
					duration:1000,
					complete:function(){
						$('#snowball').css({left:'50.5%',bottom:0})
						$('#manContentUl').css({'display':'block'});
						$('#manContentUl .manContent').css({'display':'none'});
						$('#manContentUl .manContent').eq($this).css({'display':'block'});
				}
			 })
	})
	
	//进入个人信息后的返回主菜单
	$('#back').on('click',function(){
		$('#manContentUl').css({'display':'none'});
	});
	
	//游戏头部设置
	$('#gametitle').on('click',function(){
		$(this).css({'display':'none'})
	});
	
	//$('#manContentUl .part2 li').word();
	$(window).music();
})



	











