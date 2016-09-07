// JavaScript Document
 		
		//加载留言条
		//设定插件
		$.fn.lazyLoad=function(){
            var aLi=this;
            lazyLoad();
            function lazyLoad(){

                var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
                var scrollBottom=document.documentElement.clientHeight+scrollTop;

                aLi.each(function(index){
                    //liT
                    var liT=$(this).offset().top;

                    if(scrollBottom>=liT){
						
						$(this).stop().animate({'opacity':1},1000);
                    }
                });
            }
            $(window).on('scroll',lazyLoad);
        };
		//
		$.fn.fastLoad=function(){
            var aLi=this;
            lazyLoad();
            function lazyLoad(){

                var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
                var scrollBottom=document.documentElement.clientHeight+scrollTop;

                aLi.each(function(index){
                    //liT
                    var liT=150;
					
                    if(scrollTop>=liT){
						
						$(this).stop().animate({'opacity':1},300);
                    }else{
						$(this).stop().animate({'opacity':0},300);
					}
                });
            }
            $(window).on('scroll',lazyLoad);
        };		
		//执行框架			
        $(function(){
            $('#content li').lazyLoad();
            $('.loadedContent').lazyLoad();
            $('#returnTop').fastLoad();
        	$('#returnTop').on('click',function(){
				
				var timer=null;
				move(0,1000);
				function move(iTarget,time){
						var start=document.documentElement.scrollTop||document.body.scrollTop;
						
						var dis=iTarget-start;
						var count=Math.round(time/30);
						var n=0;
						clearInterval(timer);
						timer=setInterval(function(){
							n++;
							
							var a=1-n/count;
							var cur=start+dis*(1-a*a*a);
							
							document.documentElement.scrollTop=cur;
							document.body.scrollTop=cur;
							
							
							if(n==count){
								clearInterval(timer);
							}
						},30);	
					}
			})
		});

	






















