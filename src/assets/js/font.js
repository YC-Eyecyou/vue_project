<<<<<<< HEAD
(function() {

	// 动态计算新闻列表文字样式
	auto_resize();
	window.resize(function() {
		auto_resize();
	});
	document.querySelector('.am-list-thumb img').load(function() {
		auto_resize();
	});

	document.querySelector('.am-list > li:last-child').css('border', 'none');

	function auto_resize() {
		document.querySelector('.pet_list_one_nr').style.height = document.querySelector('.pet_list_one_img').offsetHeight;
	}
	document.querySelector('.pet_nav_gengduo').on('click', function() {
		document.querySelector('.pet_more_list').addClass('pet_more_list_show');
	});
	document.querySelector('.pet_more_close').on('click', function() {
		document.querySelector('.pet_more_list').removeClass('pet_more_list_show');
	});
});
=======
(function (doc, win) {
     var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc    = function () {
                 var clientWidth = docEl.clientWidth;
                 if (clientWidth>=640) {
                    clientWidth = 640;
                 };
                 if (!clientWidth) return;
               docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
          };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
>>>>>>> 1884df2cb93ce05f0cb7de1e85d5b046a2c64e31
