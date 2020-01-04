import React, { Component } from 'react';
import './CityIndex.css';
import city from './images/city.jpg';
import { Community } from './CommunityPOJO';
import { postData } from './apiSetup.js'
import { fetchToServer } from './fetchCity.js'

const url = 'http://localhost:5000/';

class AddCityCard extends Component {
	constructor(props) {
		super(props);
		this.errorStr="Error Message: ";
		this.bgColor = "";
		this.state = {
			popUpdate: "",
			selectedCardColor: "",
			message: ""
		}
	}
	handleLostFocus = () => {
		this.setState({
			selectedCardColor: "",
			message: ""
		})
	}
	handleGotFocus = () => {
		this.setState({
			[event.target.name]: event.target.value,
			message: "",
			selectedCardColor: "yellow"
		})
	}
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
			message: "",
		})
	}
	handleMoveOut = (index) => {
		let moveOutMessage = "";
		if (this.state.popUpdate === "") {
			moveOutMessage = "It can't be empty. Please enter a number.";
		} else {
			if (this.state.popUpdate < 0) {
				moveOutMessage = `It can not be negative (${this.state.popUpdate}). Please try again.`;
			} else {
				if (this.state.popUpdate > this.props.cityList[index].Population) {
					moveOutMessage = `Updating failed due to Current Population ${this.props.cityList[index].Population}. Please try again.`;
				} else {
					this.props.cityList[index].moveOut(Number(this.state.popUpdate));
					fetchToServer.updatePop(this.props.cityList[index]);
					moveOutMessage = `You successfully decreased ${this.state.popUpdate} person(s) from the city`;
				}
			}
		}
		this.setState({
			popUpdate:"",
			message: this.errorStr + moveOutMessage
		})
	}

	handleMoveIn = (index) => {
		let moveInMessage = "";
		if (this.state.popUpdate === "") {
			moveInMessage = "It can't be empty. Please enter a number.";
		} else {
			if (this.state.popUpdate < 0) {
				moveInMessage = `It can not be negative (${this.state.popUpdate}). Please try again.`;
			} else {
				this.props.cityList[index].moveIn(Number(this.state.popUpdate));
				fetchToServer.updatePop(this.props.cityList[index]);
				moveInMessage = `You successfully added ${this.state.popUpdate} person(s) to the city .`;
			}
		}
		this.setState({
			popUpdate: "",
			message: this.errorStr + moveInMessage,
		})
	}
	handleHowBig = (index) => {
		let howBigMessage = this.props.cityList[index].howBig();
		this.setState({
			message: howBigMessage,
		})
	}
	handleSphere = (index) => {
		let sphereMessage = this.props.com.whichSphere(this.props.cityList[index]);
		this.setState({
			message: sphereMessage,
		})
	}
	render() {
		if ((this.props.index % 2 === 0)) {
			this.bgColor = "grey";
		} else {
			this.bgColor = "teal"
		};
		return (
			<div onFocus={this.handleGotFocus} onBlur={this.handleLostFocus} className="rightshow" style={{ backgroundColor: this.bgColor }} onClick={this.props.removeMessage}>
				<p className="pdisplay1" id="displayDetail" style={{ backgroundColor: this.state.selectedCardColor }}>{this.props.cityList[this.props.index].show()}
				<span className="errorDisplay" >{this.state.message}</span>
				</p>
				<br></br>	
				<label className="lblmoving1">
					Update Population:
						<input type="number" className="rightPop" name="popUpdate" value={this.state.popUpdate} onChange={this.handleChange} />
				</label>
				{/* <span className="errorDisplay" >{this.state.message}</span> */}
				<button style={{ backgroundColor: this.bgColor }} name="btnDelete" className="btnright1" onClick={() => { this.props.deleteCities(this.props.cityKey) }}>Delete</button>
				<button style={{ backgroundColor: this.bgColor }} name="btnMoveOut" className="btnright1" onClick={() => { this.handleMoveOut(this.props.index) }}>Move Out</button>
				<button style={{ backgroundColor: this.bgColor }} name="btnMoveIn" className="btnright1" onClick={() => { this.handleMoveIn(this.props.index) }}>Move In</button>
				<button style={{ backgroundColor: this.bgColor }} name="btnHowBig" className="btnright1" onClick={() => { this.handleHowBig(this.props.index) }}>How Big</button>
				<button style={{ backgroundColor: this.bgColor }} name="btnSphere" className="btnright1" onClick={() => { this.handleSphere(this.props.index) }}>Hemisphere</button>
			</div>
		)
	}
}

export { AddCityCard };