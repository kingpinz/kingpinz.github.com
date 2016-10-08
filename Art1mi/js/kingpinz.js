// JavaScript Document
//从数组中第几位找到最小的index
function findMinIndex(arr,start){
	var min=arr[start];	
	var minIndex=start;
	for(var i=start;i<arr.length;i++){
		if(arr[i]<min){
			min=arr[i];
			minIndex=i;
		}
		return minIndex;
	}	
}
//数组排序从最小开始到最大
function order(arr){
	for(var i=0;i<arr.length;i++){
		var n=findMinIndex(arr,i);
		var tmp=arr[n];
		arr[n]=arr[i];
		arr[i]=tmp;
	}
}
//数组排序从大小开始到最小
function order(arr){
	var n=0;
	var tmp=0;
	for(var i=0;i<arr.length;i++){
		n=findMinIndex(arr,i);
		tmp=arr[i];
		arr[i]=arr[n];
		arr[n]=tmp;
	}
}
//获取obj到body的距离的函数
//定义函数 获取距离的函数，表达意思就是循环父级，直到循环到body往上就是空的
//就会报错，那样就不成立，就结束。
function getPos(obj){
	var l=0;
	var t=0;
	while(obj){
	//获取物体的距离相对父级的距离，进行累计叠加
	l+=obj.offsetLeft;	
	//获取上一层的父级，之后进行返回值判断。
	t+=obj.offsetTop;
	obj=obj.offsetParent;	
	}
	//不要忘记返回出一个json值
	return {left:l,top:t};
	
}



//添加绑定事件的兼容性问题

function addEvent(obj,ev,fn){
	if(obj.addEventListener){
		obj.addEvenListener(ev,fn,false)
	}else{
		obj.attachEvent('on'+ev,fn)
	}
}
//解除绑定事件

function removeEvent(obj,ev,fn){
	if(obj.removeEventListener){
		obj.removeEvenListener(ev,fn,false)
	}else{
		obj.detachEvent('on'+ev,fn)
	}
}


//添加滚动轴事件，输入一个盒子，进行改变的操作
	function addEvent(obj,fn){
		//判断是不是火狐
		if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
			//我要单独给火狐绑定事件
			obj.addEventListener('DOMMouseScroll',fnwheel,false)
		}else{
			//其他的我要给他直接增加滚动事件
			obj.onmousewheel=fnwheel;
		}
		//封装一个fnwheel滚动事件再给这个事件传一个值出来
		
		function fnwheel(ev){
			var e=ev||event;
			//设一个变量，把变量赋值为假，之后进行判断
			var down=false;
			//先判断是不是在其他浏览器上
			//统一方向
			if(e.wheelDelta){
				//其他浏览器上滚是正值
				if(e.wheelDelta<0){
					down=true;
				}else{
					down=false;
				}	
			}else{
				//判断火狐浏览器的滚动值上滚就是负值
				if(e.detail<0){
					down=false;
				}else{
					down=true;
				}
			}
			//最后再调回这个函数
			fn(down)
		}
	}

//封装一个处理加载问题的函数，就是防止window。onload加载过慢，而进行单独针对dom进行加载的
function ready(fn){
	//判断是不是高版本不是走下面, 这个是bom事件加载在document上面
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false)
	}else{
		//正常后面的函数直接写fn但是里面会出现只读完成interactive和完成complete所以进行判断
		//绑定事件前面要增加对象
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				fn();
			}	
		});
	}
}


//设置 cookie的函数
function setcookie(name,value,timeout){
	var d=new Date();
	d.setDate(d.getDate()+timeout);
	//获取结束时间
	document.cookie=name+'='+value+';expires='+d;
}
//获取
function getcookie(name){
	var str=document.cookie
	var arr=str.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr1=arr[i].split('=');
		if(arr1[0]==name){
			return arr1[1];
		}	
	}
	return '';
}
//删除
function removecookie(name){
	setcookie(name,0,-1);
}


//跨域名获取数据进行本地加载

//url,data,success,error,cbKey,timeout
function jsonp(options){
	//0.整理options
	options=options||{};
	options.data=options.data||{};
	options.cbKey=options.cbKey||'cb';
	options.timeout=options.timeout||0;
	
	options.data[options.cbKey]=('jsonp'+Math.random()).replace('.','');
	window[options.data[options.cbKey]]=function(json){
		clearTimeout(timer);
		options.success && options.success(json);
		//清理工作
		document.getElementsByTagName('head')[0].removeChild(oSc);
		window[options.data[options.cbKey]]=null;
	};
	//1.整理data
	var arr=[];
	for(var key in options.data){
		arr.push(key+'='+encodeURIComponent(options.data[key]));	
	}
	var str=arr.join('&');
	
	//2.创建script,丢到页面
	var oSc=document.createElement('script');
	oSc.src=options.url+'?'+str;
	document.getElementsByTagName('head')[0].appendChild(oSc);
	
	//3.超时
	if(options.timeout){
		var timer=setTimeout(function(){
			options.error && options.error();
			window[options.data[options.cbKey]]=function(){
				window[options.data[options.cbKey]]=null;
				document.getElementsByTagName('head')[0].removeChild(oSc);
			};
		},options.timeout);	
	}
	
}


