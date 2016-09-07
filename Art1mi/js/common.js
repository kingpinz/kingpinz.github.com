//版权 北京智能社©, 保留所有权利
//创建两个子集的方法函数，一个是获取样式一个事获取class
//这些都是属于基础函数
define(function(require){
	function getStyle(obj,attr){
			return (obj.currentStyle||getComputedStyle(obj,false))[attr]	
		}
	function getByClass(oParent,sClass){
			if(oParent.getElementsByClassName){
				return 	oParent.getElementsByClassName(sClass);
			}
			var aEle=oParent.getElementsByTagName('*');
			var result=[];
			for(var i=0;i<aEle.length;i++){
				var tmpArr=aEle[i].className.split(' ');	
				for(var j=0;j<tmpArr.length;j++){
					if(tmpArr[j]==sClass){
						result.push(aEle[i]);
						break;
					}
				}
			}
			return result;
		}
	
	return {
		getStyle:getStyle,
		getByClass:getByClass
	}
});