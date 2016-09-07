//版权 北京智能社©, 保留所有权利
define(function(require){
	var getByClass=require('js/common').getByClass;
	var move=require('js/move').move;
	var setTop=require('js/setTop').setTop;
	
	function drag(args){
		if(typeof args=='string'){
			var oWrap=document.getElementById(args);	
		}else if(typeof args=='object'){
			var oWrap=args;	
		}
		//这个就是获取滚动条的四个按钮
		var oBar=getByClass(oWrap,'rollBar')[0];
		var oUp=getByClass(oWrap,'rollBarUp')[0];	
		var oDown=getByClass(oWrap,'rollBarDown')[0];	
		var oBarParent=getByClass(oWrap,'rollBox')[0];	
		//因为我知道第二个是全部内容所以就获取了！
		var oContent=oWrap.children[1];
		oBar.onmousedown=function(ev){
			var e=ev||event;
			//因为只有上下所以只做y轴
			var disY=e.clientY-oBar.offsetTop;
			document.onmousemove=function(ev){
				var e=ev||event;
				var t=e.clientY-disY;//计算
				//获取高度
				setTop(oWrap,t);
			};	
			document.onmouseup=function(){
				document.onmousemove=document.onmouseup=null;	
			};
			return false;
		};
		//鼠标按下开定时器
		oUp.onmousedown=function(){
			clearInterval(this.timer);
			this.timer=setInterval(function(){
				var t=oBar.offsetTop;//计算
				t-=10;
				//设置滚动条的高度
				setTop(oWrap,t);	
			},30);
		};
		oDown.onmousedown=function(){
			clearInterval(this.timer);
			this.timer=setInterval(function(){
				var t=oBar.offsetTop;//计算
				t+=10;
				setTop(oWrap,t);
			},30);
		};
		//鼠标抬起时清定时器
		oUp.onmouseup=oDown.onmouseup=function(){
			clearInterval(this.timer);	
		};
		
	};	
	
	function addMouseWheel(args){
		//判断参数是id还是对象
		if(typeof args=='string'){
			var oWrap=document.getElementById(args);	
		}else if(typeof args=='object'){
			var oWrap=args;	
		}
		var oBar=getByClass(oWrap,'rollBar')[0];
		
		//判断浏览器，做兼容
		if(navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
			oWrap.addEventListener('DOMMouseScroll',fnWheel,false);	
		}else{
			oWrap.onmousewheel=fnWheel;
		}
		
		function fnWheel(ev){
			var e=ev||event;
			//修正方向
			var down=false;
			if(e.wheelDelta){//other
				down=e.wheelDelta<0?true:false;
			}else{//FF
				down=e.detail>0?true:false;
			}
			
			//上滚下滚动	
			var t = oBar.offsetTop;//计算
			if(down){
				t+=10;	
			}else{
				t-=10;
			}
			setTop(oWrap,t);//使用t
			e.preventDefault && e.preventDefault();
			//高版本的清楚默认事件
			return false;
		}
		
	};
	
	function initScroll(sClass){
		var aWrap=getByClass(document,sClass);
		for(var i=0;i<aWrap.length;i++){
			drag(aWrap[i]);//给每个滚动外围容器拖拽
			addMouseWheel(aWrap[i]);//给每个滚动外围添加滚轮	
		}
	};
	return {
		drag:drag,
		initScroll:initScroll,
		addMouseWheel:addMouseWheel
	}
	
});