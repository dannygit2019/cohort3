import { Account, AccountController, functions } from './account.js'
//import functions from './account.js'

test('testing a class Account', () => {
    const checkingAccount= new Account("Dan",10);
    
    // expect(newAccount)
    //     .toBeInstanceOf(Account);
    //expect(newAccount.deposit(10)).toBe(10);
    checkingAccount.deposit(10);
    expect(checkingAccount.balance()).toBe(20);
    
    checkingAccount.withdraw(5);
    expect(checkingAccount.balance()).toBe(15);
});
test('testing a class AccountController', () => {
    const newAccount= new AccountController();
    
    //expect(newAccount.addAccount("New",10)).toEqual([{"accountName": "New", "initialBalance": 10}]);
    newAccount.addAccount("New",10);
    expect(newAccount.showAccName()).toEqual([{ accountName: 'New', initialBalance: 10 }]);
    newAccount.addAccount("New1",20);
    //expect(newAccount.addAccount("New1",20)).toEqual([{"accountName": "New", "initialBalance": 10},
    //                                    {"accountName": "New1","initialBalance": 20}]);
    newAccount.addAccount("New2",30);
    // expect(newAccount.addAccount("New2",30)).toEqual([{"accountName": "New", "initialBalance": 10},
    //                                     {"accountName": "New1","initialBalance": 20},
    //                                     {"accountName": "New2","initialBalance": 30}]);
    // console.log(newAccount);
    expect(newAccount.removeAccount("New1")).toEqual([{"accountName": "New", "initialBalance": 10},
                                                    {"accountName": "New2","initialBalance": 30}]);
//    console.log(newAccount.accountHolder.length);
    expect(newAccount.getAccBalance(newAccount.accountHolder)).toEqual([10,30]);
    // console.log(newAccount.accountHolder);
    expect(newAccount.balanceOfAllAccounts(newAccount.accountHolder)).toEqual(40);
    expect(newAccount.highestValAccount(newAccount.accountHolder)).toEqual(30);
    expect(newAccount.lowestValAccount(newAccount.accountHolder)).toEqual(10);
});
  // testing DOM
test('testing addNewAccount div', () => {
    const newParent= document.createElement("div");
    newParent.setAttribute("id","smallcontainer");
    const newCard=document.createElement("div");
    newCard.setAttribute("class","newAccInfo");
   
    expect(functions.addnewAccDiv(newParent)).toEqual(5);
    expect(functions.removeNewAccDiv(newParent,newCard)).toEqual(1);
    
    
});

test('testing Show accounts div', () => {
    const newParent= document.createElement("div");
    newParent.setAttribute("id","smallcontainer");
    const newCard=document.createElement("div");
    newCard.setAttribute("class","newAccInfo old");
   
    expect(functions.accDetailDiv(newParent)).toEqual(10);
   // expect(functions.removeNewAccDiv(newParent,newCard)).toEqual(1);
    
    
});