// import { postData, City, Community } from './community.js'
// import functions from './community.js'

import { Community, City, functions } from './community.js'
import { postData } from './apiSetup.js'
import { fetchToServer } from './fetchCity.js'



const url = 'http://localhost:5000/';
let getKey;
const newCommunity = new Community();
let citySelected;
let currentCity, currentCityKey;
//let key=0;
// let backupData=[];
// let serverDown;

document.addEventListener('DOMContentLoaded', async () => {
	// alert(backupData);
	txtCityName.focus();
	await fetchToServer.loadData(newCommunity);
	let message;
	let displaykey;
	//console.log(a);
	console.log(newCommunity.CityList);
	// if (backupData.length > 0) {
	// 	console.log("in backing up");
	// 	fetchToServer.loadData(backupData);
	// }
	if (newCommunity.CityList.length < 1) {
		alert("Sorry, We currently don't have data on the server");
	}else {
		alert("Data Found. The information will be displayed");

		for (let i=0; i < newCommunity.CityList.length ; i++) {
			message=`City: ${newCommunity.CityList[i].Name}, `+ 
					`Lat.: ${newCommunity.CityList[i].Latitude}, Long.: ${newCommunity.CityList[i].Longitude}, Population: ${newCommunity.CityList[i].Population}`;
			displaykey=newCommunity.CityList[i].key;
			functions.addCard(document.getElementById("rightside"),message, displaykey);
		}
		
	}
	

});

