<template>
	<swipe class="my-swipe">
    <swipe-item class="slide1">
			<img src="../assets/img/fl01.png" class="banner">
			<div class="pet_slider_font">
					<span class="pet_slider_emoji"> (╭￣3￣)╭♡   </span>
					<span>“大白”有望成为现实：充气机器人研究取得进展</span>
			</div>
		</swipe-item>
    <swipe-item class="slide2">
			<img src="../assets/img/fl02.png" class="banner">
			<div class="pet_slider_font">
					<span class="pet_slider_emoji"> []~(￣▽￣)~*　</span>
					<span>已然魔性的雪橇犬哈士奇 —《雪地狂奔》</span>
			</div>
		</swipe-item>
    <swipe-item class="slide3">
			<img src="../assets/img/fl03.png" class="banner">
			<div class="pet_slider_font">
					<span class="pet_slider_emoji"> (｡・`ω´･)　</span>
					<span>《星际争霸2:虚空之遗》国服过审!</span>
			</div>
		</swipe-item>
  </swipe>
	
</template>
<script scoped>
	import 'vue-swipe/dist/vue-swipe.css';
	import { Swipe, SwipeItem } from 'vue-swipe';

	export default {

		components: {
			'swipe': Swipe,
			'swipe-item': SwipeItem
		},
		mounted(){
// 			new Swipe($('.banner')[0],{
// 				auto:2000,
// 				continuous:true,
// 				stopPropation:true,
// 				callback:function(index,element){
// 					$('.banner').removeClass('active');
// 					$('.banner').eq(index).addClass('active');
// 				}
// 			})
		}
	}
</script>
<style>
	/* .am-slider-a1 .am-control-nav li { position: relative;}
	.am-slider-a1 .am-control-nav li a { background: #bcbcbc; opacity: .5;  }
	.am-slider-a1 .am-control-nav li a:hover {}
	.am-slider-a1 .am-control-nav li a.am-active { background: #bcbcbc;-webkit-box-shadow:none;box-shadow:none;  opacity: 1;}
	.am-slider-a1 .am-control-nav {bottom: 18px; z-index: 2;} */
	.pet_slider_shadow { position: absolute;  background: url(../assets/img/flshadow.png) bottom no-repeat; -webkit-background-size: 100%;
	background-size: 100%; width: 100%; height: 100%; bottom: 0; left: 0; z-index: 1;}
	.pet_slider_font {position: absolute; bottom: 35px; left: 20px; z-index: 8; color: #fff;}
	.pet_slider_emoji { display: block; font-size: 12px; }
	.banner{height:100%;width:100%;}
	@font-face {font-family: "iconfont";
	  src: url('../assets/fonts/iconfont.eot');
	  src: url('../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
	  url('../assets/fonts/iconfont.woff') format('woff'),
	  url('../assets/fonts/iconfont.ttf') format('truetype'),
	  url('../assets/fonts/iconfont.svg#iconfont') format('svg');
	}
	.iconfont {
	  font-family:"iconfont" !important;
	  font-size:16px;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -webkit-text-stroke-width: 0.2px;
	  -moz-osx-font-smoothing: grayscale;
	}
	    @keyframes more_list {
	      from {
	        left: 0;
	        bottom: -900px;
	      }
	      to {
	        left: 0;
	        bottom: 0;
	      }
	    }
	
	    @-webkit-keyframes more_list {
	      from {
	        left: 0;
	        bottom: -900px;
	      }
	      to {
	        left:0;
	        bottom: 0;
	      }
	    }
	
	.my-swipe {
	  height: 200px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
		position: relative;
	}
	 
	.slide1 {
	  background-color: #0089dc;
	  color: #fff;
	}
	 
	.slide2 {
	  background-color: #ffd705;
	  color: #000;
	}
	 
	.slide3 {
	  background-color: #ff2d4b;
	  color: #fff;
	}
	.pet_slider_shadow { position: absolute;  background: url(../assets/img/flshadow.png) bottom no-repeat; -webkit-background-size: 100%;background-size: 100%; width: 100%; height:100%; bottom: 0; left: 0; z-index: 1;}
	.pet_slider_font {position: absolute; bottom: 35px; left: 20px; z-index: 8; color: #fff;}
	.pet_slider_emoji { display: block; font-size: 12px; }
	
</style>
