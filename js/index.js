// JavaScript Document





	/*var oDiv=document.getElementsByClassName("nav")[0];
	
	var oUl=oDiv.getElementsByTagName("ul")[0];
	
	var oTabCont=oDiv.getElementsByClassName("tabCont")[0];
	
	var aLi=oUl.getElementsByTagName("li");
	
	var aTab=oTabCont.getElementsByClassName("tab");

	
	for(var i=0;i<aLi.length;i++){
		
		aLi[i].index=i;
		
		aLi[i].onclick=function(){
		    for(var j=0;j<aLi.length;j++){
				aLi[j].className="";
				aTab[j].style.display="none";
			}
			this.className="ac";
			aTab[this.index].style.display="block";	
		}
		
	}*/
	//------------------------------------------------------------------------------
	//轮播图
	var n=0;
	
	var timer=setInterval(function(){
		n++;
		if(n>5){
			n=1
		}
		$('.pic_list img').attr("src","images/京东用图片images/首页/0"+n+".jpg");
		
		//console.log(n)
		
		$('.pic_a li').removeClass('ac');
		$('.pic_a li').eq(n-1).addClass('ac');
		
		
	},2000);
	$('.pic_a li').click(function(){
		//clearInterval(timer);
		$('.pic_a li').removeClass('ac');
		$(this).addClass('ac');	
		n=$(this).index();	
		$('.pic_list img').attr("src","images/京东用图片images/首页/0"+(n+1)+".jpg")
		
	});
	
	//-------------------------------------------------------------------------------
	//选项卡
	$('.xuan li').mouseover(function(ev){
		var i=$(this).index();
		$('.xuan li').removeClass('ac');
		$(this).addClass('ac')
		$('.tabCont .tab').eq(i).show().siblings().hide();
	});
	$('.xuan li').mouseout(function(ev){
		var x=ev.pageX;
		var y=ev.pageY;
		console.log(x,y)
		if(x<348 ||y<180 ||y>610){
			$('.tabCont .tab').hide();
		}else{
			$('.tabCont .tab').show();	
		}
	});
	$('.tabCont .tab').mouseout(function(){
		$('.tabCont .tab').hide();	
	});
	//-----------------------------------------------------------------------
	//楼层滚动
	/*var document_h=$(document).height();
	//console.log($('.main .floor_1').eq(0).offset().top)
	var a=$('.main .floor_1').eq(0).offset().top
	var h=document_h-a-$('.main .floor_1').height()*$('.main .floor_1').length;
	
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		
		//var a=document_h/
		var   H=Math.abs(scrollTop-h)
		//console.log(h)
		var b=parseInt( H / $('.main .floor_1').height());
		$('.LocationFloorList li').removeClass('ac');
		$('.LocationFloorList li').eq(b).addClass('ac');
		console.log(b)
		//console.log(scrollTop)
		//console.log(a)
		if(scrollTop>1700){
			$('.LocationFloorList').show();
		}else{
			$('.LocationFloorList').hide();
		};
		if(scrollTop>8800+a && scrollTop<9986+a){
			$('.LocationFloorList li').removeClass('ac');
			$('.LocationFloorList li:last').addClass('ac');
			
		}else if(scrollTop>9986+a){
			$('.LocationFloorList').hide();	
		}
	});
	$('.LocationFloorList li').each(function(i) {
		
		$('.LocationFloorList li').eq(i).click(function(){
			$('.LocationFloorList li').removeClass('ac');
			$(this).addClass('ac');
			var t=$('.main .floor_1').eq(i).offset().top;
			//console.log(t)
			$('html,body').animate({scrollTop:$('.main .floor_1').eq(i).offset().top},800);
		});  
	});

	$('.floor').each(function() {
        var st=$(window).scrollTop()+$(window).height()/2;
		var h=$(this).offset().top;
		if(h<st){
			var index=$(this).index();
			$('.LocationFloorList li').eq(index).addClass('ac').siblings().removeClass('ac');
		}
		
		
    });*/

	$(window).scroll(function(){
	if($(window).scrollTop()>1700){
		$('.LocationFloorList').fadeIn();
	}else{
		$('.LocationFloorList').fadeOut();
	};
	
	
	$('.main .floor_1').each(function() {
        var st=$(window).scrollTop()+$(window).height()/2;
		var h=$(this).offset().top;
		if(h<st){
			var index=$(this).index();
			$('.LocationFloorList li').eq(index).addClass('ac').siblings().removeClass('ac');
		}
		
		
    });
	
	
	
	
	});
	
	$('.LocationFloorList li').click(function(){
		$(this).addClass('ac').siblings().removeClass('ac');
		var index=$(this).index();
		//找到对应楼层的top值,让滚动条滚动到这个值
		var t=$('.main .floor_1').eq(index).offset().top;
		$('body,html').animate({"scrollTop":t});
	
	});

//----------------------------------------------------------
//icon选项
	var show=true;
	$('.mod_tab_head_item').hover(
		function(){
			if(show){
				$(this).addClass('service_frame_on').siblings().removeClass('service_frame_on');
				$('.service').addClass('service_expand');
			}
		},
		function(){
			show=true;
		}
	);
		
	$('.closeBtn').click(function(){
		$('.service').removeClass('service_expand');
		$('.service_list li').removeClass('service_frame_on');
		$('.service_list li:last').addClass('service_frame_on');
		show=false;
	});
	
	






























