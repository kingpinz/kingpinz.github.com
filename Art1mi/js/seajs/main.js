// JavaScript Document
define(function(require){
	var fn=require('js/fn');
	var addEvent=require('js/addEvent');
	var getEle=require('js/getEle');
    return  {
		use:function(id){
			fn(id);
		},
		addEvent:function(id){
			addEvent(getEle.getById(id),'mouseover',function(){
				var oSubMenuRightd=document.getElementById('subMenuRight');
				var aLi=this.children;
				var aDiv=oSubMenuRightd.getElementsByTagName('div');
				for(var i=0; i<aLi.length;i++){
					(function(index){
						aLi[i].onmouseover=function(){
							for(var i=0;i<aLi.length;i++){
								aLi[i].className='';
								aDiv[i].className='subdiv clearfix';
							}
							this.className='on';
							aDiv[index].className='subdiv clearfix show'
						}
						aLi[i].onmouseout=function(){
							for(var i=0;i<aLi.length;i++){
								aLi[i].className='';
								aDiv[i].className='subdiv clearfix';
							}
						}
					})(i)
				}
			});
		},
		
	};
});