import functions from './functions.js';
import Calculation from './cal.js';
// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
// working with calculator

add.addEventListener("click", function(){
    result.value = Calculation.add(Number(num1.value),Number(num2.value));  
});
subtract.addEventListener("click", function(){
    result.value = Calculation.subtract(Number(num1.value),Number(num2.value));  
});
multiply.addEventListener("click", function(){
    result.value = Calculation.multiply(Number(num1.value),Number(num2.value));  
});
division.addEventListener("click", function(){
    result.value = Calculation.division(Number(num1.value),Number(num2.value));  
});
clear.addEventListener("click", function(){
    result.value = Calculation.clearAll(); 
    result.value=0; 
});


// working with canadian taxes

calculatetaxes.addEventListener("click",function(){
    totalDisplay.value=Calculation.calculateTaxes(Number(incomeIn.value));
});

// working with arrays

addarray.addEventListener("click",function() {
        message.value=Calculation.addClicked(Number(arrayinput.value));
});
showarray.addEventListener("click", function () {
        message.value=Calculation.showarray("");
});  

totalarray.addEventListener("click",function() {
    //message.value=Calculation.total(document.getElementById("message").value);
    message.value=Calculation.total(message.value);
});

cleararray.addEventListener("click", function () {
    message.value=Calculation.clearArray();
    arrayinput.value="";
});

// working with lookup dictionaries

lookup.addEventListener("click", function() {
    lookupmessage.value = Calculation.dictionaries(pcode.value)
});
