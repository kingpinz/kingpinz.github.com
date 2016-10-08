
define(function(require){
	
	
	function change(arg){
		$('#'+arg+' .list li a').click(function(){
			$('#'+arg+' .list li a').removeClass('active');
			$('#'+arg+' img').removeClass('show');
			$(this).addClass('active');
			$('#'+arg+' img').eq($(this.parentNode).index()).addClass('show');
		})
	}
	

	return {
		change:change
	}
})