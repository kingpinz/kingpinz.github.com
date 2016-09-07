//版权 北京智能社©, 保留所有权利
define(function(require){
	
	//引入common.js模块
	var getByClass=require('js/common').getByClass;
	//引入move.js模块
	var move=require('js/move').move;
	
	
	function focusImg(id){
		var oWrap=document.getElementById(id);
		var aHead=oWrap.children[1].getElementsByTagName('li');
		var aContent=oWrap.children[0].getElementsByTagName('li');
		var zIndex=2;
		//目的是增加层级来放在最上面
		aContent[0].style.zIndex=2;//调整第0个卡体层级
		var oPoint=getByClass(oWrap,'fi_pointer')[0];
		//opoint这个是个外面移动的小窗框
		oPoint.style.zIndex=4444;
		for(var i=0;i<aHead.length;i++){
			(function(index){
				aHead[i].onclick=function(){
					for(var i=0;i<aContent.length;i++){
						//aContent[i].style.opacity=0;正常的效果	
						move(aContent[i],{opacity:0},{duration:1000});
						//增加渐隐的效果
					}
					//oPoint.style.left=this.offsetLeft+'px';白色的小窗框
					move(oPoint,{left:this.offsetLeft},{duration:1000});
					//aContent[index].style.opacity=1;
					move(aContent[index],{opacity:1},{duration:1000});
					aContent[index].style.zIndex=zIndex++;//升级当前卡体层级
				};	
			})(i);
		}
	};
	
	return {
		focusImg:focusImg	
	}
});