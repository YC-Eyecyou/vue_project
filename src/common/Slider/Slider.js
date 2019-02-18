import React from 'react';
import './Slider.css';

const Slider = (props) => (
	<div data-am-widget="slider" className="am-slider am-slider-a1" data-am-slider='{"directionNav":false}' >
	  <ul className="am-slides">
	      <li>
	            <img src="../../assets/img/fl01.png"/>
	            <div className="pet_slider_font">
	                <span className="pet_slider_emoji"> (╭￣3￣)╭♡   </span>
	                <span>“大白”有望成为现实：充气机器人研究取得进展</span>
	            </div>
	            <div className="pet_slider_shadow"></div>
	      </li>
	      <li>
	            <img src="../../assets/img/fl02.png"/>
	            <div className="pet_slider_font">
	                <span className="pet_slider_emoji"> []~(￣▽￣)~*　</span>
	                <span>已然魔性的雪橇犬哈士奇 —《雪地狂奔》</span>
	            </div>
	            <div className="pet_slider_shadow"></div>
	      </li>
	      <li>
	            <img src="../../assets/img/fl03.png"/>
	            <div className="pet_slider_font">
	                <span className="pet_slider_emoji"> (｡・`ω´･)　</span>
	                <span>《星际争霸2:虚空之遗》国服过审!</span>
	            </div>
	            <div className="pet_slider_shadow"></div>
	      </li>
	  </ul>
	</div>
);

export default Slider;