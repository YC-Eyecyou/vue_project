<template>
	<div>
		<v-banner></v-banner>
		<v-nav></v-nav>
		<v-list></v-list>
	</div>
	
</template>

<script>
	import Banner from './banner';
	import Nav from './nav';
	import List from './list';
	
	export default {
		components:{
			"v-banner":Banner,
			"v-nav":Nav,
			"v-list":List,
		},
		mounted(){
			console.log("nr",document.querySelector('.pet_list_one_nr').style.height)
			console.log("img",document.querySelector('.pet_list_one_img').offsetHeight)
		}
	}
</script>

<style>
	.pet_mian { max-width: 640px; margin: 0 auto; background: #ececec; position: relative;}
	.pet_content_main { max-width: 100%; background: #fff; padding:10px 20px; -webkit-box-shadow:  0 0 3px rgba(100,100,100,.1); box-shadow: 0 0 3px rgba(100,100,100,.1);}
	.am-list-news-default { margin-top: 0;}
	.pet_content_main .am-list>li {margin-bottom: 0; border: none; border-bottom: 1px solid #f1f1f1;}
	.am-list-news-default .am-list .am-list-item-desced .am-list-item-text { margin: 0;}
	.pet_content_main .am-list, .am-topbar { margin-bottom: 0;}
	.pet_content_main .am-list-news-default { margin: 0;}
	.pet_content_main .am-list-item-hd a  { color: #222; font-weight: bold;}
	.pet_content_main .am-list-news-default .pet_list_one_bt {margin-top: -4px; line-height: 22px;}
	.pet_content_main .am-list-news-default  .pet_list_one_nr {}
	.pet_content_main .am-list-news-default  .pet_list_one_info { width: 100%; clear: both; height: 30px; margin-bottom: 10px;}
	.pet_content_main .am-list-news-default  .pet_list_one_info_l { float: left;}
	.pet_content_main .am-list-news-default  .pet_list_one_info_ico { width: 26px; height: 26px; float: left;}
	.am-list-news-default .am-list .pet_list_one_block { padding-bottom: 20px; margin-bottom: 7px;}
	.pet_content_main .am-list-news-default  .pet_list_one_info_ico img {width: 100%;border-radius: 50%;}
	.pet_content_main .am-list-news-default  .pet_list_one_info_name { color: #757575; float: left; font-size: 12px; height: 26px; line-height: 26px; text-indent: .5em;}
	.pet_content_main .am-list-news-default  .pet_list_one_info_r { float: right;}
	.am-list-news-default .am-list .am-list-item-desced  .pet_list_two_text { margin-top: 5px; }
	.pet_list_one_info_tytj { float: left; font-size: 16px; color: #222; font-weight: bold;}
	.pet_list_one_list { padding: 8px 0;}
	.pet_list_one_list li{ padding: 0;}
	.pet_list_one_list li:nth-of-type(1) { padding-right: 6px;}
	.pet_list_one_list li:nth-of-type(2) { padding: 0 3px;}
	.pet_list_one_list li:nth-of-type(3) { padding-left: 6px;}
	.pet_list_one_list li:nth-of-type(4) { padding-right: 6px; padding-top: 6px;}
	.pet_list_one_list li:nth-of-type(5) { padding: 0 3px; padding-top: 6px;}
	.pet_list_one_list li:nth-of-type(6) { padding-left: 6px; padding-top: 6px;}
	.pet_list_tag {height: 20px; line-height: 20px;padding-right: 8px; margin: 3px 0; font-size: 12px;}
	.pet_list_tag_xxs { border-right: 3px solid #fe9700; color: #fe9700;  }
	.pet_list_tag_zzs { border-right: 3px solid #f26765; color: #f26765;  }
	.pet_list_tag_stj { border-right: 3px solid #764f9c; color: #764f9c;  }
	.pet_list_tag_kty { border-right: 3px solid #6f68df; color: #6f68df;  }
	.pet_list_tag_mzt { border-right: 3px solid #7f2d00; color: #7f2d00;  }
	.pet_content_main .am-list-news-default .pet_list_one_text { position: absolute; left: 0px; bottom: 0px;/*-webkit-line-clamp: 1;*/}
	.pet_content_main .am-list-news-default .pet_list_zt_img { width: 100%;padding: 8px 0;}
	.pet_content_main .am-list-news-default .pet_list_zt_img img { width: 100%;}
	.pet_list_one_tytj { padding: 0px}
	
	/* 外挂图形文字 */
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
</style>
