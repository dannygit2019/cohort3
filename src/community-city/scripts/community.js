import { postData } from './apiSetup.js'


const url = 'http://localhost:5000/';


    export class City {
        
        constructor (key, Name, Latitude, Longitude, Population) {
            
            this.key = key;
            this.Name = Name;
            this.Latitude = Latitude;
            this.Longitude = Longitude;
            this.Population = Population;

        }
        show() {
            //return "calgary";
            let cityAttributes;
            // cityAttributes = `ID: ${this.key}, City: ${this.Name}, Latitude: ${this.Latitude}, ` + 
            //                 `Longtitude: ${this.Longitude}, Population: ${this.Population}`;
            cityAttributes = `City: ${this.Name}, Lat.: ${this.Latitude}, Long.: ${this.Longitude}, Population: ${this.Population}`;
                            
            return cityAttributes;
        }

        moveIn(numberInput) {
            this.Population += numberInput;
        }
        moveOut(numberInput) {
            return this.Population -= numberInput;
        }
        howBig() {
            if (this.Population > 100000) return "City";
            if (this.Population > 20000) return "Large Town";
            if (this.Population >= 1000) return "Town";
            if (this.Population > 100) return "Village";
            if (this.Population >= 1) return "Hamlet";
            return "Unknown-Danny's Land";
        }
        
    }
    export class Community {
        constructor() {
            this.CityList=[];  
        }
        getCity(keyInput) {           
            return this.CityList.filter(city => city.key === keyInput)[0];
        }
    
        whichSphere(city) {
            if (city.Latitude > 0) return "Northern Hemisphere";
            if (city.Latitude < 0) return "Southern Hemisphere";
            return "Neither Northern nor Southern Hemisphere."
        }

        createCity(key, Name, Latitude, Longitude, Population) {
            const newCity = new City(key, Name, Latitude, Longitude, Population);
            this.CityList.push(newCity);
        }
        
        deleteCity(cityKey) { 
            let newCityList = this.CityList.filter(function(value){
                return value.key !== cityKey; 
            });
            this.CityList = newCityList;  
        }

        getLastKey() {
            if (this.CityList.length > 0) {
				let lastKey=this.CityList.sort((a, b) => b.key - a.key)[0].key;
                console.log(this.CityList.sort((a, b) => b.key - a.key)[0].key);
                console.log('check2');
                //console.log(lastKey);
                return lastKey;
            };
            return 0;
        }
        // getMostNorthern() {
           
        //     let highestLat = this.cityList.reduce(function(a, b) {
        //         return Math.max(a.Latitude, b.Latitude);
        //     });
        //      return highestLat;
        // }

        
    }
    const functions = {
       
        addCard: (node,detail,keyid) => {
            let newLine=document.createElement("br");
            let newCard=document.createElement("div");
            newCard.setAttribute("class", "rightshow");
            // newCard.textContent=`City ${node.childElementCount}`;
            //newCard.textContent=`City ${cName}`;
            
            node.appendChild(newCard);
            /////functions.addButtons(newCard);
            let newDisplayName=document.createElement('p');
            newDisplayName.hidden=true;
            newDisplayName.textContent=keyid;
            newCard.appendChild(newDisplayName);

            newCard.appendChild(newLine);

            let newDisplayDetail=document.createElement('p');
            newDisplayDetail.setAttribute("id", "displayDetail");
            newDisplayDetail.setAttribute("class", "pdisplay");
            newDisplayDetail.textContent=detail;
            newCard.appendChild(newDisplayDetail);

            newCard.appendChild(newLine);

            let newDisplayHowBig=document.createElement('p');
            newDisplayHowBig.setAttribute("id", "displayhowBig");
            newDisplayHowBig.setAttribute("class", "pdisplay pBig");
            newDisplayHowBig.textContent="";
            newCard.appendChild(newDisplayHowBig);

            newCard.appendChild(newLine);
            
            let lblMove=document.createElement("label");
            lblMove.textContent="Move In/Move Out:";
            lblMove.setAttribute("class","lblmoving");
            newCard.appendChild(lblMove);

            let txtModify = document.createElement("input");
            txtModify.setAttribute("type","number");
            txtModify.setAttribute("class","rightPop");
            txtModify.setAttribute("id","txtmodifyPop");
            newCard.appendChild(txtModify);

            
            let removeCity = document.createElement("button");
            removeCity.setAttribute("class","btnright");
            removeCity.setAttribute("id","delete");
            removeCity.textContent="Delete";
            
            newCard.appendChild(removeCity);

            let movingIn = document.createElement("button");
            movingIn.setAttribute("class","btnright");
            movingIn.setAttribute("id","moveIn");
            movingIn.textContent="Move In";
            
            newCard.appendChild(movingIn);

            let movingOut = document.createElement("button");
            movingOut.setAttribute("class","btnright");
            movingOut.setAttribute("id","moveOut");
            movingOut.textContent="Move Out";
            
            newCard.appendChild(movingOut);
            
            let howBig = document.createElement("button");
            howBig.setAttribute("class","btnright");
            howBig.setAttribute("id","howBig");
            howBig.textContent="How Big";
            
            newCard.appendChild(howBig);

            let sphere = document.createElement("button");
            sphere.setAttribute("class","btnright");
            sphere.setAttribute("id","sphere");
            sphere.textContent="Hemisphere";
            
            newCard.appendChild(sphere);
            return newCard;
        },
        deleteCurrentCard: (node,currentCard) => {
        
            currentCard.remove();
            return node.childElementCount;
        }
    
    };


export {functions};