//ajax导入数据，让刷新的时候不用全部都从来
//url,data,type,timeout,success,error
function ajax(options){
	//-1.整理options
	options=options||{};
	options.data=options.data||{};
	options.type=options.type||'get';
	options.timeout=options.timeout||0;
	
	//0.整理data	json  --> string
	options.data.t=Math.random();
	var arr=[];
	for(var key in options.data){
		arr.push(key+'='+encodeURIComponent(options.data[key]));	
	}
	var str = arr.join('&');
	
	//1.创建ajax
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
	if(options.type=='get'){//get
		//2.建立连接
		oAjax.open('get',options.url+'?'+str,true);
		//3.发送
		oAjax.send();
	}else {//post
		//2.建立连接	
		oAjax.open('post',options.url,true);
		//设置请求头
		oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		oAjax.send(str);
	}
	
	
	//4.接收
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			clearTimeout(timer);
			if(oAjax.status>=200 && oAjax.status<300 || oAjax.status==304){
				options.success && options.success(oAjax.responseText);	
			}else{
				options.error && options.error(oAjax.status);
			}
		}
	}
	
	//5.超时
	if(options.timeout){
		var timer=setTimeout(function(){
			//数据不要了	，你别加载
			oAjax.abort();//中断ajax请求,也会触发readyState==4
		},options.timeout);
	}
	
}




//锚点转换，把地址栏的锚点导入到页面，把页面的信息导入地址栏
function json2hash(json){
	//{tab:1,page:2,msg:3};
	var arr=[];
	for(var key in json){
		arr.push(key+'='+json[key]);	
	}
	location.hash='#'+arr.join('&');
}
function hash2json(sHash){
	var json={};
	sHash=sHash.substring(1);	
	var tmpArr = sHash.split('&');
	for(var i=0;i<tmpArr.length;i++){
		//[tab=1,page=2,msg=3]	
		var tmp2Arr=tmpArr[i].split('=');//[tab,1]
		json[tmp2Arr[0]]=tmp2Arr[1];
	}
	return json;
}


//运动的代码

function getStyle(obj,attr){
	return (obj.currentStyle||getComputedStyle(obj,false))[attr];

}
function move(obj,json,options){
	//整理可选参数
	options = options || {};
	options.duration = options.duration || 300;
	options.complete = options.complete || null;
	options.easing = options.easing || 'ease-out';
	var start={};	
	var dis={};	
	for(var key in json){
		start[key]=parseFloat(getStyle(obj,key));
		
		if(isNaN(start[key])){
			switch(key){
				case 'width':
					start[key]=obj.offsetWidth;	
					break;
				case 'height':
					start[key]=obj.offsetHeight;	
					break;
				case 'opacity':
					start[key]=1;	
					break;
				case 'left':
					start[key]=0;	
					break;
				case 'top':
					start[key]=0;	
					break;
				//marginLeft/top...	padding
			}	
		}
		dis[key]=json[key]-start[key];
	}
	var count=Math.round(options.duration/30);
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		for(var key in json){//办事部分包起来
			switch(options.easing){
				case 'linear':	
					var a=n/count;//	匀速运动
					var cur=start[key]+dis[key]*a;
					break;	
				case 'ease-in':
					var a=n/count;//	加速运动
					var cur=start[key]+dis[key]*(a*a*a);
					break;	
				case 'ease-out':
					var a=1-n/count;//	减速运动
					var cur=start[key]+dis[key]*(1-a*a*a);
					break;	
			}
			if(key=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity='+cur*100+')';
			}else{
				obj.style[key]=cur+'px';
			}	
		}
		if(n==count){
			clearInterval(obj.timer);
			options.complete && options.complete();
		}
	},30);
}

//用正则表达式封装出来的表达式
/*function getByClass(oParent,sClass){
	
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}
	
	var aEle=oParent.getElementsByTagName('*');
	var result=[];
	
	var re=new RegExp('\\b'+sClass+'\\b')
	
	for(var i=0;i<aEle.length;i++){
		if(re.test(aEle[i].className)){
			result.push(aEle[i]);	//a b active c d
		}
	}
	return result;
}	
*/


//删除添加class
function toggleClass(obj,sClass){
	hasClass(obj,sClass)?removeClass(obj,sClass):addClass(obj,sClass);
}
//判断是否存在class
function hasClass(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b');
	return re.test(obj.className);
}
//删除class
function removeClass(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b');
	if(re.test(obj.className)){
		obj.className=obj.className.replace(re,'');
		if(!obj.className){
			obj.removeAttribute('class');	
		}
	}
	if(obj.className){
		obj.className=obj.className.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
	}
	
}

//添加class
function addClass(obj,sClass){
	var re=new RegExp('\\b'+sClass+'\\b');
	if(!re.test(obj.className)){
		obj.className=obj.className+' '+sClass;
	}
}


//封装模版函数
function tmplate(oTmp,json){
	var obj=oTmp.cloneNode(true);
	obj.innerHTML=obj.innerHTML.replace(/\{\{\w+\}\}/g,function(s){
		s=s.substring(2,s.length-2);
		//s是前面的函数的值扔进函数内做形参
		return json[s];
	})
	obj.removeAttribute('id');
	return obj;
}

//设置物体的定位，角度和物体，
function setPos(obj,ang){
			var a = Math.sin(a2r(ang)) * r;
			var b = Math.cos(a2r(ang)) * r;
			obj.style.left = oDiv.offsetLeft + r + a + 'px';
			obj.style.top = oDiv.offsetTop + r - b + 'px';
		}
//角度转弧度
function a2r(n){//角转弧
	return n*Math.PI/180;
}






















