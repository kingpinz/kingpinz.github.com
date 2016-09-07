// JavaScript Document
	 window.onload=function(){
/*		 var mySwiper = new Swiper ('.swiper-container',{
			spaceBetween: 20,
			//pagination: '.swiper-pagination',
			paginationClickable: false, //允许点击
			nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
			autoplay:3000,
			autoplayDisableOnInteraction:false,
			loop:true,
			//keyboardControl: true,
			effect: 'cube',
			direction: 'vertical'
			
		}) 
*/		
		var oSwiperpart=document.querySelector('#swiperpart');
		var aSp=oSwiperpart.querySelectorAll('.part-p');
		var aUl=oSwiperpart.querySelectorAll('.part-ul');
		var aSwiperslide=oSwiperpart.querySelectorAll('.swiper-slide');
		
		for(var i=0;i<aSp.length;i++){
			aSp[i].index=i
			aSp[i].onclick=function(){
				this.style.display='none';	
				aUl[this.index].style.opacity=1;
				
				
				
				
				
				
				
				
				
			}
			
			
			
			
			
			
			
		}
		
		
		
		
		
		
		
		
		
		
		  		 
	 };     



















