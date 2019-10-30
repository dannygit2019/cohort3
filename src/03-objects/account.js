
    export class Account {
        
        constructor (accountName, initialBalance) {
            this.accountName=accountName;
            this.initialBalance=initialBalance;
        }
        deposit(amount) {
            console.log("clicked");
            this.initialBalance += amount;   
        }
        withdraw(amount) {
            this.initialBalance -= amount;
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
            //console.log(this.accountHolder);
            return this.accountHolder;
        }
        removeAccount(accToDelete) {
            //***console.log(accToDelete);
            //***console.log(this.accountHolder[0].accountName);
            //***console.log(this.accountHolder);
            let newAccHolder = this.accountHolder.filter(function(value, index, arr){
                return value.accountName !== accToDelete; 
            });
            //***console.log(newAccHolder);
            this.accountHolder=newAccHolder;
            //console.log(this.accountHolder);
            //***this.accountHolder.push(newAccHolder);
            return this.accountHolder;
        }
        getAccBalance(acc) {
            let newarray = acc.map(myFunction)
            function myFunction(num) {
                return num.initialBalance;
            }
            return newarray;
        }
        balanceOfAllAccounts(acc) {
            let newarray=this.getAccBalance(acc);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let totalOfBalance=newarray.reduce(reducer); // total balance of all accounts
            return totalOfBalance;
        }
        highestValAccount(acc) {
            //return 0;
            let newarray=this.getAccBalance(acc);
            
            let highestBal = newarray.reduce(function(a, b) {
                return Math.max(a, b);
            });
            return highestBal;
        }
        lowestValAccount(acc) {
            //return 0;
            let newarray=this.getAccBalance(acc);
            
            let lowestBal = newarray.reduce(function(a, b) {
                return Math.min(a, b);
            });
            return lowestBal;
        }
    }

//export default Account, AccountController;
