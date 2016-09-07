// JavaScript Document

define(function(require){
	function setTop(oWrap,t){
		var oBar=getByClass(oWrap,'rollBar')[0];
		var oUp=getByClass(oWrap,'rollBarUp')[0];	
		var oDown=getByClass(oWrap,'rollBarDown')[0];	
		var oBarParent=getByClass(oWrap,'rollBox')[0];	
		var oContent=oWrap.children[1];
		//限定
		//这里的t就是到父级盒子的距离
		console.log(t);
		if(t<oUp.offsetHeight) t=oUp.offsetHeight;console.log(t);
		if(t>oBarParent.offsetHeight-oBar.offsetHeight-oDown.offsetHeight)
		t=	oBarParent.offsetHeight-oBar.offsetHeight-oDown.offsetHeight;
		oBar.style.top=t+'px';//使用
		
		//控制内容	a/b=c/d
		//c	=	a/b*d =	scale*d;
		var scale=oBar.offsetTop/(oBarParent.offsetHeight-oBar.offsetHeight-oDown.offsetHeight)
		
		oContent.style.top=scale*(oWrap.offsetHeight-oContent.offsetHeight)+'px';
		
		if(t==oUp.offsetHeight){
			oContent.style.top=0;	
		}
		if(t==oBarParent.offsetHeight-oBar.offsetHeight-oDown.offsetHeight){
			oContent.style.top=oWrap.offsetHeight-oContent.offsetHeight+'px';	
		}	
	}
	return{
		setTop:setTop	
	}



})