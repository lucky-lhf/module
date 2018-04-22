/* 滚动条弹性样式*/
var winHeight = $("html").height()-94;
$("#scroll").css("height",winHeight);
(function($) {
	$('#scroll').scroll({
		indicators: true //是否显示滚动条
	});
})(mui);

/*图片轮播*/
var gallery = mui('.mui-slider');
gallery.slider({
	interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
});

/* 页面加载自动调取方法 */
var child = $("#viewDataBox").find(".mui-control-content"),
	footd = $("#footer").find(".mui-tab-item");
displayData();
$("#footer").on('tap','.mui-tab-item',function(event){
	var index = $(this).index();
	sessionStorage.index = index;
	child.eq(index).addClass('mui-active').siblings().removeClass('mui-active');
	displayData();
});
function displayData(index){
	var i = 0;
	if(!index){
		i = sessionStorage.index;
		child.eq(i).addClass('mui-active').siblings().removeClass('mui-active');
		footd.eq(i).addClass('mui-active').siblings().removeClass('mui-active');
	}else{
		//加判断
		
		child.each(function(ic){
	        if(child.eq(ic).hasClass("mui-active")){
	        	i = ic;
	        }
		});
	}
	if(i == 0){
		displayHtml();
	}else if(i == 1){
		displayAnzhuo();
	}else if(i == 2){
		
	}else if(i == 3){
		
	}
}

/*前端页面数据加载*/
function displayHtml(){
	var method = {},param ={};
	method.action = "../home/json/homeHtml.json";
	method.request = "get";
	method.isJsonp = false;
	method.isLocal = false;
	AJAX.apiMethod(method,param,function(data){
		showHtml($("#html"),data.htmlData);
	},function(error){
		
	})
}

/*安卓页面数据加载*/
function displayAnzhuo(){
	var method = {},param ={};
	method.action = "../home/json/AndroidData.json";
	method.request = "get";
	method.isJsonp = false;
	method.isLocal = false;
	AJAX.apiMethod(method,param,function(data){
		showHtml($("#anzhuo"),data.androidData);
	},function(error){
		
	})
}

/* 页面渲染的公共方法 */
function showHtml(hrf,data){
	if(!data){return;}
	var page = '',dataOne = data.content;
	dataOne.forEach(function(val,index){
		var dataTwo = val.content;
		page += '<div class="gongge-list">'+
					'<ul class="mui-table-view">'+
						'<li class="mui-table-view-cell">'+val.htmlName+'</li>'+
					'</ul>'+
					'<ul class="mui-table-view mui-grid-view mui-grid-9">';
			dataTwo.forEach(function(v,i){
				page += '<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">'+
							'<a href="'+v.href+'">'+
								'<span class="mui-icon iconfont '+v.icon+'"></span>'+
								'<div class="mui-media-body m-text">'+v.name+'</div>'+
							'</a>'+
						'</li>';
			});
			page += '</ul>'+
				'</div>';
	});
	hrf.html(page);
}
