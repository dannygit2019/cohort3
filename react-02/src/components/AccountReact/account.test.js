import { Account, AccountController, functions } from './AccountandControllerPOJO'
//import functions from './account.js'

test('testing a class Account', () => {
    const checkingAccount= new Account(1,"Dan",10);
    expect(checkingAccount.showAccName()).toEqual("Account: Dan. Balance: $10");
    checkingAccount.deposit(10);
    expect(checkingAccount.balance()).toBe(20);
    
    checkingAccount.withdraw(5);
    expect(checkingAccount.balance()).toBe(15);
});
test('testing a class AccountController', () => {
    const newAccount= new AccountController();
    newAccount.addAccount(1,"NEW",10);
  
    expect(newAccount.accountHolder[0].showAccName()).toEqual("Account: NEW. Balance: $10");
    newAccount.addAccount(2,"NEW1",20);
    newAccount.addAccount(3,"NEW2",30);
    console.log(newAccount.accountHolder);
    expect(newAccount.removeAccount(1)).toEqual([{"key": 1, "accountName": "NEW", "initialBalance": 10},
                                                    {"key": 3, "accountName": "NEW2","initialBalance": 30}]);
});
test('testing a class AccountController total balance', () => {
    const newAccount= new AccountController();
    newAccount.addAccount(1,"NEW",10);
    newAccount.addAccount(2,"NEW1",20);
    newAccount.addAccount(3,"NEW2",30);
    expect(newAccount.balanceOfAllAccounts(newAccount.accountHolder)).toEqual(60);
    expect(newAccount.highestValAccount().initialBalance).toEqual(30);
    expect(newAccount.lowestValAccount().initialBalance).toEqual(10);
});

