import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {ImageComponent} from './components/ImageComponent';
import react from './images/react.svg';
import tictactoe from './images/tictactoe.svg';
import bank from './images/bank.svg';
import city from './images/city.svg'
import TicTacToe from './TicTacToe';
import link from './images/link.svg';
import { Square,Board,  Game} from './components/Game';
import {AccountPage} from './components/AccountReact/CreateAccount';
import {CityPage} from './components/ReactCity/CreateCity';
import { City, Community } from './components/ReactCity/CommunityPOJO';
import { postData } from './components/ReactCity/apiSetup'
import { fetchToServer } from './components/ReactCity/fetchCity'

//import { BarChart } from './BarChart'

const url = 'http://localhost:5000/';

class App extends Component {
  	constructor() {
		super();
		this.state={
		//myCurrentIcon: 0,
		whichHomePage: 0,
		//controller: new AccountController()
		}
		this.newCommunity = new Community();
	 }
	// loadData = async() => {
	// 	await fetchToServer.loadData(this.newCommunity);
	// }
	// componentDidMount() {
	// 	this.loadData();
	// 	console.log(this.newCommunity.CityList);
	//  }  
	imageclicked(imageIndex) {
		let image =  document.getElementById(this.state.whichHomePage);
		image.style.filter="grayscale(100%)";
		image.style.filter="drop-shadow(0px 0px 0px none)";
		this.setState({
			whichHomePage: imageIndex
		});	
	}

	changeColor(whichImage)
	{
		let image =  document.getElementById(whichImage);
		image.style.filter="grayscale(0%)";
		image.style.filter="drop-shadow(5px 5px 5px yellow)";
	}
	displayPage () {
		
		if (this.state.whichHomePage === 0){
			return (
				<div className="App"> 
					{/* <div className="App-header">
						<img src={logo} className="App-logo" alt="logo" /> */}
						{/* <div className="App" > */}
						<h2 className="h22"><span className="spanshadow">Welcome to React</span></h2>
						<div className="marquee"><p></p></div>
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p className="App-intro">
							To get started, edit <code>src/App.js</code> and save to reload.
						</p>
					</div>
				</div>


				// <div className="App"> 
				// 	<div className="App-header">
				// 		<img src={logo} className="App-logo" alt="logo" />
				// 		<h2>Welcome to React</h2>
				// 	</div>
				// 	<p className="App-intro">
				// 		To get started, edit <code>src/App.js</code> and save to reload.
				// 	</p>	
				// </div>
				
			);
		}
		if (this.state.whichHomePage === 1){
			return (
				
				<div className="App" > 
					<TicTacToe />
					<Game />
				</div>
				
			)
		}
		if (this.state.whichHomePage === 2){
			return (
				<div> 
					<AccountPage />
				</div>
			)
		}
		if (this.state.whichHomePage === 3){
			
			return (
				<div> 
					
					<CityPage />
				</div>
			)
		}
	}
	
	render() {
	
		let array = ["react", "tictactoe", "bank", "city", "link"];
        let images = array.map((image,i) => {
		   return <img key={image} tabIndex={i} id={i} src={require(`./images/${image}.svg`)} alt="" className={`App-logo modify i${image}`} onClick={(e) => {
			this.imageclicked(e.target.tabIndex)
			this.changeColor(e.target.tabIndex)
			}}/>
		});
        return (
			<div className="bigWndow" style={{marginBottom:"250px"}}>
            <div className="App imagesClass" id="imagesID" >	
				{ images }
				{this.displayPage()}
			</div>
			</div>
        );
	}
}

export default App;
