import React from 'react';
import './Header.css';

const Header = (props) => (
	<div className="pet_head">
	  <header data-am-widget="header" className="am-header am-header-default pet_head_block">
		  <div className="am-header-left am-header-nav ">
			  <a href="#left-link" className="iconfont pet_head_jt_ico">&#xe601;</a>
		  </div>
	
	      <h1 className="am-header-title pet_article_user">
	      <div className="pet_article_user_info_tab">
	        <div className="pet_article_user_info_tab_font">
	        <div className="pet_article_user_info_tab_font_triangle"></div>
	        <div className="pet_article_user_info_tab_font_center"><i>文章</i><span>16篇</span></div>
// 			<div className="pet_article_user_info_tab_font_center"><i>涂鸦</i><span>89张</span></div>
// 	        <div className="pet_article_user_info_tab_font_center_line"></div>
// 	        <div className="pet_article_user_info_tab_font_center"><a href="###">查看全部资料</a></div>
	        </div>
	      </div>
	      <span className="pet_article_user_ico"><img src="img/a1.png" alt="" className=""/></span>
	      <span className="pet_article_user_name">EGOIST</span>
	      </h1>
	
	      <div className="am-header-right am-header-nav">
	          <a href="javascript:;" className="iconfont pet_head_gd_ico">&#xe600;</a>
	      </div>
	  </header>
	</div>
);

export default Header