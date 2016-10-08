define(function(require){
	
	function danpintoRight(arg){
		
				var oBox=$(arg);
				
				var aUl=$('#'+arg+' .content ul');
				var oPrev=$('#'+arg+' .left');
				var oNext=$('#'+arg+' .right');
				var iCount=0;
				function tab(){
					if(iCount==aUl.length){
						iCount=0;
					}
					if(iCount==-1){
						iCount=aUl.length-1;
					}
					for(var i=0;i<aUl.length;i++){
						aUl[i].className='list clearfix';
						
					}	
					aUl[iCount].className='list clearfix show';
					
				}
				
				oPrev[0].onclick=function(){
					iCount--;	
					tab();
				};
				oNext[0].onclick=function(){
					iCount++;
					tab();	
				};
	}
	
	return {
		danpintoRight:danpintoRight
	}
})