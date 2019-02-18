import React,{Component} from 'react'
import Slider from '../../common/Slider/Slider';
import List from '../../common/List/List';

class Home extends Component{
	render(){
		return(
			<div className="Home">
				<Slider/>
				<List/>
			</div>
		)
	}
}
export default Home;