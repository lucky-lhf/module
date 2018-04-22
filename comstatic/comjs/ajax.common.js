/**
 * AJAX 公共JS
 * @author RZT-杨正炳
 * @since 2018-03-22
 * @description 引入前一定要先引jQuery和mui.min.js
 */
//window.AJAX = {};
window.AJAX = {
	// if:网页调试使用、else:安卓调试使用
	// 使用方法：AJAX.apiMethod(方法,参数,成功回调,失败报错);
	// 方法method包括:action(请求接口)、request(请求方式:post\get)、isJsonp(是否跨域:默认json,跨域jsonp)、isLocal(是否缓存)、
 	apiMethod: function(method,param,success,error){
 		// 判断方法method的数据是否为空
 		if(method.isLocal){	// 是否需要缓存
 			
 		}else if(!method.action){	// 判断接口地址
 			alert("数据请求接口不能为空");
 			return;
 		}else if(!method.request){	// 判断请求方式
 			alert("数据请求方式不能为空");
 			return;
 		}else if(!method.isJsonp){	// 判断是否跨域
 			method.isJsonp = 'json';
 		}
 		// 数据请求调用的方法
		if(!window.android){	// 前端ajax请求
			console.log("前端ajax");
			param = param==null?{}:param;
			param.timechuo = new Date().getTime();
			AJAX.loadingShow();
			$.ajax({
				url: method.action,
				type: method.request,
				dataType: method.isJsonp,
				data: param,
				timeout: 20000,
				success: function (json) {
					if(!!success&&json.success){
						AJAX.loadingHide();
						success(json);
					}
				},
				error:function(xhr, txt, err){
					AJAX.loadingHide()
					if(!!error){
						error(xhr);
					}
				}
			});
		}else{	// 安卓请求
			console.log("安卓ajax");
			param = param==null?{ }:param;
			var Androidaction = "sendHttp";
		    param.uri = method.action;
		    param.agreement = method.request.toUpperCase();
		    extrainfo.callMethod(Androidaction,param,function(json){
		    	if(!!success){
					success(json);
				}
		    	if(!!error){
					error(json);
				}
			});
		}	
	},
	
	// 获取当前页面地址栏参数
	// 例：www.baidu.com?id=123456&name='zhangsan'
	// 使用方法：var p = AJAX.getLocaPara();p.id、p.name便可以获取id、name的参数
	getLocaPara: function() {
	   var url = location.href;
	   var theRequest = new Object();
	   var index = url.indexOf("?");
	   if (index != -1) { 
			var str = url.substr(index+1);
			var idx = str.indexOf("&");
			if(idx!=-1){
				var strs = str.split("&");
				for(var i = 0; i < strs.length; i ++) { 
					theRequest[strs[i].split("=")[0]]=strs[i].split("=")[1];
				}
			}else{
				theRequest[str.split("=")[0]]=str.split("=")[1];
			}
		}
	   return theRequest;
	},
	
	// 页面预加载
	// 默认初始默认效果
	loading: {
		loadingTrue: true,
		loadingBody: $("body"),
		loadingName: '加载中...',
		loadingHtml: ''
	},
	// 使用方法：AJAX.loadName(文字描述,LOADING.loading第几个.loading);
	// 使用入前一定要先引loading.common.js
	loadName: function(name,loading) {
		AJAX.loading.loadingTrue = false;
		if(name && loading){
			AJAX.loading.loadingName = name;
			AJAX.loading.loadingHtml = loading;
		}else if(name && !loading){
			AJAX.loading.loadingName = name;
			AJAX.loading.loadingHtml = AJAX.loadHtml.loadingHtml;
		}else{
			AJAX.loading.loadingHtml = AJAX.loadHtml.loadingHtml;
		}
	},
	// 页面预加载显示
	loadingShow: function(){
		if(AJAX.loading.loadingTrue){
			AJAX.loadName();
		}
		AJAX.loading.loadingBody.append(AJAX.loading.loadingHtml);
		$('#loadingName').html(AJAX.loading.loadingName);
	},
	// 页面预加载隐藏
	loadingHide: function(){
		AJAX.loading.loadingHtml;
		document.body.removeChild(document.getElementById('loadingDiv'));
	},
	// 页面默认预加载效果
	loadHtml: {
		loadingHtml: $('<div id="loadingDiv" style="position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;top:0;background:rgba(153, 153, 153, .6);opacity:0.8;filter:alpha(opacity=80);z-index:999999;">'+
							'<div style="position: absolute;top: calc(50% - 4.5em);left: calc(0% - 0em);width:100%;height:4.5em;background: transparent;padding: 2.25em 0;">'+
								'<div style="position: relative;width:4.5em;height:4.5em;margin:0 auto;">'+
									'<div class="loader" style="position:absolute;width:0.25em;height:0.25em;top: calc(100% - 2.25em);left: calc(100% - 2.25em);"></div>'+
								'</div>'+
								'<span id="loadingName" style="display:block;color:#008000;font-size:20px;text-align:center;padding:10px 25%;font-weight: 600;">加载中...</span>'+
							'</div>'+
							'<style>'+
								'.loader{'+
									'box-shadow: 0.70711em 0.70711em 0 0em #2ecc71, -0.70711em 0.70711em 0 0.17678em #9b59b6, -0.70711em -0.70711em 0 0.25em #3498db, 0.70711em -0.70711em 0 0.17678em #f1c40f;'+
									'animation: gw 1s ease-in-out infinite, rot 2.8s linear infinite;'+
	  							'}'+
								'@-webkit-keyframes rot {'+
									'to {transform: rotate(360deg);}'+
								'}'+
	        					'@-webkit-keyframes gw {'+
									'0% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
									'25% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.5em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.125em #f1c40f;}'+
									'50% {box-shadow: 0.70711em 0.70711em 0 0.5em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.125em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
									'75% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.125em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.5em #f1c40f;}'+
									'100% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
									'}'+
								'@keyframes rot {'+
								'to {transform: rotate(360deg);}'+
								'}'+
									'@keyframes gw {'+
								'0% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
								'25% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.5em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.125em #f1c40f;}'+
								'50% {box-shadow: 0.70711em 0.70711em 0 0.5em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.125em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
								'75% {box-shadow: 0.70711em 0.70711em 0 0.39017em #2ecc71, -0.70711em 0.70711em 0 0.125em #9b59b6, -0.70711em -0.70711em 0 0.39017em #3498db, 0.70711em -0.70711em 0 0.5em #f1c40f;}'+
								'100% {box-shadow: 0.70711em 0.70711em 0 0.125em #2ecc71, -0.70711em 0.70711em 0 0.39017em #9b59b6, -0.70711em -0.70711em 0 0.5em #3498db, 0.70711em -0.70711em 0 0.39017em #f1c40f;}'+
								'}'+
							'</style>'+
						'</div>')
	},
}
