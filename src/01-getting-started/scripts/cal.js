
let newarray=[]; // to store a newarray
let newString=[];

let provinceObject = [
    {
        provinceCode: "ab",
        provincename: "Alberta"
    },
    {
        provinceCode: "sk",
        provincename: "Saskatchewan"
    },
    {
        provinceCode: "qc",
        provincename: "Quebec"
    },
    {
        provinceCode: "mb",
        provincename: "Manitoba"
    }
];

const Calculation = {
    
    add: (num1, num2) => {
        return num1+num2;
    },

    subtract: (num1, num2) => {
        return num1-num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    division: (num1, num2) => {
        return num1 / num2;
    },

    clearAll: () => {

        return "";
    },

    // *** End of working with Calculators ******

    //working with Canadian taxes
    
    numberFormat: (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
    },
    
    calculateTaxes: (income) => {
        let totalTax=0;
        let incomeInput=income;
        let incomeRange=[47630, 95259, 147667, 210371];
        let baseamount = [0, 47630, 95259, 147667, 210371];
        let taxrate = [0.15, 0.205, 0.26, 0.29, 0.33];
        let taxonBaseamount=[0, 7144.5, 16908.445, 30534.53, 48718.690];
        // when less than or equal to $47,630
        if (incomeInput <= incomeRange[0]) { 
            totalTax = (((incomeInput - baseamount[0])) * taxrate[0]) + Number(taxonBaseamount[0]);
            return Calculation.numberFormat(totalTax.toFixed(2));
        }
        // less than or equal to $95,259
        if (incomeInput <= incomeRange[1]) { 
            totalTax = (((incomeInput - baseamount[1])) * taxrate[1]) + Number(taxonBaseamount[1]);
            return Calculation.numberFormat(totalTax.toFixed(2));
        }
        // less than or equal to $147,667
        if (incomeInput <= incomeRange[2]) {
            totalTax = (((incomeInput - baseamount[2])) * taxrate[2]) + Number(taxonBaseamount[2]);
            return Calculation.numberFormat(totalTax.toFixed(2));
        }
        // less than or equal to $210,371
        if (incomeInput <= incomeRange[3]) {
            totalTax = (((incomeInput - baseamount[3])) * taxrate[3]) + Number(taxonBaseamount[3]);
            return Calculation.numberFormat(totalTax.toFixed(2));
        }
        // > $210,371
        totalTax = (((incomeInput - baseamount[4])) * taxrate[4]) + Number(taxonBaseamount[4]);
        return Calculation.numberFormat(totalTax.toFixed(2));

    },
// ****** End of working with Canadian Taxes

// *********************************************************************

// ****** WORKING WITH ARRAYS

    addClicked: (arrInput) => {
        let messageDisplay="The number has been added to the array";
            newarray +=arrInput + ",";
            newString = newarray.substring(0, newarray.length - 1);
            return messageDisplay;
    },


    showarray: () => {
        console.log(newString);
        return newString; 
    },

    clearArray: () => {  
        newString=[];
        return "";
    },
    // add them up
    total: (messageinput) => {
        let totaladd=0;
        let newarr;
        newarr=messageinput.split(",");
        for (var i=0; i< newarr.length;i++) {
            totaladd= Number(totaladd) + Number(newarr[i]);  
        }
        return totaladd;
    },
// **** End of working with Arrays

// *********************************************************************

// **** Working with Dictionaries

    dictionaries: (pcode) => {
        let i=0;
        let message="Invalid Province Code";
        for (i; i < provinceObject.length; i++) {
            if (provinceObject[i].provinceCode === pcode.toLowerCase()) {
                return provinceObject[i].provincename;
            }
        } 
        return message;
    },

};

export default Calculation;
