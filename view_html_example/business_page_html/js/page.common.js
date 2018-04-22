(function($) {
	$('.mui-pagination').on('tap', 'a', function() {
		var li = this.parentNode;
		var classList = li.classList;
		if(!classList.contains('mui-active') && !classList.contains('mui-disabled')) { //当点击的不是当前页或者不可点击的按钮
			var active = li.parentNode.querySelector('.mui-active'); //ul下选中选项
			if(classList.contains('mui-previous')) { //previous，点击的是第一个前进的按钮
				if(active) { //选中选项
					var previous = active.previousElementSibling; //选中选项的前一个选项
					console.log('previous', previous);
					if(previous && !previous.classList.contains('mui-previous')) { //选中选项的前一项，不是第一个前进项
						$.trigger(previous.querySelector('a'), 'tap');
					} else { //当前选项添加不可点击的属性
						classList.add('mui-disabled');
					}
				}
			} else if(classList.contains('mui-next')) { //next，最后一个后退项
				if(active) { //选中项
					var next = active.nextElementSibling; //选中选项的后一个选项
					if(next && !next.classList.contains('mui-next')) { //选中选项的后一项，不是第一个后退项
						$.trigger(next.querySelector('a'), 'tap');
					} else { //当前选项添加不可点击的属性
						classList.add('mui-disabled');
					}
				}
			} else { //page，中间的选项
				active.classList.remove('mui-active'); //选中项的选中的属性，移除
				classList.add('mui-active'); //为当前点击的选项，添加选中的属性
				var page = parseInt(this.innerText); //当前点击的选项的文本
				var previousPageElement = li.parentNode.querySelector('.mui-previous'); //第一个前进项
				var nextPageElement = li.parentNode.querySelector('.mui-next'); //最后一个后退项
				previousPageElement.classList.remove('mui-disabled'); //移除掉第一个
				nextPageElement.classList.remove('mui-disabled'); //第一个前进项
				if(page <= 1) { //
					previousPageElement.classList.add('mui-disabled');
				} else if(page >= 10) {
					nextPageElement.classList.add('mui-disabled');
				}
			}
		}
	});

})(mui);

/**
 * 更新分页的页面文字
 * @param {Object} currentIndex  当前页数
 * @param {Object} maxIndex  总页数
 */
function makePage(currentIndex, maxIndex, pageBox) {
	currentIndex = parseInt(currentIndex);
	var html = '';
	html += '<li class="mui-previous"><a href="#">&laquo;</a></li>'
	for(var i = 1; i < maxIndex + 1; i++) {
		if(i > currentIndex - 3 && i < currentIndex + 3) {
			if(i == currentIndex) {
				html += '<li class="myli mui-active" data-id="' + i + '"><a href="#" style="width: 54px;text-align: center;" >' + i + '</a></li>';
			} else {
				html += '<li class="myli" data-id="' + i + '"><a href="#" style="width: 54px;text-align: center;" >' + i + '</a></li>';
			}
		}
	}
	html += '<li class="mui-next"><a href="#">&raquo;</a></li>'
	
	var pageBoxs;
	if(!pageBox){
		pageBoxs = $("#pageBox");
    } else{
    	pageBoxs = $("#" + pageBox);
    }
	
	pageBoxs[0].innerHTML = html;
	var dom = document.getElementsByClassName('myli');
	for(var i = 0; i < dom.length; i++) {
		dom[i].addEventListener('tap', function() {
			//角标的点击事件
			makePage(this.getAttribute('data-id'), maxIndex, pageBox);
			// findFalvfaguiList(this.getAttribute('data-id'));
		});
	}
}