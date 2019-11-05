import { Account, AccountController } from './account.js'
import functions from './account.js'


//******** creating new account
const newController = new AccountController();

smallcontainer.addEventListener('click', (event) => {

    if (event.target.textContent === "Create") {
        if (txtAccountType.value !== "") {
            displayarea2.textContent="";
            newController.addAccount((txtAccountType.value).toUpperCase(),0);
            newController.showAccName().forEach((acc,index) => {
                if (index === newController.showAccName().length - 1) {
                    displayarea.innerHTML +=  `* Account: ${acc.accountName} - Balance: ${acc.initialBalance} <br>`;
                }
            });
        
            functions.removeNewAccDiv(smallcontainer,event.target.parentNode);
            document.getElementById("btnAccDetail").disabled = false;
        } else {
            displayarea2.textContent = "Invalid Account Name. Please try again."
        }
    }
    if (event.target.textContent === "Cancel") {
        functions.removeNewAccDiv(smallcontainer,event.target.parentNode);
        displayarea2.textContent="Creating a new account has been canceled.";
        if (newController.accountHolder.length >= 1) {
            document.getElementById("btnAccDetail").disabled = false;
        } else {
            document.getElementById("btnAccDetail").disabled = true;
        }
    }
    
    if (event.target.textContent === "Deposit") {
        let result;
        txtOldAcc.value = (txtOldAcc.value).toUpperCase();
        if (txtAmount.value >= 0) {
            for (var i=0; i < newController.accountHolder.length; i++) {
                if (newController.accountHolder[i].accountName === txtOldAcc.value) {
                    result=newController.accountHolder[i].deposit(Number(txtAmount.value));
                    displayarea2.textContent = `The amount of $${txtAmount.value} deposited to the account ${txtOldAcc.value}`;
                    displayarea.innerHTML +=`The Account: ${newController.accountHolder[i].accountName}- Current Balance $${result}.<br>`;
 
                } else {
                    displayarea2.textContent="Account entered does not exist. Please try again.";
                } 
            }
        } else {
            displayarea2.textContent="Invalid. Please re-enter.";
            txtAmount.value = 0;
            txtAmount.focus();
        }
            document.getElementById("btnNewAcc").disabled = true;
    }
    if (event.target.textContent === "Withdraw") {

        let result;
        txtOldAcc.value = (txtOldAcc.value).toUpperCase();
        if (txtAmount.value >= 0 ) {
            for (var i=0; i < newController.accountHolder.length; i++) {
                if (newController.accountHolder[i].accountName === txtOldAcc.value) {
                    if (txtAmount.value <= newController.accountHolder[i].initialBalance){
                        result=newController.accountHolder[i].withdraw(Number(txtAmount.value));
                        displayarea2.textContent = `The amount of ${txtAmount.value} withdrawn from the account ${txtOldAcc.value}`;
                        displayarea.innerHTML +=`The Account: ${newController.accountHolder[i].accountName}- Balance ${result}. <br>`;
                    } else {
                         displayarea2.textContent = "Sorry. Withdraw amount must be less than the current balance."
                    }
   
                } else {
                    displayarea2.textContent="Account entered does not exist. Please try again.";
                } 
            }
        } else {
            displayarea2.textContent="Invalid. Please re-enter.";
            txtAmount.value = 0;
            txtAmount.focus();
        }

        document.getElementById("btnNewAcc").disabled = true; 
    }

    if (event.target.textContent === "Exit") {
        functions.removeNewAccDiv(smallcontainer,event.target.parentNode);
        displayarea2.textContent="";
        document.getElementById("btnNewAcc").disabled = false;
    }
    if (event.target.textContent === "Delete") {
        displayarea2.textContent="";
        newController.removeAccount((txtOldAcc.value).toUpperCase());
        displayarea.textContent="";
        newController.showAccName().forEach((acc,index) => {
            //if (index === newController.showAccName().length) {
                displayarea.innerHTML +=  `* Account: ${acc.accountName} - Current Balance: ${acc.initialBalance} <br>`;
            //}
        });
        if (newController.accountHolder.length >= 1) {
            document.getElementById("btnNewAcc").disabled = false;
        }
        functions.removeNewAccDiv(smallcontainer,event.target.parentNode);
    }
    if (event.target.textContent === "Total of All Accounts") {
        let arrBalance=[];
        let result;
        
        if (newController.accountHolder.length > 0) {
            for (var i=0; i < newController.accountHolder.length; i++) {
                    //result=newController.accountHolder[i].balanceOfAllAccounts(Number(newController.accountHolder[i].initialBalance));
                    arrBalance.push(newController.accountHolder[i].initialBalance);
                    console.log(arrBalance);
                    result=newController.balanceOfAllAccounts(arrBalance);
                    
            } 
            displayarea2.textContent=`Total balance of all acocunts is: ${result}`;
        } else {
            displayarea2.textContent="You don't have an account with our bank. Please open an account.";
        }
        //functions.removeNewAccDiv(smallcontainer,oldAcc);
        document.getElementById("btnNewAcc").disabled = false;

    }
    if (event.target.textContent === "Show Highest-Lowest Value Account") {
        let arrBalance=[];
        let arrAccName=[];
        let getHighestAccName;
        let getLowestAccName;
        let highestVal;
        let lowestVal;
        
        if (newController.accountHolder.length > 1) {
            for (var i=0; i < newController.accountHolder.length; i++) {
                // console.log(newController.accountHolder.length);
                    arrBalance.push(newController.accountHolder[i].initialBalance);
                    arrAccName.push(newController.accountHolder[i]);
                    highestVal=newController.highestValAccount(arrBalance);
                    lowestVal=newController.lowestValAccount(arrBalance);        
            } 
            for (var a=0; a < newController.accountHolder.length; a++) {

                if (newController.accountHolder[a].initialBalance === highestVal) {
                    getHighestAccName = newController.accountHolder[a].accountName;
                    return getHighestAccName;
                }
                if (newController.accountHolder[a].initialBalance === lowestVal) {
                    getLowestAccName = newController.accountHolder[a].accountName;
                    return getLowestAccName;
                }
            }
            displayarea2.innerHTML=`The Highest Value is: $${highestVal} from Account Name ${getHighestAccName}.<br>The Lowest Value is: $${lowestVal} from Account Name ${getLowestAccName}.`;
        } else if (newController.accountHolder.length === 1) {
            displayarea2.innerHTML = "You have only one account with our bank."
        } else {
            displayarea2.innerHTML = "You don't have an account with our bank. Please open an account."
        }
        
        document.getElementById("btnNewAcc").disabled = false;

    }
    if (event.target.textContent === "Add New Account") {
        displayarea2.innerHTML="";
        // functions.removeNewAccDiv(smallcontainer,oldAcc);
        document.getElementById("btnAccDetail").disabled = true;
        functions.addnewAccDiv(smallcontainer);
        
    }
 });

// *********************

btnAccDetail.addEventListener("click", function() {
    if (newController.accountHolder.length > 0) {
        document.getElementById("btnNewAcc").disabled = true;
        functions.accDetailDiv(smallcontainer);
        newController.showAccName().forEach((acc,index) => {
            // console.log(index);
            // console.log(newController.showAccName().length);
            if (index === newController.showAccName().length) {
                displayarea.innerHTML +=  `* Account: ${acc.accountName} - Balance: ${acc.initialBalance}`;
            }
        });
    } else {
        displayarea2.textContent = "You don't an acocunt with our bank. Please open an account."
        document.getElementById("btnNewAcc").disabled = false;
    }
    // functions.accDetailDiv(smallcontainer);
})