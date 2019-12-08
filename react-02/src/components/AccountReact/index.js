// import { postData, City, Community } from './community.js'
// import functions from './community.js'

import { Account, AccountController, functions } from './account.js'




const newAccController = new AccountController();

let acctSelected;
let currentAcct, currentAcctName;


btnCreate.addEventListener("click", function () {

	document.getElementById("pmessage1").textContent="";
	if (txtInitBal.value===""){
		txtInitBal.value=0;
	}

	if (txtAcctName.value !== "") {
		
		let matchName=false;


		for (let i=0; i < newAccController.accountHolder.length; i++) {
			// if (newCommunity.CityList[i].key.Name === (txtCityName.value).toUpperCase()) {
			
			if (newAccController.accountHolder[i].accountName === (txtAcctName.value).toUpperCase()) {
				matchName =true;
				
				document.getElementById("pmessage1").textContent = "The Account you entered already existed. Please try again.";
				txtAcctName.value="";
				txtAcctName.focus();
				return matchName;
			}
		}
		if (!matchName) {
	
			newAccController.addAccount((txtAcctName.value).toUpperCase(),Number(txtInitBal.value));
			// document.getElementById("pmessage").innerText = ` The Account ${(txtAcctName.value).toUpperCase()} successfully created.`;
			const newAccount = new Account((txtAcctName.value).toUpperCase(),Number(txtInitBal.value));
			let message =newAccount.showAccName();
			pmessage1.textContent = `The Account ${(txtAcctName.value).toUpperCase()} successfully created.`;
			functions.addCard(document.getElementById("rightside"),message, (txtAcctName.value).toUpperCase());
			document.getElementById('rightside').style.height = "auto";
			document.getElementById('rightside').style.backgroundImage = '';
		}
	} else {
		document.getElementById("pmessage1").textContent = "Account Name is mandatory.";
		txtAcctName.focus();
	}

  });

  btnClear.addEventListener("click", function() {
	  txtAcctName.value="";
	  txtInitBal.value=0;
	  txtAcctName.focus();
	  pmessage1.textContent="";
  });
  displayarea1.addEventListener('click', (event) => {
	leftmessage.textContent="";
	
	document.getElementById("pmessage1").textContent = "";
  });

  rightside.addEventListener('click', (event) => {
	leftmessage.textContent="";
	document.getElementById("pmessage1").textContent = "";
	if (event.target.textContent === "Deposit") {
		currentAcct = event.toElement.parentElement;
		currentAcctName = currentAcct.children[0].textContent;
		let balInput=currentAcct.getElementsByClassName("rightPop")[0];
		currentAcct.children[2].textContent = "";
		if (balInput.value === "") {
			balInput.value=0;
		}
		if (Number(balInput.value) < 0) {
			currentAcct.children[2].textContent = "The amount can not be less than 0";
			balInput.value=0;
			balInput.focus();
		} else {
			console.log(balInput.value);
			acctSelected= newAccController.getacctName(currentAcctName);
			acctSelected.deposit(Number(balInput.value));
			currentAcct.children[2].textContent = "Balance successfully DEPOSITED.";
			currentAcct.children[1].textContent = acctSelected.showAccName();
			balInput.value=0;	
		}
	}
	if (event.target.textContent === "Withdraw") {
		currentAcct = event.toElement.parentElement;
		currentAcctName = currentAcct.children[0].textContent;
		let balInput=currentAcct.getElementsByClassName("rightPop")[0];
		currentAcct.children[2].textContent = "";
		if (balInput.value === "") {
			balInput.value=0;
		}
		if (Number(balInput.value) < 0) {
			currentAcct.children[2].textContent = "Balance can not be less than 0";
			balInput.value=0;
			balInput.focus();
		} else {
			acctSelected= newAccController.getacctName(currentAcctName);	
			let currentBal=acctSelected.initialBalance;
			if (balInput.value > currentBal) {
				currentAcct.children[2].textContent = "Withdraw can not be over Current Balance. Please try again!";
				balInput.value=0;
				balInput.focus();
			} else {
				acctSelected.withdraw(Number(balInput.value));
				currentAcct.children[2].textContent = "Balance successfully WITHDRAWN.";
				currentAcct.children[1].textContent = acctSelected.showAccName();
				balInput.value=0;
			}
		}
	
	}
	if (event.target.textContent === "Delete") {
		currentAcct = event.toElement.parentElement;
		currentAcctName = currentAcct.children[0].textContent;
		const toConfirm = confirm("Would you like to delete this Account?");
		if (toConfirm == true) {
			newAccController.removeAccount(currentAcctName);
			functions.deleteCurrentCard(document.getElementById("rightside"),event.target.parentNode);
			alert("The Account successfully deleted.");
		} else {
			alert("The request has been canceled.")
		}
		if (newAccController.accountHolder.length < 1) {
			document.getElementById('rightside').style.height = "250px";
			document.getElementById('rightside').style.backgroundImage = "url('./images/newimage.jpg')";
			document.getElementById('rightside').style.backgroundRepeat = "no-repeat";
		}
	}
 });

 btnHighest.addEventListener("click", function () {
	if (newAccController.accountHolder.length > 0) {
		leftmessage.textContent=`The Lowest Balance is: $${newAccController.highestValAccount().initialBalance}. Account Name: ${newAccController.highestValAccount().accountName}`;
	} else {
		leftmessage.textContent=" No information to be displayed."
	}
 })
 btnLowest.addEventListener("click", function () {
	if (newAccController.accountHolder.length > 0) {
		leftmessage.textContent=`The Lowest Balance is: $${newAccController.lowestValAccount().initialBalance}. Account Name: ${newAccController.lowestValAccount().accountName}`;
	} else {
		leftmessage.textContent=" No information to be displayed."
	}
 })
 btnTotal.addEventListener("click", function () {
	if (newAccController.accountHolder.length > 0) {
		leftmessage.textContent=`The Total Balance of All Accounts is: $${newAccController.balanceOfAllAccounts(newAccController.accountHolder)}.`;
	} else {
		leftmessage.textContent=" No information to be displayed."
	}	
 })



