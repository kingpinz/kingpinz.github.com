//版权 北京智能社©, 保留所有权利

define(function(require){
	var tab = require('js/tab').tab;
	var getByClass = require('js/common').getByClass;
	
	function tab(arg){
		//	object	string
		//判断是不是id还是一个直接获取好的对象 给他获取回来
		if(typeof arg=='string'){
			var oWrap=document.getElementById(arg);
		}else if(typeof arg=='object'){
			var oWrap=arg;
		}
		//获取头部 因为我知道第一个子集就是头部所以就children【0】，去获取里面的li。
		//如果不是那你自己要看清楚到底获取的是哪一个子集下面的什么标签。卡身也是一样
		var aHead=oWrap.children[0].getElementsByTagName('li');
		//这里切的li所以用class
		var aContent=oWrap.children[1].children;
		//这里切的是ul所以用children
		for(var i=0;i<aHead.length;i++){
			(function(index){
				aHead[i].onclick=function(){
					for(var i=0;i<aHead.length;i++){
						aHead[i].className='';
						aContent[i].style.display='none';
					}
					this.className='active';
					aContent[index].style.display='block';
				};	
			})(i);
		}
	};
	function tabAll(sClass){
		var aWrap=getByClass(document,sClass);
		for(var i=0;i<aWrap.length;i++){
			tab(aWrap[i]);//tab方法对外输出了，使用的时候也要加上exports
		}	
	};	
	
	return{
		tab:tab,tabAll:tabAll
	}
	
});