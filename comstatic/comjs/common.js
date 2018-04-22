// 滚动条弹性样式
var winHeight = $("html").height()-44;
$("#scroll").css("height",winHeight);
(function($) {
	$('#scroll').scroll({
		indicators: true //是否显示滚动条
	});
})(mui);

/*返回 方法一：*/
mui(".m-header").on('tap','#back',function(){
	window.history.go(-1);
});

/*返回 方法二：*/

/*
var u = navigator.userAgent;
var goBack=document.getElementById("goBack");

//针对ios原生浏览器处理
if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && /(Safari)/i.test(u)){
    goBack.setAttribute("onclick","javascript:window.location=document.referrer;");
}*/
