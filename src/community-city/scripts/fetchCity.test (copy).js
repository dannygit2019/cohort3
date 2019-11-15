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

    
    expect(await fetchToServer.loadData(newCo)).toEqual("No Data on the server.");

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


// test('test that the fetch works?', async () => {

//     const clients = [
//         {key:1, name: "Edmonton",Latitude: 53.55014,Longitude: -113.46871,Population: 111000},
//         {key:2, name: "Mon",Latitude: 53.55014,Longitude: -113.46871,Population: 111000}
//     ]


//     const newCommunity = new Community();
    
//     let data = await postData(url + 'clear');
    
//     data = await postData(url + 'all');
//     expect(data.status).toEqual(200);
//     expect(data.length).toBe(0);

//     newCommunity.createCity(1,"Can", 50.3, -112, 1000); // call createCity from community.js to create a city
    

//     data = await postData(url + 'add', newCommunity.CityList[0]);
//     expect(data.status).toEqual(200);

//     data = await postData(url + 'all');
//     expect(data.status).toEqual(200);
//     expect(data.length).toBe(1);
//     expect(data[0].Name).toBe("Can");
    

//     newCommunity.createCity(2,"Mon", 50.3, -112, 1000);
//     data = await postData(url + 'add', newCommunity.CityList[1]);
//     expect(data.status).toEqual(200);

//     data = await postData(url + 'all');
    
//     expect(data.status).toEqual(200);
//     expect(data.length).toBe(2);
//     expect(data[1].Name).toBe("Mon");

//     data = await postData(url + 'all');

//     //expect(await fetchToServer.getCityName(data,"Can")).toEqual("Can");
    
// });


test('NEW TESTING add and delete city on the server', async () => {

    // const city = [
    //     {key:1, name: "Edmonton",Latitude: 53.55014,Longitude: -113.46871,Population: 111000},
    //     {key:2, name: "Mon",Latitude: 53.55014,Longitude: -113.46871,Population: 111000}
    // ]
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
    // newCommunity.createCity(2,"Mon", 50.3, -112, 1000);
    // data = await postData(url + 'add', newCommunity.CityList[1]);
    // expect(data.status).toEqual(200);

    // data = await postData(url + 'all');
    
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(2);
    // expect(data[1].Name).toBe("Mon");

    // data = await postData(url + 'all');

    //expect(await fetchToServer.getCityName(data,"Can")).toEqual("Can");
    
});


// test('updatePop(city) updating city population on the server', async () => {
//     const newCom = new Community([]);
//     await postData(url + 'clear');
//     let newCity = newCom.createCity(1, "Toronto", 15, -115.05, 10);
//     await fetchToServer.addCity(newCity);

//     let data = await postData(url + 'all');
    
//     expect(data.status).toEqual(200);
//     expect(data[0].Population).toEqual(11);
//     //expect(newCom.CityList[0].Population).toBe(0);


//     // newCom.getCity(1).moveIn(1);
//     // fetchToServer.updatePop(newCom.getCity(1));

//     // data = await serverFunctions.postData(url + 'all');
//     // expect(data.status).toEqual(200);
//     // expect(data[0].pop).toBe(1100);


//     // province.getCity(7).movedOut(100);
//     // serverFunctions.updateData(province.getCity(7));

//     // data = await serverFunctions.postData(url + 'all');
//     // expect(data.status).toEqual(200);
//     // expect(data[0].pop).toBe(1000);


//     // expect(province.cityList[0]).toEqual(data[0]);
// });




    // Check that the server is running and clear any data
    // let data = await postData(url + 'clear');

    // data = await postData(url + 'all');
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(0);

    // data = await postData(url + 'add', clients[0]);
    // expect(data.status).toEqual(200);
    // //expect(data[0].Name).toBe("Edmonton");

    // data = await postData(url + 'all');
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("Edmonton");

    // add a second with the same key which should be an error
    // data = await postData(url + 'add', clients[0]);
    // expect(data.status).toEqual(400);

    // add a second which should be ok
    // data = await postData(url + 'add', clients[1]);
    // expect(data.status).toEqual(200);

    // data = await postData(url + 'all');
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(2);
    // expect(data[1].name).toBe("Lorraine");

    // data = await postData(url + 'read', {key:1});
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("Larry");

    // data = await postData(url + 'update', {key:1, name:"George"});
    // expect(data.status).toEqual(200);

    // data = await postData(url + 'read', {key:1});
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("George");

    // data = await postData(url + 'delete', {key:1});
    // expect(data.status).toEqual(200);

    // data = await postData(url + 'read', {key:1});
    // expect(data.status).toEqual(400);