btnCreate.addEventListener("click", async function () {
	getKey=	newCommunity.getLastKey();
	console.log(getKey);
	if (txtPopulation.value===""){
		txtPopulation.value=0;
	}
	console.log(txtPopulation.value);
	if (txtCityName.value !== "" && txtLat.value !=="" && txtLongitude.value !=="" && txtPopulation.value !=="") {
		document.getElementById("pmessage").textContent="";
		let matchName=false;
		let data = await postData(url + 'all');
		

		for (let i=0; i < newCommunity.CityList.length; i++) {
			// if (newCommunity.CityList[i].key.Name === (txtCityName.value).toUpperCase()) {
			if (newCommunity.CityList[i].Name === (txtCityName.value).toUpperCase()) {
				console.log(newCommunity.CityList[i].Name);
				matchName =true;
				document.getElementById("pmessage").textContent = "The City you entered already existed. Please try again.";
				txtCityName.focus();
				return matchName;
			}
		}
		// NO NEED let city={key: key, Name: txtCityName.value, Latitude: Number(txtLat.value), Longitude: Number(txtLongitude.value), Population: Number(txtPopulation.value)};
		if (!matchName) {
			
			//NO NEED key++;
			//NO NEED let city={key: key, Name: (txtCityName.value).toUpperCase(), Latitude: Number(txtLat.value), Longitude: Number(txtLongitude.value), Population: Number(txtPopulation.value)};
			getKey++;
			let city={key: getKey, Name: (txtCityName.value).toUpperCase(), Latitude: Number(txtLat.value), Longitude: Number(txtLongitude.value), Population: Number(txtPopulation.value)};
			console.log("not found so creating");
			// let data = await postData(url + 'all');
			//console.log(data.status); NO NEED
			data = await postData(url + 'all');
			newCommunity.createCity(getKey, (txtCityName.value).toUpperCase(), Number(txtLat.value), Number(txtLongitude.value), Number(txtPopulation.value));
			fetchToServer.addCity(city);
			
			document.getElementById("pmessage").textContent = ` The city ${(txtCityName.value).toUpperCase()} successfully created.`;
			
			const newCity = new City(getKey, (txtCityName.value).toUpperCase(), txtLat.value, txtLongitude.value, txtPopulation.value);
			//NO NEED const newCity = new City(key, (txtCityName.value).toUpperCase(), txtLat.value, txtLongitude.value, txtPopulation.value);
			let message=newCity.show();
			functions.addCard(document.getElementById("rightside"),message, getKey);

			//document.getElementById("leftmessage").innerText+="*****" + newCity.show() + '\n';
			// let option = document.createElement("option");
			// option.text=(txtCityName.value).toUpperCase();
			// citySelected.add(option);
		}
	} else {
		document.getElementById("pmessage").textContent = "All fields must be entered.";
	}

  });

  btnClear.addEventListener("click", function() {
	  txtCityName.value="";
	  txtLat.value="";
	  txtLongitude.value="";
	  txtPopulation.value="";
	  txtCityName.focus();
  });
  displayarea1.addEventListener('click', (event) => {
	leftmessage.textContent="";
  });

  rightside.addEventListener('click', async (event) => {
	leftmessage.textContent="";
	if (event.target.textContent === "How Big") { 
		currentCity = event.toElement.parentElement;
		currentCityKey = currentCity.children[0].textContent;
		citySelected= newCommunity.getCity(Number(currentCityKey));
		currentCity.children[2].textContent = (citySelected.howBig()).toUpperCase();
	}
	if (event.target.textContent === "Hemisphere") {
		currentCity = event.toElement.parentElement;
		currentCityKey = currentCity.children[0].textContent;
		citySelected= newCommunity.getCity(Number(currentCityKey));
		currentCity.children[2].textContent = newCommunity.whichSphere(citySelected);
	}
	if (event.target.textContent === "Move In") {
		currentCity = event.toElement.parentElement;
		currentCityKey = currentCity.children[0].textContent;
		let popInput=currentCity.getElementsByClassName("rightPop")[0];
		currentCity.children[2].textContent = "";
		// backupData=newCommunity.CityList;
		// console.log(backupData);
		if (popInput.value === "") {
			popInput.value=0;
		}
		if (Number(popInput.value) < 0) {
			currentCity.children[2].textContent = "Population can not be less than 0";
			popInput.value=0;
			popInput.focus();
		} else {
			citySelected= newCommunity.getCity(Number(currentCityKey));
			// let popInput=currentCity.getElementsByClassName("rightPop")[0];
			let currentPOP=citySelected.Population;
			let popreturned=citySelected.moveIn(Number(popInput.value));
			let errorMessage=await fetchToServer.updatePop(citySelected);
			if (errorMessage==="errCaught") {
				citySelected.Population=currentPOP;
				// currentCity.children[2].textContent = currentPOP;
				currentCity.children[2].textContent = "Sorry, server is down. We are unable to process your request.";
				// console.log(backupData);
				// return backupData;
				
			} else {
				// currentCity.children[2].textContent = popreturned;
				currentCity.children[2].textContent = "Population successfully updated.";
				currentCity.children[1].textContent = citySelected.show();
				popInput.value=0;
			}
		}
		
	}
	if (event.target.textContent === "Move Out") {
		currentCity = event.toElement.parentElement;
		currentCityKey = currentCity.children[0].textContent;
		let popInput=currentCity.getElementsByClassName("rightPop")[0];
		currentCity.children[2].textContent = "";
		if (popInput.value === "") {
			popInput.value=0;
		}
		if (Number(popInput.value) < 0) {
			currentCity.children[2].textContent = "Population can not be less than 0";
			popInput.value=0;
			popInput.focus();
		} else {
			citySelected= newCommunity.getCity(Number(currentCityKey));
			// let popInput=currentCity.getElementsByClassName("rightPop")[0];
			let currentPOP=citySelected.Population;
			if (popInput.value > currentPOP) {
				currentCity.children[2].textContent = "Moving out can not be greater than Current Population. Please try again!";
				popInput.focus();
			} else {
				let popreturned=citySelected.moveOut(Number(popInput.value));
				let errorMessage=await fetchToServer.updatePop(citySelected);
				if (errorMessage==="errCaught") {
					//alert("Sorry, server is down. We are unable to process your request");
					citySelected.Population=currentPOP;
					// currentCity.children[2].textContent = currentPOP;
					currentCity.children[2].textContent = "Sorry, server is down. We are unable to process your request.";
				} else {
					// currentCity.children[2].textContent = popreturned;
					currentCity.children[2].textContent = "Population successfully updated.";
					currentCity.children[1].textContent = citySelected.show();
					popInput.value=0;
				}
			}
		}
	
	}
	if (event.target.textContent === "Delete") {
		currentCity = event.toElement.parentElement;
		currentCityKey = currentCity.children[0].textContent;
		//console.log(currentCityKey);
		const toConfirm = confirm("Would you like to delete this city?");
		if (toConfirm == true) {
			newCommunity.deleteCity(Number(currentCityKey));
			fetchToServer.deleteCity(Number(currentCityKey))
			functions.deleteCurrentCard(document.getElementById("rightside"),event.target.parentNode);
			console.log(newCommunity.CityList);
			alert("The city successfully deleted.");
		} else {
			alert("The request has been canceled.")
		}
	}
 });

 btnNorthern.addEventListener("click", function () {
	if (newCommunity.CityList.length > 0) {
		leftmessage.textContent=`The Most Northern City is: ${newCommunity.getMostNorthern().Name}.`;
	} else {
		leftmessage.textContent=" No information to be displayed."
	}
 })
 btnSouthern.addEventListener("click", function () {
	if (newCommunity.CityList.length > 0) {
		leftmessage.textContent=`The Most Southern City is: ${newCommunity.getMostSouthern().Name}.`;
	} else {
		leftmessage.textContent=" No information to be displayed."
	}	
 })
 btnTotalPop.addEventListener("click", function () {
	if (newCommunity.CityList.length > 0) {
		leftmessage.textContent=`The Total Population of All Cities is: ${newCommunity.getTotalPop(newCommunity.CityList)}.`;
	} else {
		leftmessage.textContent=" No information to be displayed."
	}	
 })



