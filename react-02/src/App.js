import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {ImageComponent} from './components/ImageComponent';
import react from './components/react.svg';
import money from './components/money.svg';
import bank from './components/bank.svg';
import city from './components/city.svg'
import TicTacToe from './TicTacToe';
import { Square,Board,  Game} from './Game';
import { tsExternalModuleReference } from '@babel/types';



class App extends Component {
  	constructor() {
		super();
		this.state={
		myCurrentIcon: 0,
		myBackColor: ""
		}
  	}
	imageclicked(imageIndex) {
		console.log(imageIndex);
		this.setState({
			myCurrentIcon: imageIndex,
			bgColor: "red"
		});	
		  return this.state.myCurrentIcon;
	}
	displayIcons () {
		let array = ["react", "money", "bank", "city"];
        let images = array.map((image,i) => {
           return <img key={image} tabIndex={i} src={require(`./components/${image}.svg`)} alt="" className={`App-logo modify i${image}`} onClick={(e) => this.imageclicked(e.target.tabIndex)}/>
        });
        return (
            <div className="imagesClass" id="imagesID">
				{ images }
			</div>
        );
	}
	render() {
		
		if (this.state.myCurrentIcon===0 || this.state.myCurrentIcon===2 || this.state.myCurrentIcon===3) {
			return (

				<div className="App"> 
					<div>
						{this.displayIcons()}
					</div>
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
		if (this.state.myCurrentIcon === 1) {
			
			return (
				
				<div className="App" id="t"> 
					<div>	
						{this.displayIcons() }
					</div>
					
					<TicTacToe />
					<div id="test">
						<Game />
					</div>
					
						
				</div>
			)
		}
	}
}

export default App;
