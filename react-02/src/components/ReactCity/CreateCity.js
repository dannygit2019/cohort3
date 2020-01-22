import React, { Component } from 'react';
import './CityIndex.css';
import city from './images/city.jpg';
import newmap from './images/newmap.jpg';
import { City, Community } from './CommunityPOJO';
import { AddCityCard } from './CityCards';

import { postData } from './apiSetup.js'
import { fetchToServer } from './fetchCity.js'

import { BarChart } from './CitySummary'

const url = 'http://localhost:5000/';

class CityPage extends Component {
	constructor(props) {
		super(props);
		this.cardDisplayStyle = { backgroundImage: "url(" + newmap + ")", height: "235px", width: "375px" }
		this.newCommunity = new Community();
		this.uniqueKey = this.newCommunity.getLastKey();
		
		this.state = {
			citySummary: "",
			listForChart: [],
			hideThreeDiv: false,
			hideChart: true,
			keyCard: 0,
			cityName: "",
			latitude: "",
			longitude: "",
			population: 0,
			error: "",
			titleCreated: "City Details",
		}
	}

	componentDidMount = async () => {
		let data = await postData(url + 'all');
		if (data.length > 0) {
			//alert("Data found on the server and will be loaded.");
			await fetchToServer.loadData(this.newCommunity);
			this.uniqueKey = this.newCommunity.CityList[this.newCommunity.CityList.length - 1].key;
			this.setState({
				keyCard: this.uniqueKey + 1,
			});
		}// else {
			//alert("Sorry we currently don't have data on the server!");
		//}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
			error: "",
		})
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		let existList = false;
	
		if (this.newCommunity.CityList.length > 0) { existList = true };
		switch (event.target.name) {
			case "btnCreate":
				let checkLat=false;
				let checkLong=false;
				let duplicateCity = false;
				if (this.state.latitude < -90 || this.state.latitude > 90) {
					checkLat=true;
					// this.setState({
					// 	error: "Invalid number. Latitude is between -90 and 90!",
					// 	latitude: ""
					// })
					// return;
				}
				if (this.state.longitude < -180 || this.state.longitude > 180) {
					checkLong=true;
					// this.setState({
					// 	error: "Invalid number. Longitude is between -180 and 180!",
					// 	longitude: ""
					// })
					// return;
				}
				if (checkLat === true && checkLong===true) {
					this.setState({
						error: "Invalid Lat/Long. LAT: (Min.: -90 and Max.: 90). LONG: (Min.: -180 and Max.: 180).",
						longitude: "",
						latitude: ""
					})
					return;
				}
				if (checkLat === true || checkLong===true) {
					if (checkLat===true) {
						this.setState({
							error: "Invalid Lat. Min.: -90 and Max.: 90",
							latitude: ""
						})
						return;
					} else {
						this.setState({
							error: "Invalid Long. Min.: -180 and Max.: 180.",
							longitude: ""
						})
						return;
					}
				}

				if (this.newCommunity.CityList.length > 0) {
					let findLat = this.newCommunity.CityList.filter((lat) => {
						return Number(lat.Latitude) === Number(this.state.latitude);
					})
					let findLong = this.newCommunity.CityList.filter((longi) => {
						return Number(longi.Longitude) === Number(this.state.longitude);
					})
					console.log(findLat.length, findLong.length)
					// if (findLat.length === 1 && findLong.length === 1) { duplicateCity = true }
					// else { duplicateCity = false }
					if (findLat.length > 0 && findLong.length > 0) { duplicateCity = true }
					else { duplicateCity = false }
				// the code below is original before making changes
					// let findCity = this.newCommunity.CityList.filter((city) => {
					// 	return city.Name === (this.state.cityName).toUpperCase()
					// })
					// if (findCity.length === 1) { duplicateCity = true }
					// else { duplicateCity = false }
				// end of original code
				}
				if (duplicateCity === true) {
					this.setState({
						error: "Latitude and Longitude already existed. Please try again!",
						latitude: ""
					})
				} else {

					if (this.state.cityName !== "" && this.state.latitude !== "" && this.state.longitude !== "") {
						let city = { key: this.state.keyCard, Name: (this.state.cityName).toUpperCase(), Latitude: Number(this.state.latitude), Longitude: Number(this.state.longitude), Population: Number(this.state.population) };
						this.newCommunity.createCity(this.state.keyCard, (this.state.cityName).toUpperCase(), Number(this.state.latitude), Number(this.state.longitude), Number(this.state.population));
						fetchToServer.addCity(city);
						this.setState({
							population: 0,
							cityName: "",
							latitude: "",
							longitude: "",
							error: "New City has been created.",
							keyCard: this.state.keyCard + 1,
						})
					} else {
						this.setState({
							error: "Fields with (*) are Mandatory. Please enter!"
						});
					}
					//}
				}
				break;

			case "btnClear":
				
				this.setState({
					population: 0,
					cityName: "",
					latitude: "",
					longitude: "",
					error: "",
				})
				break;
			case "btnTotal":
				let tempTotalError = "";
				if (existList === true) {
					let totalAll = this.newCommunity.getTotalPop(this.newCommunity.CityList);
					tempTotalError = `Total Population of All Cities is: ${totalAll}`;
				} else {
					tempTotalError = "Sorry. No Cities found in our system.";
				}
				this.setState({
					citySummary: tempTotalError
				});
				break;
			case "btnNorthern":

				let mostMessage = "";
				let mostNorth;
				if (existList === true) {
					mostNorth = this.newCommunity.getMostNorthern();
					//console.log("north", mostNorth);
					this.newCommunity.CityList = this.newCommunity.CityList.sort((a, b) => { return a.key - b.key });
					mostMessage = `The Most Northern City is: ${mostNorth.Name} - Lat: ${mostNorth.Population}`;
				} else {
					mostMessage = "Sorry. No Cities found in our system.";
				}
				this.setState({
					citySummary: mostMessage
				});
				break;
			case "btnSouthern":
				let mostSouthMessage = "";
				let mostSouth;
				if (existList === true) {
					mostSouth = this.newCommunity.getMostSouthern();
					console.log("south ", mostSouth);
					// line below is to make sure cities listed in order as appeared on server
					this.newCommunity.CityList = this.newCommunity.CityList.sort((a, b) => { return a.key - b.key });
					mostSouthMessage = `The Most Southern City is: ${mostSouth.Name} - Lat: ${mostSouth.Population}`;
				} else {
					mostSouthMessage = "Sorry. No Cities found in our system.";
				}
				this.setState({
					citySummary: mostSouthMessage
				});
				break;
			case "btnChart":
				if (existList === true) {
					this.setState({
						listForChart: Object.assign([], this.newCommunity.CityList),
						hideChart: false,
						hideThreeDiv: true
					});
				} else {
					this.setState({
						citySummary: "Sorry. No Cities found in our system."
					});
				}
				break;
		}
	}

	deleteCities = (key) => {
		const toConfirm = confirm("Would you like to delete this City?");
		if (toConfirm) {
			this.newCommunity.deleteCity(key);
			fetchToServer.deleteCity(key)
			if (this.newCommunity.CityList.length < 1) {
				this.setState({
					keyCard: this.state.keyCard + 1,
				});
			}
		} //else {
			//alert("Deleting the account has been CANCELED.");
		//}
	}

	removeErrorMessage = () => {
		this.setState({
			error: "",
		})
	}

	removeMessage = () => {
		this.setState({
			citySummary: "",
		})
	}
	exitChart = () => {
		this.setState({
			hideChart: true,
			hideThreeDiv: false
		})
	}
	
	render() {

		let cards = this.newCommunity.CityList.map((card, i) => {
			return <AddCityCard cityKey={card.key} removeMessage={this.removeMessage} com={this.newCommunity} cityList={this.newCommunity.CityList} deleteCities={this.deleteCities} index={i} key={card.key} />
		});
		return (
			<div className="bigWindow">
				<div className="App" >
					<h2 className="h22"><span className="spanshadow">Welcome to City Management</span></h2>
					<div className="marquee"><p>Developed By Danny Tran - Learner @ <span style={{ color: "yellow" }}>EvolveU - GREAT TEAM!</span></p></div>
				</div>

				<div hidden={this.state.hideChart}><BarChart toHide={this.exitChart} array={this.state.listForChart} /></div>
				<div hidden={this.state.hideThreeDiv} style={{ width: "98%", marginLeft: "", marginRight: "", backgroundColor: "", height: '235px' }}>
					<div className="leftSide lcover lcoverCity" id="lside">
						
						<div className="leftdisplayarea" id="displayarea" onClick={this.removeErrorMessage}>
						<div className="summaryBoard">Summary Board</div>
							<div className="buttonsContainer">
								<button name="btnTotal" className="btnleft" onClick={this.handleSubmit}>Total Population</button>
								<button name="btnNorthern" className="btnleft" onClick={this.handleSubmit}>Most Northern Hemis.</button>
								<button name="btnSouthern" className="btnleft" onClick={this.handleSubmit}>Most Southern Hemis.</button>
							</div>
							
							<p className="pLeft" id="leftmessage">{this.state.citySummary}</p><br></br><br></br>

							<input type="submit" value="View Chart" name="btnChart" className="btnleft1" onClick={this.handleSubmit} />
						</div>
					</div>
					<div className="leftSide midside1" id="midside" >
						<div onClick={this.removeMessage} className="leftdisplayarea midcreate" id="displayarea1" style={{ backgroundImage: "url(" + city + ")", height: "235px", width: "390px" }}>
							<h3>&lt;&lt; Create a New City &gt;&gt;</h3>
							<label className="lblCity">
								Enter City Name *:
								</label>
							<input type="text" autoFocus id="city" className="city" name="cityName" value={this.state.cityName} onChange={this.handleChange} />
							<br></br>
							<label className="lblCity">
								Enter Latitude *:
								</label>
							<input type="number" className="city" name="latitude" value={this.state.latitude} onChange={this.handleChange} />
							<br></br>
							<label className="lblCity">
								Enter Longitude *:
								</label>
							<input type="number" className="city" name="longitude" value={this.state.longitude} onChange={this.handleChange} />
							<br></br>
							<label className="lblCity">
								Enter City Population:
								</label>
							<input type="number" className="city" name="population" value={this.state.population} onChange={this.handleChange} />
							<br></br>
							<p className="forCreateAccount1">{this.state.error}</p>
							<br></br>
							<input type="submit" value="Clear" name="btnClear" className="btnCity" onClick={this.handleSubmit} />
							<input type="submit" value="Create" name="btnCreate" className="btnCity" onClick={this.handleSubmit} />
						</div>
					</div>
					<div className="leftSide rightside" id="rightside" style={this.cardDisplayStyle} onClick={this.removeErrorMessage} >
						{/* <h4 className="titleCreated" style={{ color: "yellow" }}>{this.state.titleCreated}</h4>
							{cards} */}
					</div>
				</div>
				<div className="cardDisplay" hidden={this.state.hideThreeDiv} onClick={this.removeErrorMessage} >
					<h4 className="titleCreated" style={{ color: "yellow" }}>{this.state.titleCreated}</h4>
					{cards}
				</div>
			</div>

		);
	}
}

export { CityPage };