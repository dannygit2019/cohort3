import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {ImageComponent} from './components/ImageComponent';
import react from './images/react.svg';
import tictactoe from './images/tictactoe.svg';
import bank from './images/bank.svg';
import city from './images/city.svg'
import TicTacToe from './TicTacToe';
import { Square,Board,  Game} from './components/Game';
import {AccountPage} from './components/AccountReact/CreateAccount';



class App extends Component {
  	constructor() {
		super();
		this.state={
		//myCurrentIcon: 0,
		whichHomePage: 0,
		//controller: new AccountController()
		}

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
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h2>Welcome to React</h2>
					</div>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>	
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
				<div className="App"> 
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h2>Welcome to React</h2>
					</div>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>	
				</div>
			)
		}
	}
	
	render() {
		let array = ["react", "tictactoe", "bank", "city"];
        let images = array.map((image,i) => {
		   return <img key={image} tabIndex={i} id={i} src={require(`./images/${image}.svg`)} alt="" className={`App-logo modify i${image}`} onClick={(e) => {
			this.imageclicked(e.target.tabIndex)
			this.changeColor(e.target.tabIndex)}}/>
		});
        return (
			<div className="bigWndow">
            <div className="App imagesClass" id="imagesID" >	
				{ images }
				{this.displayPage()}
			</div>
			</div>
        );
	}
}

export default App;
