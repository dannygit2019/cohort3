
class Account {
	constructor(key,accountName, initialBalance) {
		this.key=key;
		this.accountName = accountName;
		this.initialBalance = initialBalance;
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

	showAccName() {
		return `Account: ${this.accountName}. Balance: $${this.initialBalance}`;
	}
}
class AccountController {
	constructor() {
		this.accountHolder = [];
	}

	addAccount(key,accName, initBalance) {
		this.accountHolder.push(new Account(key,accName, initBalance));
	}
	removeAccount(keyAccount) {
		let newAccHolder = this.accountHolder.filter(function (value, index, arr) {
			return index !== keyAccount;
		});
		this.accountHolder = newAccHolder;
		return this.accountHolder;
	}
	balanceOfAllAccounts(acc) {
		let newarray = acc.map((element) => {
			return element.initialBalance;
		});
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		let totalOfBalance = newarray.reduce(reducer);
		return totalOfBalance;
	}
	highestValAccount() {
		return this.accountHolder.sort((a, b) => b.initialBalance - a.initialBalance)[0];
	}
	lowestValAccount() {
		return this.accountHolder.sort((a, b) => a.initialBalance - b.initialBalance)[0];
	}
}

export { Account, AccountController };