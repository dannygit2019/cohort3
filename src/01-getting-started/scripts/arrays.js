

let newarray=[]; // to store a newarray
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
const Arrays = {
    
   
    addClicked: () => {
        let inputFromUser=document.getElementById("arrayinput");
        let messagearea=document.getElementById("message");
        if (Number(inputFromUser.value)) {
            newarray.push(inputFromUser.value);
            messagearea.value="The number has been added to the array."
            //inputFromUser.value="";
        };
        if (isNaN(inputFromUser.value)) {
            
            messagearea.value="The input is not a valid number."
            //inputFromUser.value="";
        };
        inputFromUser.value="";
    },
    showarray: () => {
        let messagearea=document.getElementById("message");   
        messagearea.value=newarray;
        
       
    },

    clearArray: () => {
        let messagearea=document.getElementById("message");    
        newarray=[];
        messagearea.value="";
    },
    total: (messageinput) => {
        let temparray=[];
        let messagearea=document.getElementById("message");
        let totaladd=0;
        for (var i=0; i< messageinput.length;i++) {
            if (messageinput[i] !== ",") {
                temparray.push(messageinput[i]);
                totaladd=totaladd + Number(messageinput[i]);
            }
        }
        messagearea.value=totaladd;
    },
    // Working with Dictionaries
    dictionaries: (pcode) => {
        let i=0;
        for (i; i < provinceObject.length; i++) {
            if (provinceObject[i].provinceCode === pcode.toLowerCase()) {
                return provinceObject[i].provincename;
            }
        } 
        return "Invalid Province Code";
            
    },
    displayLookUp: (pcode) => {
        let namedisplay=document.getElementById("lookupmessage");
        namedisplay.value=Arrays.dictionaries(pcode);
    }
};

export default Arrays;
