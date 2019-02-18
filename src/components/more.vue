<template>
	<div class="pet_more_list">
		<div class="pet_more_list_block">
			<div class="iconfont pet_more_close">×</div>
			<div class="pet_more_list_block">
				<div class="pet_more_list_block_name">
					<div class="pet_more_list_block_name_title">阅读 Read</div>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_xinxianshi pet_more_list_block_line_ico">&#xe61e;</i>
						<div class="pet_more_list_block_line_font">新鲜事</div>
					</a>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_zhangzhishi pet_more_list_block_line_ico">&#xe607;</i>
						<div class="pet_more_list_block_line_font">趣闻</div>
					</a>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_kantuya pet_more_list_block_line_ico">&#xe62c;</i>
						<div class="pet_more_list_block_line_font">阅读</div>
					</a>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_mengzhuanti pet_more_list_block_line_ico">&#xe622;</i>
						<div class="pet_more_list_block_line_font">专题</div>
					</a>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_bk pet_more_list_block_line_ico">&#xe629;</i>
						<div class="pet_more_list_block_line_font">订阅</div>
					</a>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_wd pet_more_list_block_line_ico">&#xe602;</i>
						<div class="pet_more_list_block_line_font">专栏</div>
					</a>
					<div class="pet_more_list_block_name_title pet_more_list_block_line_height">服务 Service</div>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_xinxianshi pet_more_list_block_line_ico">&#xe61e;</i>
						<div class="pet_more_list_block_line_font">新鲜事</div>
					</a>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_zhangzhishi pet_more_list_block_line_ico">&#xe607;</i>
						<div class="pet_more_list_block_line_font">趣闻</div>
					</a>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_kantuya pet_more_list_block_line_ico">&#xe62c;</i>
						<div class="pet_more_list_block_line_font">阅读</div>
					</a>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_mengzhuanti pet_more_list_block_line_ico">&#xe622;</i>
						<div class="pet_more_list_block_line_font">专题</div>
					</a>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_bk pet_more_list_block_line_ico">&#xe629;</i>
						<div class="pet_more_list_block_line_font">订阅</div>
					</a>
					<a class="pet_more_list_block_line">
						<i class="iconfont pet_nav_wd pet_more_list_block_line_ico">&#xe602;</i>
						<div class="pet_more_list_block_line_font">专栏</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			show(){
				this.$router.show();
			}
		}
	}
</script>
<style>
	.pet_more_list { width: 100%; left: 0; height: 80%;background:rgba(48,52,53,.9);   position: fixed; bottom: -9900px; z-index: 9999;-webkit-transition: all .5s;
	      transition: all 0.5s;}
	.pet_more_list_block {max-width: 640px; margin: 0 auto; color: #fff; }
	.pet_more_close { text-align: right; height: 35px; width: 100%; line-height: 45px; padding-right: 15px;font-size: 30px;color: #cbc8d9; }
	.pet_more_list_show {bottom: 0;left: 0;animation: more_list 0.5s;-webkit-animation: more_list 0.5s;}
	.pet_more_list_block { width: 98%; margin: 0 auto; text-align: center;}
	.pet_more_list_block_name_title { color: #918f90; font-size: 15px; padding-bottom: 10px; clear: both; }
	.pet_more_list_block_name_ico { font-size: 18px;}
	.pet_more_list_block_line { cursor: pointer; color: #fff; height: 30px; line-height: 30px; width: 90px; margin: 5px;margin-left: 0px; display: inline-block; background: #303435; border-radius: 5px;}
	.pet_more_list_block_line:hover { color: #fff;}
	.pet_more_list_block_line_height { padding-top: 10px;}
	.pet_more_list_block_line_ico { margin: 5px 0 0 5px; display: block; float: left; width: 20px; height: 20px; margin-right: 5px; line-height: 20px; border-radius: 50%; color: #fff; font-size: 14px; text-align: center; }
	.pet_more_list_block_line_font {display: block; float: left; height: 25px; line-height: 22px; padding-left: 8px;padding-top: 4px; font-size: 14px; }
	.pet_list_tytj_ico { margin: 0; margin-top: 2px; margin-right: 5px;}
</style>
