
const functions = {
// **************************************************************8
// Daily exercise Oct-16 and 17
/*  slice
    splice
    forEach
    map
    reduce
    filter
    sort
*/
    sliceExample: (anInput) => {

        return anInput.slice(1,2); // to select items from position 1 to 2(but 2 not included)
    },

    spliceExample: (anInput1) => {
        anInput1.splice(1,0,"Kiwi"); // add "Kiwi" to the array at postion 1
        return anInput1;
    },

    forEachExample: (anInput) => {
        let result=[];
        anInput.forEach(function(getFromInput) {
            result.push(getFromInput);
        });
        return result;
    },

    mapExample: (anArray) => {
        let result;
        result = anArray.map(function (num) {
            return num * 2;   
        });
        return result;
    },

    /*
    SYNTAX - Reduce
    array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
    which total (initial value) and currentValue (the value of current element) are required parameters

    */
    reduceExample: (arr) => {
        let result;
        result=arr.reduce((firstnum,secondnum) => firstnum + secondnum);
        return result;
    },
    /*
    SYNTAX - Filter
    array.filter(function(currentValue, index, arr), thisValue)
    which currentValue (the value of current element) is required parameter

    */
    filterExample: (arrFilter) => {
        let result=arrFilter.filter(checkNum => checkNum > 2);
        return result; 
    },

    /*
    SYNTAX - sort
    array.sort(compareFunction)
    which currentValue (the value of current element) is required parameter
    */
    sortExample: (arrSort) => {
        // let result=arrSort.sort(function(a, b){
        //     //console.log(a +" " + b);
        //     return a-b
        //     });
        let result=arrSort.sort();
         return result; 

    },
    // End of Daily exercise Oct-16 & 17

    // ********************************
    assertEquals: (in1,in2) => {
        const message = "*** the two values are not the same:" + "\n";
        let combine;
        
        if (in1 === in2) {
            return "true";
        }  else {
                combine = "    p1--> " + in1 + '\n' + "    p2--> " + in2;
                console.log(message + combine);
                return "false";
        }
    },
    // Daily exercise Oct-09-2019
    makeEmailArr: (anArray) => {
        let fName= anArray[0].toLowerCase();
        let lName= anArray[1].toLowerCase();
        return `${fName}.${lName}@evolveu.ca`;
    },

    // Daily exercise Oct-11-2019
    makeEmailObj: (anObject) => {
        // Option 1:
            return `${(anObject.fname).toLowerCase()}.${(anObject.lname).toLowerCase()}@evolveu.ca`;
        /* option 2
            let fullname=anObject.fname + "." + anObject.lname;
            let result= fullname.toLowerCase() + "@evolveu.ca";
            return result;
        */
        /* Option 3
            let fullname = anObject.fname + "." + anObject.lname + "@evolveu.ca";
            return fullname.toLowerCase();
        */
    },

    // Daily exercise Oct-15-2019
    forLoop: (forArray) => {
        let i;
        let newArray=[];
        for (i=0; i < forArray.length; i++) {
            newArray += forArray[i] + " ";
        }
        return newArray.trim();
    },

    whileLoop: (whileArray) => {
        let i=0;
        let newWhile=[];
        while (i < whileArray.length) {
            newWhile += whileArray[i] + " ";
            i++; 
        }
        return newWhile.trim();
    },
    
    doWhileLoop: (dowhilearray) => {
        let i=0;
        let newdowhile=[];
        do {
            newdowhile += dowhilearray[i];
            i++;
          }
        
        while (i < dowhilearray.length);
        return newdowhile;
    },

    forInLoop: (objectInput) => {
        let newObject;
        let result="";
        for (newObject in objectInput) {
            result += objectInput[newObject] + " ";
        } 
        return result.trim();
    },

    forOf: (anArr) => {
        let result=[];
        let newText;
        for (newText of anArr) {
            result.push(newText);
        } 
        return result;
    }


    


// DO NOT delete lines below
};

export default functions;
