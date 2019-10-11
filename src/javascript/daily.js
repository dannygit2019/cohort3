
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
    makeEmailArr: (anArray) => {
        let fName= anArray[0].toLowerCase();
        let lName= anArray[1].toLowerCase();
        return `${fName}.${lName}@evolveu.ca`;
    }
}

export default functions;
