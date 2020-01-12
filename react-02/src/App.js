import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './TicTacToe';
import { Square,Board,  Game} from './components/Game';
import {AccountPage} from './components/AccountReact/CreateAccount';
import {CityPage} from './components/ReactCity/CreateCity';
import {List} from './components/LinkedList/listPresentation';
import {Theme} from './components/Context/contextSelector';
import {ThemeProvider,ThemeContext} from './components/Context/context'
import {QueueStack} from './components/QueueStack/StackQueueMain'

// import { City, Community } from './components/ReactCity/CommunityPOJO';
// import { postData } from './components/ReactCity/apiSetup'
// import { fetchToServer } from './components/ReactCity/fetchCity'

//import { BarChart } from './BarChart'

// const url = 'http://localhost:5000/';

class App extends Component {
  	constructor() {
		super();
		this.state={
		whichHomePage: 0,
		}
		// this.newCommunity = new Community();
	 }
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
						<h2 className="h22"><span className="spanshadow">Welcome to React</span></h2>
						<div className="marquee"><p></p></div>
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p className="App-intro">
							To get started, edit <code>src/App.js</code> and save to reload.
						</p>
					</div>
				</div>	
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
		if (this.state.whichHomePage === 4){
			return (
				<div> 	
					<List />
				</div>
			)
		}
		if (this.state.whichHomePage === 5){
			return (
				<div> 	
					<QueueStack />
				</div>
			)
		}
		if (this.state.whichHomePage === 6){
			return (
				<div> 	
					<Theme />
				</div>
			)
		}
	}
	
	render() {
	
		let array = ["home", "tictactoe", "bank", "city", "list", "fifo-lifo", "theme setting"];
        let images = array.map((image,i) => {
		   return <img key={image} tabIndex={i} id={i} src={require(`./images/${image}.svg`)} title={image.toUpperCase()} alt={image.toUpperCase()} className={`App-logo modify i${image}`} onClick={(e) => {
			this.imageclicked(e.target.tabIndex)
			this.changeColor(e.target.tabIndex)
			}}/>
		});
        return (
			<ThemeProvider>
			<div className="bigWndow" style={{marginBottom:"250px"}}>
            <div className="App imagesClass" id="imagesID" >	
				{ images }
				{this.displayPage()}
				
			</div>
			</div>
			</ThemeProvider>
        );
	}
}

export default App;
