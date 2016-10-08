// JavaScript Document
define(function(require){
	
	function dapei(arg){
		var aDapeicontent=$('#'+arg+' li');
		var aDiv=$('#'+arg+' li .review-wrapper');
		aDapeicontent.hover(function(){
			
			aDiv.eq($(this).index()).stop().animate({'bottom':'0'});		
		},function(){
			aDiv.stop().animate({'bottom':'-110px'});		
			
			
		})
		
		
	}		
	return{dapei:dapei}
})
