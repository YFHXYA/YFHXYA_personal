// 禁止按F12调试
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if (e && e.keyCode == 123) {
		mAlert();
		e.returnValue = false;
		return (false);
	}
}

document.onkeydown =document.onkeyup = document.onkeypress=function(){
   if(window.event.keyCode == 123) { //123代表的就是F12
      layer.msg("欢迎光临寒舍，本页面禁止复制，有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！");
      window.event.returnValue=false;
      return(false);
   }
}
function mAlert() {
	alert("感谢使用管理平台，禁止对控制台进行操作！");
}
// 防止鼠标右键浏览器‘检查’操作
setInterval(function () {
	debugger;
},1000)


//禁止复制
document.onselectstart=new Function('event.returnValue=false;');

//vent.button==0是点击了鼠标左键，1中间滚轮键，2右键
document.onmousedown=function(e) {
      if (event.button==2||event.button==3) {
         layer.msg("欢迎光临寒舍，有什么需要帮忙的话，请与站长联系！谢谢您的合作！！！");
         oncontextmenu='return false';
      }
};