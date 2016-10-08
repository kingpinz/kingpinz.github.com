
define(function(){
	var tab = require('js/tab').tab;
	var getByClass = require('js/common').getByClass;
	
	function tabAll(sClass){
		var aWrap=getByClass(document,sClass);
		for(var i=0;i<aWrap.length;i++){
			tab(aWrap[i]);//tab方法对外输出了，使用的时候也要加上exports
		}	
	};	
	return{
		tabAll:tabAll	
	}
});