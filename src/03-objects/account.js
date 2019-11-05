
    export class Account {
        
        constructor (accountName, initialBalance) {
            this.accountName=accountName;
            this.initialBalance=initialBalance;
        }
        deposit(amount) {
            
            
                return this.initialBalance += amount;
                   
           
        }
        withdraw(amount) {
            return this.initialBalance -= amount;
        }
        balance() {
            return this.initialBalance;
        }

    }
    export class AccountController {
        constructor() {
            this.accountHolder=[];
            
        }

        addAccount(accName, initBalance) {
            this.accountHolder.push(new Account(accName,initBalance));
            //return this.accountHolder;
        }

        showAccName() {
            return this.accountHolder;
        }

        removeAccount(accToDelete) {
            //***console.log(accToDelete);
            //***console.log(this.accountHolder[0].accountName);
            //***console.log(this.accountHolder);
            let newAccHolder = this.accountHolder.filter(function(value, index, arr){
                return value.accountName !== accToDelete; 
            });
 
            this.accountHolder=newAccHolder;
            // console.log(this.accountHolder);
            return this.accountHolder;
        }
        getAccBalance(acc) {
            let newarray = acc.map(myFunction)
            function myFunction(num) {
                return num.initialBalance;
            }
            this.accountHolder=newarray;
            console.log(this.accountHolder);
            return this.accountHolder;
            //return newarray;
        }
        
        balanceOfAllAccounts(acc) {
            
            let newarray=acc;//this.getAccBalance(acc);
           
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let totalOfBalance=newarray.reduce(reducer); // total balance of all accounts
            
            return totalOfBalance;
        }
        highestValAccount(acc) {
            //return 0;
            let newarray=acc; //this.getAccBalance(acc);
            //console.log(newarray);
            let highestBal = newarray.reduce(function(a, b) {
                return Math.max(a, b);
            });
             return highestBal;
            //return `${highestBal} from ${};
        }
        lowestValAccount(acc) {
            //return 0;
            let newarray=acc; //this.getAccBalance(acc);
            
            let lowestBal = newarray.reduce(function(a, b) {
                return Math.min(a, b);
            });
            return lowestBal;
        }
    }
    export const functions = {
        // New Account card
        addnewAccDiv: (node) => {
           
            let aBreak=document.createElement("br");
            let divForNewAcc=document.createElement("div");
            divForNewAcc.textContent="Creating A New Account";
            divForNewAcc.setAttribute("id","newAccInfo");
            divForNewAcc.setAttribute("class","newAccInfo");
            node.appendChild(divForNewAcc);

            let lblaccountName=document.createElement("label");
            lblaccountName.textContent="Account Name:";
            lblaccountName.setAttribute("class","lblnewAcc");
            divForNewAcc.appendChild(aBreak);
            divForNewAcc.appendChild(lblaccountName);

            let txtaccName = document.createElement("input");
            txtaccName.setAttribute("type","text");
            txtaccName.setAttribute("class","txtnewAcc");
            txtaccName.setAttribute("id","txtAccountType");
            divForNewAcc.appendChild(txtaccName);

            let btnCreate = document.createElement("button");
            btnCreate.setAttribute("class","btnNewAcc");
            btnCreate.setAttribute("id","create");
            btnCreate.textContent="Create";
            divForNewAcc.appendChild(btnCreate);

            let btnCancel = document.createElement("button");
            btnCancel.setAttribute("class","btnNewAcc");
            btnCancel.setAttribute("id","cancel");
            btnCancel.textContent="Cancel";
            divForNewAcc.appendChild(btnCancel);
            return divForNewAcc.childElementCount;
        },
        removeNewAccDiv: (node,currentDiv) => {
        
            currentDiv.remove();
            return node.childElementCount;
        },
    // Making deposit and withdrbalanceOfAllAccountsaw
        accDetailDiv: (node) => {
           
            let aBreak=document.createElement("br");
            let divForOldAcc=document.createElement("div");
            divForOldAcc.textContent="***** Making Transactions *****";
            divForOldAcc.setAttribute("id","oldAcc");
            divForOldAcc.setAttribute("class","newAccInfo old");
            node.appendChild(divForOldAcc);

            let lblaccountName=document.createElement("label");
            lblaccountName.textContent="Enter Account Name:";
            lblaccountName.setAttribute("class","formatLabel");
            divForOldAcc.appendChild(aBreak);
            divForOldAcc.appendChild(lblaccountName);

            // let txtOldAcc = document.createElement("select");
            // //txtaccName.setAttribute("type","text");
            // txtOldAcc.setAttribute("class","txtInput");
            // txtOldAcc.setAttribute("id","txtOldAcc");
            // divForOldAcc.appendChild(txtOldAcc);

            let txtOldAcc = document.createElement("input");
            txtOldAcc.setAttribute("type","text");
            txtOldAcc.setAttribute("class","txtInput");
            txtOldAcc.setAttribute("id","txtOldAcc");
            divForOldAcc.appendChild(txtOldAcc);

            let lblAmount=document.createElement("label");
            lblAmount.textContent="Enter Amount:";
            lblAmount.setAttribute("class","formatLabel");
            divForOldAcc.appendChild(aBreak);
            divForOldAcc.appendChild(lblAmount);

            let txtAmount = document.createElement("input");
            txtAmount.setAttribute("type","number");
            
            txtAmount.setAttribute("class","txtInput");
            txtAmount.setAttribute("id","txtAmount");
            divForOldAcc.appendChild(txtAmount);
            //divForNewAcc.appendChild(btnCancel);
            
            let divforOldbutons=document.createElement("div");
            
            divforOldbutons.setAttribute("id","oldDiv");
            divforOldbutons.setAttribute("class","olddiv");
            divForOldAcc.appendChild(divforOldbutons);

            let deposit = document.createElement("button");
            deposit.setAttribute("class","btnNewAcc");
            deposit.setAttribute("id","deposit");
            deposit.textContent="Deposit";
            
            divForOldAcc.appendChild(deposit);

            let withdraw = document.createElement("button");
            withdraw.setAttribute("class","btnNewAcc");
            withdraw.setAttribute("id","withdraw");
            withdraw.textContent="Withdraw";
            divForOldAcc.appendChild(withdraw);

            let close = document.createElement("button");
            close.setAttribute("class","btnNewAcc");
            close.setAttribute("id","exit");
            close.textContent="Exit";
            divForOldAcc.appendChild(close);

            let remove = document.createElement("button");
            remove.setAttribute("class","btnNewAcc");
            remove.setAttribute("id","delete");
            remove.textContent="Delete";
            divForOldAcc.appendChild(remove);

            return divForOldAcc.childElementCount;
        }
    };

export default functions;
