// JavaScript Document
$(function(){
	var n=1;
	
	//------------------------------------------------------------
	//放大镜
	$('.box1').mousemove(function(ev){
		var l=ev.pageX-$(this).offset().left-$('#zoom').width()/2;
		var t=ev.pageY-$(this).offset().top-$('#zoom').height()/2;
		
		if(l<0){
			l=0;
		};
		if(t<0){
			t=0;
		};
		var max_l=$(this).width()-$('#zoom').width();
		var max_t=$(this).height()-$('#zoom').height();
		if(l>max_l){
			l=max_l
		};
		if(t>max_t){
			t=max_t
		};
		$('#zoom,.box2').show();
		$('#zoom').css({"top":t,"left":l});
		$('.box2 img').css({"top":-t*3,"left":-l*3});
	});
	$('.box1').mouseleave(function(){
		$('#zoom,.box2').hide();
	});
	
	//-----------------------------------------------------------
	//小图移入
			$('.imgList li').each(function(i) {
				$('.imgList li').eq(i).mouseover(function(){
					$('.imgList li').removeClass('ac')
					$('.box1 img').attr('src','images/京东用图片images/帮宝适/0'+(i+1)+'big.jpg')
					$('.box2 img').attr('src','images/京东用图片images/帮宝适/0'+(i+1)+'bigbig.jpg')
					$(this).addClass('ac')
				});
				
			});
	//-----------------------------------------------------------
	//选项	
		
		$('.priceList li').each(function(i) {
			console.log(i)
			if(i>0){
				$('.priceList li').eq(i).click(function(){
					$('.priceList li').removeClass('ac')
					$(this).addClass('ac')	
				});
			}
		});
	//---------------------------------------------------------------
	//数量选择
	    	
		$('.changeNum .addBtn').click(function(){
			n++;
			
			$('.changeNum input').val(n)	
		});
		$('.changeNum .subBtn').click(function(){
			n--;
			
			if(n>=1){
				$('.changeNum input').val(n)
			}else{
				$('.changeNum .subBtn').prop('disabled',false);
				n=1	
			}				
		});
		
	//---------------------------------------------------------------------
	//切换推荐和人气
	
	$('.mainbot .tuijian').mouseover(function(){
		$('.mainbot .renqi').removeClass('ad');
		$('.mainbot .tuijian').addClass('ac');
		$('.cont_list_renqi').hide();
		$('.cont_list_tuijian').show();	
	});	
	$('.mainbot .renqi').mouseover(function(){
		$('.mainbot .tuijian').removeClass('ac');
		$('.mainbot .renqi').addClass('ad');
		$('.cont_list_tuijian').hide();
		$('.cont_list_renqi').show();	
	});	
		
	//----------------------------------------------------------------------
	//购物车
		
	$('.okBtn').click(function(){
			
			$('.shoppingcar a').children('span').text(n)
				
			alert("已加入购物车")
		
	});
	
	
		
		
		
		
});





























