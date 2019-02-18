<template>
	<div class="pet_circle_nav">
	    <ul class="pet_circle_nav_list">
			<router-link to="./home" tag="li" active-class="active"><a href="javascript:;" class="iconfont pet_nav_xinxianshi ">&#xe61e;</a><span>首页</span></router-link>
			<router-link to="./list" tag="li" active-class="active"><a href="javascript:;" class="iconfont pet_nav_zhangzhishi ">&#xe607;</a><span>趣闻</span></router-link>
			<router-link to="./list" tag="li" active-class="active"><a href="javascript:;" class="iconfont pet_nav_kantuya ">&#xe62c;</a><span>阅读</span></router-link>
			<router-link to="./list" tag="li" active-class="active"><a href="javascript:;" class="iconfont pet_nav_mengzhuanti ">&#xe622;</a><span>专题</span></router-link>
			<router-link to="./list" tag="li" active-class="active"><a href="javascript:;" class="iconfont pet_nav_meirong ">&#xe629;</a><span>订阅</span></router-link>
			<router-link to="./list" tag="li" active-class="active"><a href="javascript:;" class="iconfont pet_nav_yiyuan ">&#xe602;</a><span>专栏</span></router-link>
			<router-link to="./list" tag="li" active-class="active"><a href="javascript:;" class="iconfont pet_nav_dianpu ">&#xe604;</a><span>讨论</span></router-link>
			<router-link to="./list" tag="li" active-class="active"><a href="javascript:;" class="iconfont pet_nav_gengduo ">&#xe600;</a><span>更多</span></router-link>	        
	    </ul>
	    <v-more></v-more>
	</div>
</template>

<script>
	import More from './more';
	
	export default {
		components:{
			"v-more":More
		},
// 		mounted(){
// 			console.log('$',$);
// 		}
	}
</script>

<style>
	.pet_circle_nav {padding:25px 10px 5px;max-width: 100%;  }
	.pet_circle_nav_list{ max-width: 100%; overflow: hidden;}
	.pet_circle_nav_list li { width: 25%; float: left; margin-bottom: 15px;}
	.pet_circle_nav_list a {border-radius: 50%; width: 55px; height: 55px; display: block; margin: 0 auto; color: #fff; text-align: center; line-height: 55px; font-size: 35px;-webkit-transition: all 0.2s ease;transition: all 0.2s ease;}
	.pet_circle_nav_list a:hover { -webkit-box-shadow: inset 0 0 40px rgba(0,0,0,.3); box-shadow: inset 0 0 40px rgba(0,0,0,.3);-webkit-transition: all 0.2s ease;transition: all 0.2s ease; }
	.pet_circle_nav_list span { display: block; width: 100%; text-align: center; padding-top: 5px; font-size: 14px;}
	.pet_nav_xinxianshi { background: #fe9700; }
	.pet_nav_zhangzhishi {background: #f26765; }
	.pet_nav_kantuya {background: #6f68df; }
	.pet_nav_mengzhuanti {background: #7f2d00;}
	.pet_nav_meirong {background: #fd7a49;}
	.pet_nav_gengduo { background: #7fd02b;}
	.pet_nav_yiyuan {background: #19cf8a; }
	.pet_nav_dianpu {background: #4493f7;}
	.pet_nav_bk {background: #6f67e0; }
	.pet_nav_wd {background: #fd7949; }
	.pet_nav_sy {background: #ff9702; }
	.pet_nav_xx {background: #00c2ea; }
	.pet_nav_sz {background: #3296ee; }
	.pet_nav_ms {background: #7fd02b; }
	.pet_nav_qs {background: #19ce8b; }
	.pet_nav_qt {background: #fe618e; }
</style>