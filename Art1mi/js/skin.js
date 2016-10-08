// JavaScript Document


define(function(require){
	var getByClass = require('js/common').getByClass;
	
	
	function skin1(arg){
		$(arg).css('background','green');

	}
	function skin2(arg){
		$(arg).css('background','green');

	}
	function skin3(arg){
		$(arg).css('background','green');

	}
	return {
		skin1:skin1,
		skin2:skin2,
		skin3:skin3
	}
	
})