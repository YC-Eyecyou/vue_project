<template>
	<div class="pet_head">
		<header data-am-widget="header" class="am-header am-header-default pet_head_block">
			<div class="am-header-left am-header-nav " @click="goback">
				<a href="#left-link" class="iconfont pet_head_jt_ico">&#xe601;</a>
			</div>
			<div class="am-header-right am-header-nav" @click="show">
				<a href="javascript:;" class="iconfont pet_head_gd_ico">&#xe600;</a>
			</div>
		</header>
	</div>
</template>
<script>
	export default{
		methods:{
			goback(){
				this.$router.go(-1);
			},
			show(){
				this.$router.show();
			}
		}
	}
</script>
<style>
	.pet_head {position: fixed; height: 49px; width: 100%; left: 0; right: 0; z-index: 999; }
	.pet_head_block {background: #303435; max-width: 640px; margin: 0 auto; line-height: 53px; }
	.pet_head_jt_ico { font-size: 25px; border-right: 1px solid #4c4a4b;  }
	.pet_head_gd_ico { font-size: 27px; }
	.pet_head_block .am-header-nav>a {color: #918f90; height: 30px; line-height: 30px; min-width: 48px;}
</style>
