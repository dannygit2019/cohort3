import { postData } from './apiSetup.js'
import { City, Community } from './community.js';

const url = 'http://localhost:5000/';



    const fetchToServer = {

        // async loadData(cityInput) {
            
		// 	let data = await postData(url + 'all');
		// 	console.log(data.length);
		// 	//if (data.length !== 0) {
		// 		cityInput.CityList = data.map(dataCity => new City(dataCity.key, dataCity.Name, dataCity.Latitude, dataCity.Longitude, dataCity.Population));
		// 		console.log("All Cities loaded from the server:")
		// 		console.log(cityInput.CityList);
		// 		console.log(cityInput.CityList.length);
		// 		console.log('check1');
		// 		if (cityInput.CityList.length > 0) {
					
		// 			let lastKey=cityInput.CityList.sort((a, b) => b.key - a.key)[0].key;
		// 			console.log(cityInput.CityList.sort((a, b) => b.key - a.key)[0].key);
		// 			console.log('check2');
		// 			//console.log(lastKey);
		// 			return lastKey;
		// 		};
		// 		return 0;
		// 	//}
		// 	//return 0;
		// 	return data;
		// },

		async loadData(cityInput) {
            
			let data = await postData(url + 'all');
			console.log(data.length);
			if (data.length !== 0) {
				cityInput.CityList = data.map(dataCity => new City(dataCity.key, dataCity.Name, dataCity.Latitude, dataCity.Longitude, dataCity.Population));
				console.log("All Cities loaded from the server:")
				console.log(cityInput.CityList);
				console.log(cityInput.CityList.length);
				console.log('check1');
				return cityInput.CityList;
			} else {
				return "No Data on the server.";
			}
			//return data;
			
		},
		async getCityName(newCommu, nameInput) {
            
			let data = await postData(url + 'all');
			console.log(data.length);
			console.log(data);
			//if (data.length !== 0) {
			
			newCommu.CityList = data.map(dataCity => new City(dataCity.key, dataCity.Name, dataCity.Latitude, dataCity.Longitude, dataCity.Population));
			if (newCommu.CityList.length > 0) {		
				console.log("inside ")
				let a=newCommu.CityList.filter((checkName) => checkName.Name === nameInput)[0].Name;
				
				//console.log(a);
				return a;
			}
			return "";
			//}
			//return 0;
		},



        async addCity(city) {

			return await postData(url + 'add', city);
			
			
		},
		async deleteCity(key) {

            return await postData(url + 'delete', {key:key});
        },
	
		async updatePop(city) {
			return await postData(url + 'update', city);
		}
    };


export { fetchToServer };
