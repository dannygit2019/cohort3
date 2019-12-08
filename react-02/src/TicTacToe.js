import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {ImageComponent} from './components/ImageComponent';
import App from './App';
import tictactoe from './images/tictactoe.svg'
import './App.css';

class TicTacToe extends Component {

	render() {
		return (
			// <div className="App AppTTT"> 
			<div className="App"> 
				{/* <div className="App-header headerTTT">
					<img src={tictactoe} className="App-logo" alt="logo"/> */}
					
					<h2 className="h22"><span className="spanshadow">Welcome to TicTacToe Game. Enjoy!</span></h2>
				{/* </div> */}
			</div>
		)
	}
}

export default TicTacToe;
