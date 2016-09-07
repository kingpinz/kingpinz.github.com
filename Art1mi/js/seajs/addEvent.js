// JavaScript Document


define(function(){
function addEvent(obj,ev,fn){
	if(obj.addEventListener){
		obj.addEventListener(ev,fn,false);
	}else{
		obj.attachEvent('on'+ev,fn);
	}
}
return addEvent;
function removeEvent(obj,ev,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(ev,fn,false)
	}else{
		obj.detachEvent('on'+ev,fn)
	}
}
})