define(function(require){
	var getByClass = require('js/common').getByClass;
	
	function subnei1(arg){alert(arg)
		var oHead=$('#'+arg+' .sublist')[0];
		var aHead=oHead.children;
		var aContent=$('#'+arg+' li .subnei-subul')
		var oWrap=$('#'+arg+' .subnei-subul-wrapper')
		var oPrev=$('#'+arg+' .left');
		var oNext=$('#'+arg+' .right');
		var iCount=0;
		//点击事件选项卡可以
		for(var i=0;i<aHead.length;i++){
			aHead[i].index=i;
			aHead[i].onclick=function(){
				iCount=this.index;
				tab();
			}
		}
			//前后可以
		oPrev[0].onclick=function(){
			
			
			iCount--
			tab();
		};
		oNext[0].onclick=function(){
			iCount++;
			tab();
		};
		//要连接两个选项卡同步
		function tab(){
			if(iCount==0){
				return ;
			}				
			if(iCount==aHead.length-1){
				return ;
			}
			for(var i=0;i<aHead.length;i++){
				aHead[i].className='';
			}
			aHead[iCount].className='active';
			aContent[0].style.left=-iCount*296+'px';
		}
		//返回值
		return {subnei1:subnei1};
	}
})