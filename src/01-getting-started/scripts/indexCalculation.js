import Calculation from './cal.js';
import Arrays from './arrays.js';
// using this is main javscript file to interact with cal.js file

document.getElementById("num1").addEventListener("keypress",Calculation.ensureNumber);
document.getElementById("num2").addEventListener("keypress",Calculation.ensureNumber);
document.getElementById("add").addEventListener("click", function(){ Calculation.buttonClicked("add"); });
document.getElementById("subtract").addEventListener("click", function(){ Calculation.buttonClicked("sub"); });
document.getElementById("multiply").addEventListener("click", function(){ Calculation.buttonClicked("multi"); });
document.getElementById("division").addEventListener("click", function(){ Calculation.buttonClicked("divide"); });
document.getElementById("clear").addEventListener("click", Calculation.clearAll);
// working with canadian taxes

document.getElementById("calculatetaxes").addEventListener("click",function() { Calculation.taxCalculateClicked(document.getElementById("line1").value);});

// working with arrays

document.getElementById("addarray").addEventListener("click",Arrays.addClicked);
document.getElementById("showarray").addEventListener("click",Arrays.showarray);
document.getElementById("totalarray").addEventListener("click",function() {Arrays.total(document.getElementById("message").value);});
document.getElementById("cleararray").addEventListener("click",Arrays.clearArray);

// working with lookup dictionaries

document.getElementById("lookup").addEventListener("click", function() { Arrays.displayLookUp(document.getElementById("pcode").value)});