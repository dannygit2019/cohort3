/*
define attributes / variables
    number
    string
    boolean
    array
    dictionary / objects
    undefined
sample if / else
functions
    parameters
    returns
arrays
    add to the front
    add to the end
    update values
loops 
    for
    for/in
    while
    do while
    forEach (with array and function)
Objects / Dictionaries
    declare object
    lookup key to retrieve value
*/
// define attributes / variables
const functions = {
    
    defineNumber: (num1) => {
        return num1;
    },
    defineString: (str) => {
        return str;
    },
    defineBoolean: (n1,n2) => {
        return n1 > n2;
    },
    defineArray: (arr) => {
        return arr[0]; 
    },
    defineObject: (obj) => {
       return obj.name; 
    },
    defineUndefined: (undefine) => {
     
    },
    sampleOfIfElse: (num1,num2) => {
        if (num1 < num2) {
            return num1 + " < " + num2;
        } else {
            return num1 + " > " + num2;
        }
    },
    // array - add to the front
    arrayToFront: (arrStart) => {
        arrStart.unshift("pinnaple");
        return arrStart[0] + ", " + arrStart[1];
    },
    //array - add to the end
    arrayToEnd: (arrEnd) => {
        arrEnd.push("pinnaple");
        return arrEnd[0] + ", " + arrEnd[1];
    },
    // array - updating a value
    arrayUpdateValue: (arrUpdate) => {
        return arrUpdate[0]="pear";
        
    },
    // LOOP for
    forLoop: (num) => {
        var getnum=0;
        for (var i=0; i < num;i++) {
            getnum = getnum + i;
        }
        return getnum;
    },
    // FOR IN LOOP
    forInLoop: (anobject) => {
       
        var text="";
        var x;
        for (x in anobject) {
            text += anobject[x] + " ";
        }
        text=text.trim();
        return text;
    },
    // while loop
    whileLoop: (num) => {
        var i=0;
        var str;
        while (i < num) {
            str=i;
            i++;
        }
        return "The last number is " + str;
    },
    doWhileLoop: (num1) => {
        var i=0;
        var str;
        do {
            str=i;
            i++;
        }
        while (i<num1)
        return "The last number is " + str ;
    },
    // forEach with array anf function
    forEachWithArrFunction: (strArray) => {
        let newArray=[];
        strArray.forEach(function(strArray) {
            newArray=newArray + strArray;
        });
        return newArray + "d";
    },
    //declaring object
    declareObject: (anObject) => {
        let result="";
        result = anObject.name + " is " + anObject.gender;
        return result
    },
    // lookup key to retrieve value
    objectKeyValue: (objectKey) => {
        var combine = objectKey.name;
        return combine;
    }
}
export default functions;