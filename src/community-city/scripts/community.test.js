import { City, Community, functions } from './community.js'
//import {postData} from './apiSetup.js'



test('testing methods (show, moveIn, moveOut) of class City', () => {
    const newCity= new City(1, "Calgary",51.05011,-114.08529,1000);

    expect(newCity.show()).toBe("City: Calgary, Lat.: 51.05011, Long.: -114.08529, Population: 1000");
    
    newCity.moveIn(1);
    expect(newCity.Population).toEqual(1001);

    newCity.moveOut(1);
    expect(newCity.Population).toEqual(1000);
});
const edmonton= new City(1, "Edmonton",53.55014,-113.46871,111000);
const calgary= new City(2, "Calgary",51.05011,-114.08529,100000);
const halifax= new City(3, "Halifax",44.64533,-63.57239,20000);
const sydney= new City(4, "Sydney",46.1351,-60.1831,999);
const regina= new City(5, "Regina",50.45008,-104.6178,100);
const newerCity= new City(6, "Unknown-Danny's Land",-4.09,-105.6178,0);
const newerCity2= new City(7, "Unknown",0,-105.6178,0);

test('testing method howBig() of class City', () => {

    expect(edmonton.howBig()).toBe("City");
    expect(calgary.howBig()).toBe("Large Town");
    expect(halifax.howBig()).toBe("Town");
    expect(sydney.howBig()).toBe("Village");
    expect(regina.howBig()).toBe("Hamlet");
    expect(newerCity.howBig()).toBe("Unknown-Danny's Land?");
});
// ***** TESING COMMUNITY CLASS ************



test('testing method whichSphere(city) of class COMMUNITY', () => {
    const newCommunity = new Community();
    expect(newCommunity.whichSphere(regina)).toBe("Northern Hemisphere");
    expect(newCommunity.whichSphere(newerCity)).toBe("Southern Hemisphere");
    expect(newCommunity.whichSphere(newerCity2)).toBe("Neither Northern nor Southern Hemisphere.");
});

test('testing methods createCity(), deleteCity() of class COMMUNITY', () => {
    const newCommunity = new Community();
    expect(newCommunity.getLastKey()).toEqual(0);
    newCommunity.createCity(8,"QUEBEC",53.55014,-113.46871,111);
    
    expect(newCommunity.CityList).toEqual([{"key": 8, "Name": "QUEBEC", "Latitude": 53.55014, "Longitude": -113.46871, "Population": 111}]);
    
    newCommunity.createCity(9, "MONTREAL",51.55014,-113.46871,111);
    expect(newCommunity.CityList.length).toEqual(2);
    
    expect(newCommunity.getLastKey()).toEqual(9);
    // expect(newCommunity.checkCityName("QUEBEC")).toEqual("found");
    // expect(newCommunity.checkCityName("asfs")).toEqual("QUEBEC");
    expect(newCommunity.getCity(8)).toEqual({"Latitude": 53.55014, "Longitude": -113.46871, "Name": "QUEBEC", "Population": 111, "key": 8});

    newCommunity.deleteCity(8);
    expect(newCommunity.CityList.length).toEqual(1);
    
    newCommunity.deleteCity(9);
    expect(newCommunity.CityList.length).toEqual(0);
});
test('testing getMostNorthern() and getMostSouthern()', () => {
    const newCom=new Community();

   newCom.createCity(1, "EDMONTON", 53.55, -113.4, 1);
   newCom.createCity(2, "CALGARY", 45.55, -113.4, 2);
   newCom.createCity(3, "MONTREAL", 23.55, -113.4, 3);
   newCom.createCity(4, "NEw1", -23.55, -113.4, 4);
   newCom.createCity(5, "NEW2", -35, -113.4, 5);

   expect(newCom.getMostNorthern().Name).toEqual("EDMONTON");
   expect(newCom.getMostSouthern().Name).toEqual("NEW2");
   console.log(newCom.CityList);
   expect(newCom.getTotalPop(newCom.CityList)).toEqual(15);

});

test('testing add and delete cards', () => {
    const newParent= document.createElement("div");
    newParent.setAttribute("id","rightside");
    const newCard=document.createElement("div");
    newCard.setAttribute("class","rightshow");


    expect(functions.addCard(newParent).childElementCount).toEqual(11);
    expect(functions.deleteCurrentCard(newParent, newCard)).toEqual(1);
    // expect(functions.deleteCurrentCard(newParent, newCard)).toEqual(5);
});

// 130E EXERCISE - OBJECT REFERENCE
test('testing object-reference', async () => {


    const newCommunity = new Community();
    newCommunity.createCity(1, "myCity", 53.09, -112.69, 90);
    let myFav=newCommunity;

    expect(newCommunity.CityList[0].Population).toEqual(90);
    expect(myFav.CityList[0].Population).toEqual(90);

    myFav.CityList[0].moveIn(10);
    expect(newCommunity.CityList[0].Population).toEqual(100);
    expect(myFav.CityList[0].Population).toEqual(100);

    newCommunity.CityList[0].moveOut(5);

    expect(newCommunity.CityList[0].Population).toEqual(95);
    expect(myFav.CityList[0].Population).toEqual(95);

});