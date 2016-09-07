//版权 北京智能社©, 保留所有权利
define(function(require){
	//引入common模块	(模块里面引入模块)
	var getStyle=require('js/common').getStyle;
	
	function move(obj,json,options){
		//1.	整理options
		options=options||{};
		options.duration=options.duration||300;
		options.easing=options.easing||'ease-out';
		//2.	创建start/dis/count/n
		var start={};
		var dis={};
		for(var key in json){
			start[key]=parseFloat(getStyle(obj,key));	
			if(isNaN(start[key])){
				switch(start[key]){
					case '':
						//..
						break;
					//left/top/width/height/opacity...
				}
			}
			dis[key]=json[key]-start[key];
		}
		var count=Math.round(options.duration/30);
		var n=0;
		
		//3.	清除obj.timer
		clearInterval(obj.timer);
		//4.	开起来
		obj.timer=setInterval(function(){
			n++;
			//办事
			for(var key in json){
				//	计算 cur	==	速度
				switch(options.easing){
					case 'linear':
						var a=n/count;
						var cur=start[key]+dis[key]*a;
						break;
					case 'ease-in':
						var a=n/count;
						var cur=start[key]+dis[key]*(a*a*a);
						break;
					case 'ease-out':
						var a=1-n/count;
						var cur=start[key]+dis[key]*(1-a*a*a);
						break;
				}
				//	修改obj的css
				//	判断是不是opacity
				if(key=='opacity'){
					obj.style.opacity=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';	
				}else{
					obj.style[key]=cur+'px';	
				}
			}
			if(n==count){//	停止条件	
				clearInterval(obj.timer);
				options.complete && options.complete();
			}
		},30);
	};
	return {
		move:move	
	}	
});