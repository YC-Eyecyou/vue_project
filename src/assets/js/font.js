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
