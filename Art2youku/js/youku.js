window.onload=function(){
	//移入移出全部显示
	function tab(id1,id2,attr1,attr2,on,sClass1,sClass2,nClass1,nClass2){
		var oBtn=document.getElementById(id1);
		var oDiv=document.getElementById(id2);
		var aBtn=oBtn.getElementsByTagName(attr1);
		var aDiv=oDiv.getElementsByTagName(attr2);
		
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i][on]=function(){
				for(var i=0;i<aBtn.length;i++){
					aBtn[i].className=nClass1;
					aDiv[i].className=nClass2;	
				}
				this.className=sClass1;
				aDiv[this.index].className=sClass2;
			}
		}
	}
	//移入移出只显示头部
	function tab1(id1,attr1,on,sClass1,nClass1){
		var oBtn=document.getElementById(id1);
		var aBtn=oBtn.getElementsByTagName(attr1);
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i][on]=function(){
				for(var i=0;i<aBtn.length;i++){
					aBtn[i].className='';
				}
				this.className=sClass1;
			}			
		}
	}
	tab1('subnav','li','onmouseover','active','')
	tab1('nav-list','li','onmouseover','active','')
	
	tab('yuan','yuan-cont','a','ul','onmouseover','active','clearfix list show','','clearfix list')
	tab('dian','dian-cont','a','ul','onmouseover','active','clearfix list show','','clearfix list')
	tab('zhong','zhong-cont','a','ul','onmouseover','active','clearfix list show','','clearfix list')
	tab('film','film-cont','a','div','onmouseover','active','show','','')
	tab('happy','happy-cont','a','ul','onmouseover','active','clearfix list show','','clearfix list')
	tab('news','news-cont','a','ul','onmouseover','active','clearfix list show','','clearfix list')
	tab('music','music-cont','a','ul','onmouseover','active','clearfix list show','','clearfix list')
	tab('crazy','crazy-cont','a','ul','onmouseover','active','clearfix list show','','clearfix list')
	tab('life','life-cont','a','ul','onmouseover','active','clearfix list show','','clearfix list')
	tab('trl','trl-cont','a','ul','onmouseover','active','clearfix list show','','clearfix list')
	tab('car','car-cont','a','ul','onmouseover','active','clearfix list show','','clearfix list')
/*	var oS=document.getElementById('subnav');
	var aLi=oS.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
				
			}	
			this.className='active';
		}	
	};
*/	
	//移入移出显示内容函数
	function move(id,attr1,attr2,on,sClass1,nClass1){
		var oM=document.getElementById(id);
		var aUl=oM.getElementsByTagName(attr2);
		var aA=oM.getElementsByTagName(attr1);
		
		for(var i=0;i<aA.length;i++){
			aA[i].index=i;
			aA[i][on]=function(){
				for(var i=0;i<aA.length;i++){
					aUl[i].className=nClass1;
				}	
					aUl[this.index].className=sClass1;
			}	
			aA[i].onmouseout=function(){
				for(var i=0;i<aA.length;i++){
					aUl[i].className=nClass1;
				}	
			}	
		};
		
	}
	
	move('more','a','ul','onmouseover','sublist active','sublist')
	move('some','a','ul','onmouseover','','hide')
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
};






























