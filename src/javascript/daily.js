
const functions = {
    
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
    /// Daily exercise Oct-09-2019
    makeEmailArr: (anArray) => {
        let fName= anArray[0].toLowerCase();
        let lName= anArray[1].toLowerCase();
        return `${fName}.${lName}@evolveu.ca`;
    },

    /// Daily exercise Oct-11-2019
    makeEmailObj: (anObject) => {
        // Option 1:
        let fullname = anObject.fname + "." + anObject.lname + "@evolveu.ca";
        return fullname.toLowerCase();
        /* option 2
        let fullname=anObject.fname + "." + anObject.lname;
        let result= fullname.toLowerCase() + "@evolveu.ca";
        return result;
        */
        /* Option 3
        return `${(anObject.fname).toLowerCase()}.${(anObject.lname).toLowerCase()}@evolveu.ca`;
        */
    }
}

export default functions;
