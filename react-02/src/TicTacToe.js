import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {ImageComponent} from './components/ImageComponent';
import App from './App';
import money from './components/money.svg'

class TicTacToe extends React.Component {

	render() {
		return (
			<div className="App AppTTT"> 
				<div className="App-header headerTTT">
					<img src={money} className="App-logo" alt="logo"/>
					<h2>Welcome to TicTacToe Game. Enjoy the game!!!</h2>
					
				</div>
			</div>
		)
	}
}

export default TicTacToe;
