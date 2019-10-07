console.log("Hello World from basic.js");
var txtPress=document.getElementById("inputText");
let pDisplay = document.getElementById("para");
function inputLength() {
    
    return txtPress.value.length;
    
}

function calculation() {
    let inputNumber = document.getElementById("inputText");
    pDisplay.innerText="";
    if (inputLength() > 0) {
        console.log(parseInt(inputNumber.value)+ 1);
        size(parseInt(inputNumber.value));  
    } else {
        //console.log("Invalid number");
        pDisplay.innerText="Invalid number";
    }
    
}
// function onButtonClicked() {
//     let inputNumber = document.getElementById("inputText");

//     console.log("I'm in the button click event");
//     if (inputLength() > 0) {
//         console.log(parseInt(inputNumber.value)+ 1);
//         size(parseInt(inputNumber.value));  
//     } else {
//         console.log("invalid");
//     }
    
// }
function onButtonClicked() {
    
    console.log("I'm in the button click event");
    checkInput();
}
function checkInput() {
    if (isNaN(txtPress.value)) {
        txtPress.value=0;
        pDisplay.innerText="Invalid number. The input value changed to 0";
    } else {
        calculation(); 
    }
}
function size(n) {
    if (n < 10) {
        return console.log("small");
    } else if (n < 20) {
        return console.log("med");
    } else {
    return console.log("large");
    }
}


function colorChangeButtonBlue() {
    var btn = document.getElementById("btnPushMe");
    btn.style.background = "blue";
}
function colorChangeButtonGrey() {
    var btn = document.getElementById("btnPushMe");
    btn.style.background = "red";
}

function a(event) {
    // 
    if (event.keyCode === 13) { 
        //console.log("key 13 pressed");
        //calculation();
        checkInput();
    }
}
document.getElementById("btnPushMe").addEventListener("click",onButtonClicked);

document.getElementById("btnPushMe").onmouseover = colorChangeButtonBlue;
document.getElementById("btnPushMe").onmouseout = colorChangeButtonGrey;

document.getElementById("inputText").addEventListener("keypress",a);