// JavaScript Document

/*function modal(){
	var oM=document.createElement('div');
	oM.className="modal";
	document.body.appendChild(oM);
	return function(){
		document.body.removeChild(oM);//删除模态层	
	};
};*/

$.extend({
	modal:function(){
	var oM=document.createElement('div');
	oM.className="modal";
	document.body.appendChild(oM);
	return function(){
		document.body.removeChild(oM);//删除模态层	
	}
	},
	//----------------------------------------------------------------------------
	alertBox:function(msg){
		var delModal=$.modal();//调用模态层 并接收返回值  函数
		var oBox=document.createElement('div');
		oBox.className="alertBox";
		oBox.innerHTML='<p>'+msg+'</p><button type="button">确定</button>';
		document.body.appendChild(oBox);
		/*拖拽*/
		//drag(oBox);
		//居中
		//showCenter(oBox);
		//oBox.showCenter().drag();
		//删除弹框
		var closeBtn=oBox.getElementsByTagName('button')[0];
		closeBtn.onclick=function(ev){
			document.body.removeChild(oBox);//删除alertBox
			delModal();
		};
		closeBtn.onmousedown=function(ev){
			ev.cancelBubble=true;
		}
		
	},
	//----------------------------------------------------------------------------------

	confirmBox:function (msg,fn){
		var delModal=$.modal();//调用模态层 并接收返回值  函数 
		var oBox=document.createElement('div');
		oBox.className="confirmBox";
		oBox.innerHTML='<p>'+msg+'</p><button type="button">确定</button>　　<button type="button">取消</button>';
		document.body.appendChild(oBox);
		/*拖拽*/
		drag(oBox);
		//居中
		showCenter(oBox);
		
		//删除弹框
		oBox.onclick=function(ev){
			var oElm=ev.target;
			if(oElm==this){
				return;
			};
			if(oElm.innerHTML=="确定"){
				document.body.removeChild(oBox);//删除alertBox
				document.body.removeChild(oBtn);
				delModal();
				fn && fn();
			};
			if(oElm.innerHTML=="取消"){
				document.body.removeChild(oBox);//删除alertBox
				delModal();
			}
		}
	}


});










	
	
	
	
	
	












//警告弹框

//确定弹框
	
	
	
	
	/*var aBtn=oBox.getElementsByTagName('button');
	
	aBtn[0].onclick=function(){
		document.body.removeChild(oBox);//删除alertBox
		delModal();
		fn && fn();
	};
	
	aBtn[1].onclick=function(){
		document.body.removeChild(oBox);//删除alertBox
		delModal();
	};*/
	
	







//错误提示框
function errBox(){


}

