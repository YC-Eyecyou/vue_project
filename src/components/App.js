import React,{Component} from 'react'
import Header from "../common/Header/Header";
import Home from "./Home/Home";

class App extends Component{
	render(){
		return(
			<div className="App">
				<Header/>
				<Home/>
			</div>
		)
	}
}
export default App;