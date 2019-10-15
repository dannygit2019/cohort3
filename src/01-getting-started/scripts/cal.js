

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
    buttonClicked: (operate) => {
        let txtnum1=document.getElementById("num1");
        let txtnum2=document.getElementById("num2");
        let txtresult=document.getElementById("result");
        let txtdisp=document.getElementById("dispformula");
        if (txtnum1.value === "") {
            txtnum1.value=0;
            
        }
        if (txtnum2.value === "") {
            txtnum2.value=0;
            
        }
        Calculation.operatorSelected(operate);
        

    },

    operatorSelected: (operate) => {
        let txtnum1=document.getElementById("num1");
        let txtnum2=document.getElementById("num2");
        let txtresult=document.getElementById("result");
        let txtdisp=document.getElementById("dispformula");
        switch (operate) {
            case "add":
                txtdisp.value=txtnum1.value + "+" + txtnum2.value;
                txtresult.value=Calculation.add(Number(txtnum1.value),Number(txtnum2.value));
                break;
            case "sub":
                txtdisp.value=txtnum1.value + "-" + txtnum2.value;
                txtresult.value=Calculation.subtract(Number(txtnum1.value),Number(txtnum2.value));
                break;
            case "multi":
                txtdisp.value=txtnum1.value + "*" + txtnum2.value;
                txtresult.value=Calculation.multiply(Number(txtnum1.value),Number(txtnum2.value));
                break;
            case "divide":
                  
                if (txtnum2.value != 0) { 
                    txtdisp.value=txtnum1.value + "/" + txtnum2.value;
                    txtresult.value=Calculation.division(Number(txtnum1.value),Number(txtnum2.value));
                        
                }
                if (txtnum2.value == 0) {
                    txtnum2.value="";
                    txtnum2.focus();
                }
                break;
        }

    },
    checkResult: () => {
        if (document.getElementById("result").value !== "") {
            document.getElementById("dispformula").value="";
            document.getElementById("result").value="";
        }
        
    },
    clearAll: () => {
        document.getElementById("num1").value="";
        document.getElementById("num2").value="";
        document.getElementById("result").value="";
        document.getElementById("dispformula").value="";
        document.getElementById("num1").focus();
    },
    ensureNumber: (event) => {
        if (event.keyCode < 48 || event.keyCode > 57)
            {
                event.preventDefault();
            }
        if ((event.keyCode > 57 && event.keyCode < 96) || (event.keyCode > 105)) {
            event.preventDefault();
        }
        Calculation.checkResult();
    },
    //working with Canadian taxes
    
    // getDecimal: (n) => {
        
    //     // Limited 2 digits after decimal
    //     if (n.indexOf(".") >=0) {
    //         var dec=n.indexOf(".");
    //         var beforeDec=n.substring(0,dec);
    //         var afterDec=n.substring(dec);
    //         var combine;
    //         var limitDec;
    //         beforeDec=Number(beforeDec)
    //         afterDec=Number(afterDec);
    //         console.log(beforeDec);
            
    //         // if (afterDec.length >= 3) {
    //         //     limitDec=afterDec.substring(0,3);
    //         //     return Calculation.numberFormat(beforeDec) + limitDec;
        
                
    //         // }
           
    //     }
    //     //return Calculation.numberFormat(combine);
    //     console.log(Calculation.numberFormat(n));

    // },

    numberFormat: (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
    },

    taxCalculateClicked: (n) => {       
        Calculation.calculateTaxes(n);
    },
    
    calculateTaxes: (income) => {
        
        let line1=document.getElementById("line1"); // Income on line 206
        let line2=document.getElementById("line2"); // Base amount
        let line3=document.getElementById("line3"); // line 1- line 2
        let line4=document.getElementById("line4"); // Federal tax rate
        let line5=document.getElementById("line5"); // Line 3 x Line 4
        let line6=document.getElementById("line6"); // tax on the amount from line 2
        let line7=document.getElementById("line7"); // (line 5 + line 6) total federal tax amount
        let baseamount = [0, 47630, 95259, 147667, 210371];
        let taxrate = [0.15, 0.205, 0.26, 0.29, 0.33];
        let taxonBaseamount=[0, 7144.5, 16908.445, 30534.53, 48718.690];
        let inrange=Calculation.determineIncomeRange(income);
        
        switch (inrange) {
            
            case baseamount[1]:

                line1.value=Number(income);
                line2.value=baseamount[0];
                line3.value= Number(line1.value)- Number(line2.value);
                line4.value=taxrate[0];
                line5.value=line3.value * line4.value;
                line6.value=taxonBaseamount[0];
                line7.value=line5.value + line6.value;
                break;

            case baseamount[2]:
                line1.value=Number(income);
                line2.value=baseamount[1];
                line3.value= line1.value-line2.value;
                line4.value=taxrate[1]; 
                line5.value=line3.value * line4.value;
                line6.value=taxonBaseamount[1];
                line7.value=Number(line5.value) + Number(line6.value);
                break;   

            case baseamount[3]:
                line1.value=Number(income);     
                line2.value=baseamount[2];
                line3.value= line1.value-line2.value;
                line4.value=taxrate[2];         
                line5.value=line3.value * line4.value;
                line6.value=taxonBaseamount[2]; 
                line7.value=Number(line5.value) + Number(line6.value);
                break; 

            case baseamount[4]:
                line1.value=Number(income);            
                line2.value=baseamount[3];
                line3.value= line1.value-line2.value;
                line4.value=taxrate[3];                 
                line5.value=line3.value * line4.value;
                line6.value=taxonBaseamount[3];         
                line7.value=Number(line5.value) + Number(line6.value);
                break;

            case "over210371":
                line1.value=Number(income);                     
                line2.value=baseamount[4];
                line3.value= line1.value-line2.value;
                line4.value=taxrate[4];                          
                line5.value=line3.value * line4.value;
                line6.value=taxonBaseamount[4];                  
                line7.value=Number(line5.value) + Number(line6.value);
                break;       
        } 
       
    },

    determineIncomeRange: (income) => {
        const incomerange = [47630, 95259, 147667, 210371];
        if (income <= incomerange[0]) {
            return incomerange[0]; // less than or equal to $47,630
        }
        if (income <= incomerange[1]) {
            return incomerange[1]; // less than or equal to $95,259
        }
        if (income <= incomerange[2]) {
            return incomerange[2]; // less than or equal to $147,667
        }
        if (income <= incomerange[3]) {
            return incomerange[3]; // less than or equal to $210,371
        }
        return "over210371";
    }


};

export default Calculation;
