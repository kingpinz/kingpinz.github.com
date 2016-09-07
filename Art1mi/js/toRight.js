define(function(require){
	
	function toRight(arg){
		
				var oBox=$(arg)
				var aImg=$('#'+arg+' img');
				var oPrev=$('#'+arg+' .img-l');
				var oNext=$('#'+arg+' .img-r');
				var oList=$('#'+arg+' .list');
				var aLi=$('#'+arg+' .list li a');
				var timer=null;
				var iCount=0;
				
				
				for(var i=0;i<aLi.length;i++){
					aLi[i].index=i;
					aLi[i].onmouseover=function(){					
						iCount=this.index;
						tab();
					};
				}
				
				timer=setInterval(function(){
					iCount++;	
					tab();
				},5000);
				
				function tab(){
					if(iCount==aLi.length){
						iCount=0;
					}
					if(iCount==-1){
						iCount=aLi.length-1;
					}
					for(var i=0;i<aLi.length;i++){
						aLi[i].className='';
						aImg[i].className='';
					}	
					aLi[iCount].className='active';
					aImg[iCount].className='show';
				}
				
				oPrev[0].onclick=function(){
					iCount--;	
					tab();
				};
				oNext[0].onclick=function(){
					iCount++;
					tab();	
				};
				
				$('#'+arg+' img').hover(function(){
					clearInterval(timer);
				},function(){
					timer=setInterval(function(){
						iCount++;	
						tab();
					},5000);
				})
	}
	
	return {
		toRight:toRight,
	}
})