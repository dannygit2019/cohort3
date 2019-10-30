import Account from './account.js'


//let newAccount= new Account(txtAccountType.value,Number(txtInitial.value));
deposit.addEventListener("click", function () {
    const newAccount= new Account(txtAccountType.value,Number(txtInitial.value));
    newAccount.deposit(Number(txtamount.value));
    txtBalance.value=newAccount.balance();
    
});
withdraw.addEventListener("click", function () {
    const newAccount= new Account(txtAccountType.value,Number(txtInitial.value));
    newAccount.withdraw(Number(txtamount.value));
    
    txtBalance.value=newAccount.balance();
    
});