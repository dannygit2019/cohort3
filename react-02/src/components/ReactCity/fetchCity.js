import { postData } from './apiSetup.js'
import { City, Community } from './CommunityPOJO';

const url = 'http://localhost:5000/';



    const fetchToServer = {

		async loadData(cityInput) {
			let data = await postData(url + 'all');
			if (data.length !== 0) {
				cityInput.CityList = data.map(dataCity => new City(dataCity.key, dataCity.Name, dataCity.Latitude, dataCity.Longitude, dataCity.Population))
				// return cityInput.CityList;
				console.log(cityInput)
				return cityInput;
			} else {
				return "none";
			}
		},

        async addCity(city) {
			return await postData(url + 'add', city);	
		},
		async deleteCity(key) {
            return await postData(url + 'delete', {key:key});
        },
	
		async updatePop(city) {
			//try {
				return await postData(url + 'update', city);
				//await postData(url + 'update', city);
			//} catch (err) {
				//console.log(err);
				// return err;
			//	return "errCaught";
			//}
		}
    };


export { fetchToServer };
