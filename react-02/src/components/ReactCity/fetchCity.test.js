import { postData } from './apiSetup.js'
import { City, Community } from './community.js'
import { fetchToServer } from './fetchCity.js';

global.fetch = require('node-fetch');

/*
    These are destructive tests. The URL will have its data
    blown away.

    These tests were created to give a fairly comprehensive example
    on how to interact with an API. It does the full CRUD. Comments
    are appreciated.
*/

const url = 'http://localhost:5000/';


const citytoLoad = [
    {key:1, Name: "EDMONTON",Latitude: 53.55014,Longitude: -113.46871,Population: 111000},
    {key:2, Name: "MON",Latitude: 53.55014,Longitude: -113.46871,Population: 111000}
];

test('loading data if exist from server', async () => {
    const newCo= new Community();
    let data = await postData(url + 'clear');
    
    data = await postData(url + 'all');
    expect(data.status).toEqual(200);

    
    expect(await fetchToServer.loadData(newCo)).toEqual("none");

    data = await postData(url + 'add', citytoLoad[0]);
    expect(data.status).toEqual(200);
    data = await postData(url + 'add', citytoLoad[1]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.length).toBe(2);

    await fetchToServer.loadData(newCo);
    expect(data[0].Name).toEqual("EDMONTON");
    //expect(newCo.CityList[0].Name).toEqual("EDMONTON");
    expect(newCo.CityList.length).toEqual(2);

});

test('NEW TESTING add and delete city on the server', async () => {

    
    const city ={key:1, name: "Edmonton",Latitude: 53.55014,Longitude: -113.46871,Population: 10};
    
    let data = await postData(url + 'clear');
    
    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);
    
    data = await fetchToServer.addCity(city);
    expect(data.status).toEqual(200);
    
    data = await postData(url + 'all');
    expect(data.length).toBe(1);

    data = await fetchToServer.deleteCity(1); // testing deletecity method
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.length).toBe(0); // after the city deleted

});

test('updatePop(city) updating city population on the server', async () => {

    const newCommunity = new Community();
    
    let data = await postData(url + 'clear');
    
    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    newCommunity.createCity(1,"CAN", 50.3, -112, 10); // call createCity from community.js to create a city
    

    data = await postData(url + 'add', newCommunity.CityList[0]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].Name).toBe("CAN");
    expect(data[0].Population).toBe(10);
    
    newCommunity.getCity(1).moveIn(10);
    fetchToServer.updatePop(newCommunity.getCity(1));

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data[0].Population).toBe(20);

    newCommunity.getCity(1).moveOut(5);
    fetchToServer.updatePop(newCommunity.getCity(1));
    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data[0].Population).toBe(15);
});
