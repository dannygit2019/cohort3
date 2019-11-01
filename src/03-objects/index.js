import { Account, AccountController } from './account.js'
import functions from './account.js'


/////let newAccount= new Account(txtAccountType.value,Number(txtInitial.value));
// deposit.addEventListener("click", function () {
//     const newAccount= new Account(txtAccountType.value,Number(txtInitial.value));
//     newAccount.deposit(Number(txtamount.value));
//     txtBalance.value=newAccount.balance();
    
// });
// withdraw.addEventListener("click", function () {
//     const newAccount= new Account(txtAccountType.value,Number(txtInitial.value));
//     newAccount.withdraw(Number(txtamount.value));
    
//     txtBalance.value=newAccount.balance();
    
// });
//******** creating new account
const newController = new AccountController();

smallcontainer.addEventListener('click', (event) => {
    // const newController = new AccountController();
    if (event.target.textContent === "Create") {
        
        newController.addAccount((txtAccountType.value).toUpperCase(),0);
        newController.showAccName().forEach((acc,index) => {
            if (index === newController.showAccName().length - 1) {
                displayarea.innerHTML +=  `* Account: ${acc.accountName} - Balance: ${acc.initialBalance} <br>`;
            }
        });
        
        functions.removeNewAccDiv(smallcontainer,event.target.parentNode);
        document.getElementById("btnAccDetail").disabled = false;

    }
    if (event.target.textContent === "Cancel") {
        functions.removeNewAccDiv(smallcontainer,event.target.parentNode);
        displayarea2.textContent="Creating a new account has been canceled.";
        document.getElementById("btnAccDetail").disabled = false;
        
    }
    
    if (event.target.textContent === "Deposit") {
        //functions.removeNewAccDiv(smallcontainer,event.target.parentNode);
        
        //displayarea.textContent="Creating a new account has been canceled.";
        console.log(newController);
        console.log(newController.accountHolder);
        let result;
        let message;
        
        for (var i=0; i < newController.accountHolder.length; i++) {
            if (newController.accountHolder[i].accountName === txtOldAcc.value) {
                // console.log("matched");
                // console.log(newController.accountHolder[i]);
                result=newController.accountHolder[i].deposit(Number(txtAmount.value));
                displayarea2.textContent = `The amount of ${txtAmount.value} deposited to the account ${txtOldAcc.value}`;
                displayarea.innerHTML +=`The Account: ${newController.accountHolder[i].accountName}- Curent Balance ${result}.<br>`;
                return result;
            } //else {
                displayarea2.textContent="Account entered does not exist. Please try again.";
            //} 
        } 
        document.getElementById("btnNewAcc").disabled = false;
    }
    if (event.target.textContent === "Withdraw") {
        console.log(newController);
        console.log(newController.accountHolder);
        let result;
        for (var i=0; i < newController.accountHolder.length; i++) {
            if (newController.accountHolder[i].accountName === txtOldAcc.value) {
                result=newController.accountHolder[i].withdraw(Number(txtAmount.value));
                displayarea2.textContent = `The amount of ${txtAmount.value} withdrawn from the account ${txtOldAcc.value}`;
                displayarea.innerHTML +=`The Account: ${newController.accountHolder[i].accountName}- Balance ${result}. <br>`;
                return result;
            } //else {
                displayarea2.textContent="Account entered does not exist. Please try again.";
            //} 
        }
        document.getElementById("btnNewAcc").disabled = false; 
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
        document.getElementById("btnNewAcc").disabled = false;
        functions.removeNewAccDiv(smallcontainer,event.target.parentNode);
    }
    if (event.target.textContent === "Total of All Accounts") {
        let arrBalance=[];
        let result;
        for (var i=0; i < newController.accountHolder.length; i++) {
                //result=newController.accountHolder[i].balanceOfAllAccounts(Number(newController.accountHolder[i].initialBalance));
                arrBalance.push(newController.accountHolder[i].initialBalance);
                console.log(arrBalance);
                result=newController.balanceOfAllAccounts(arrBalance);
                
        } 
        displayarea2.textContent=`Total balance of all acocunts is: ${result}`;
        functions.removeNewAccDiv(smallcontainer,oldAcc);


    }
    if (event.target.textContent === "Show Highest-Lowest Value Account") {
        let arrBalance=[];
        let arrAccName=[];
        let getHighestAccName;
        let getLowestAccName;
        let highestVal;
        let lowestVal;
        for (var i=0; i < newController.accountHolder.length; i++) {
                //result=newController.accountHolder[i].balanceOfAllAccounts(Number(newController.accountHolder[i].initialBalance));
                arrBalance.push(newController.accountHolder[i].initialBalance);
                arrAccName.push(newController.accountHolder[i]);
                // console.log(arrBalance);
                // console.log(arrAccName);
                highestVal=newController.highestValAccount(arrBalance);
                lowestVal=newController.lowestValAccount(arrBalance);
                console.log(highestVal);

                //lowestVal=`${newController.lowestValAccount(arrBalance)} from Account Name ${newController.accountHolder[i].accountName}`;
                
        } 
        for (var a=0; a < newController.accountHolder.length; a++) {
            if (newController.accountHolder[a].initialBalance === highestVal) {
                getHighestAccName = newController.accountHolder[a].accountName;
                console.log(getHighestAccName);
                //return getHighestAccName;
            }
            if (newController.accountHolder[a].initialBalance === lowestVal) {
                getLowestAccName = newController.accountHolder[a].accountName;
                console.log(getLowestAccName);
                //return getLowestAccName;
            }
        }
        //console.log(getAccName);
        displayarea2.innerHTML=`The Highest Value is: $${highestVal} from Account Name ${getHighestAccName}.<br>The Lowest Value is: $${lowestVal} from Account Name ${getLowestAccName}.`;
        functions.removeNewAccDiv(smallcontainer,oldAcc);


    }
    if (event.target.textContent === "Add New Account") {
        displayarea2.innerHTML="";
        // functions.removeNewAccDiv(smallcontainer,oldAcc);
        document.getElementById("btnAccDetail").disabled = true;
        functions.addnewAccDiv(smallcontainer);
        
    }
 });

// *********************
// btnNewAcc.addEventListener("click", function() {
//     displayarea2.innerHTML="";
//     functions.addnewAccDiv(smallcontainer);
//     functions.removeNewAccDiv(smallcontainer,oldAcc);

// })
btnAccDetail.addEventListener("click", function() {
    document.getElementById("btnNewAcc").disabled = true;
    newController.showAccName().forEach((acc,index) => {
        console.log(index);
        console.log(newController.showAccName().length);
        
        if (index === newController.showAccName().length) {

            displayarea.innerHTML +=  `* Account: ${acc.accountName} - Balance: ${acc.initialBalance}`;
        }
    });

    functions.accDetailDiv(smallcontainer);
    


})