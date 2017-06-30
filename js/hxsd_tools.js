// JavaScript Document

/*页面居中显示*/

$.fn.showCenter=function(){
	
		var _this;
		function center(){
		var screenW=$(window).width()
		var screenH=$(window).height()
		_this.show();
		var l=(screenW-_this.outerWidth() )/2;  
		var t=(screenH-_this.outerHeight() )/2;
		_this.css({'left':l,'top':t});
		
		//_this.style.left=l+'px';
		//_this.style.top=t+'px';
		};
		return this.each(function(){
			_this=$(this);
			center();
			//window.onresize=center; 挑战窗口尺寸时候再次调用
			$(window).resize(center)
		})
	
	
};
	







/*function showCenter(obj){//obj:居中显示的对象 
	function center(){
		var screenW=document.documentElement.clientWidth;
		var screenH=document.documentElement.clientHeight;
		obj.style.display="block";
		var l=(screenW-obj.offsetWidth)/2;  // offsetWidth:width  border padding
		var t=(screenH-obj.offsetHeight)/2;
		obj.style.left=l+'px';
		obj.style.top=t+'px';
	};
	center();
	window.onresize=center; //挑战窗口尺寸时候再次调用
};*/


/*拖拽*/

$.fn.darg=function(title){
	return this.each(function(){
		var _this=$(this);
		title=title || _this;
		title.onmousedown(function(ev){
		//鼠标按下，计算盒子偏移距离
		var disX=ev.clientX-_this.offset().left;
		var disY=ev.clientY-_this.offset().top;
		
		//-------------------------------------------
		$(document).onmousemove(function(ev){
			var t=ev.clientY-disY;
			var l=ev.clientX-disX;
								
			var screenW=$(window).width()//屏幕宽度
			var screenH=$(window).Height()//屏幕高度
			
			if(l<0){
				l=0;
			};
			if(t<0){
				t=0;
			};
			
			if(l>screenW-_this.outerWidth()){ //屏幕宽度---盒子宽度
				l=screenW-_this.outerWidth()
			};
			
			if(t>screenH-_this.outerHeight()){ //屏幕宽度---盒子宽度
				t=screenH-_this.outerHeight()
			};
			_this.css({'left':l,'top':t});
		});
		//-----------------------------------------
		$(document).mouseup=function(){
		$(document).mousemove=null;
		};
		return false;//阻止默认事件
	});
	})
	
	
	
	
	
	
}

/*function drag(obj,title){// obj:拖拽对象   title：可拖拽标题

	title=title || obj;//拖拽判断
	
	title.onmousedown=function(ev){
		//鼠标按下，计算盒子偏移距离
		var disX=ev.clientX-obj.offsetLeft;
		var disY=ev.clientY-obj.offsetTop;
		
		//-------------------------------------------
		document.onmousemove=function(ev){
			var t=ev.clientY-disY;
			var l=ev.clientX-disX;
								
			var screenW=document.documentElement.clientWidth;//屏幕宽度
			var screenH=document.documentElement.clientHeight;//屏幕高度
			
			if(l<0){
				l=0;
			};
			if(t<0){
				t=0;
			};
			
			if(l>screenW-obj.offsetWidth){ //屏幕宽度---盒子宽度
				l=screenW-obj.offsetWidth
			};
			
			if(t>screenH-obj.offsetHeight){ //屏幕宽度---盒子宽度
				t=screenH-obj.offsetHeight
			};
			obj.style.left=l+"px";
			obj.style.top=t+"px";
		};
		//-----------------------------------------
		document.onmouseup=function(){
			document.onmousemove=null;
		};
		return false;//阻止默认事件
	};
};*/