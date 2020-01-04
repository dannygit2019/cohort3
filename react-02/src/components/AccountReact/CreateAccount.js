import React, { Component } from 'react';
import './index.css';
import money from './images/money.png';
import newimage from './images/newimage.jpg';
import { Account, AccountController } from './AccountandControllerPOJO';
import { AddAccountCard } from './AccountCards';
import { BarChart } from './Summary'


class AccountPage extends Component {
	constructor(props) {
		super(props);
		this.newAccController = new AccountController();
		this.cardDisplayStyle= { backgroundImage: "url(" + newimage + ")", height: "235px", width: "375px" }
		this.state = {
			accSummary:"",
			listForChart: [],
			hideThreeDiv: false,
			hideChart: true,
			keyCard: 0,
			balance: 0,
			accName: "",
			error: "",
			titleCreated: "Account Details",
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
			error: "",
		})
	}
	handleSubmit = (event) => {
		event.preventDefault();
		let existList = false;
		if (this.newAccController.accountHolder.length > 0) { existList = true };
		switch (event.target.name) {
			case "btnCreate":
				let duplicateAcct = false;
				if (this.newAccController.accountHolder.length > 0) {
					let findAccount = this.newAccController.accountHolder.filter((account) => {
						return account.accountName === (this.state.accName).toUpperCase()
					})
					if (findAccount.length === 1) { duplicateAcct = true }
					else { duplicateAcct = false }
				}
				if (duplicateAcct === true) {
					this.setState({
						error: "Account Name already existed. Please try again!",
						accName: ''
					})
				} else {
						if (this.state.accName !== "") {
							this.newAccController.addAccount(this.state.keyCard, (this.state.accName).toUpperCase(), Number(this.state.balance));
							this.setState({
								balance: 0,
								accName: "",
								keyCard: this.state.keyCard + 1,
							})
						} else {
							this.setState({
								error: "Account Name is Mandatory. Please enter!"
							});
						}
				}
				break;
			case "btnClear":
				this.setState({
					balance: 0,
					accName: "",
					error: "",
				})
				break;
			case "btnTotal":
				let tempTotalMessage="";
				if (existList === true) {
					let totalAll = this.newAccController.balanceOfAllAccounts(this.newAccController.accountHolder);
					tempTotalMessage=`Total Balance of All Accounts is: $${totalAll}`;
				} else {
					tempTotalMessage="Sorry. No Accounts found in our system.";
				}
				this.setState({
					accSummary: tempTotalMessage
				});
				break;
			case "btnHighest":
				let highestMessage = "";
				let highestBal = {
					accountName: "",
					initialBalance: ""
				};
				if (existList === true) {
					highestBal = this.newAccController.highestValAccount();
					this.newAccController.accountHolder=this.newAccController.accountHolder.sort((a,b) => {return a.key - b.key})
					highestMessage = `The Account with Highest Balance is: ${highestBal.accountName} - $${highestBal.initialBalance}`;
				} else {
					highestMessage = "Sorry. No Accounts found in our system.";
				}
				this.setState({
					accSummary: highestMessage
				});
				break;
			case "btnLowest":
				let lowestMessage = "";
				let lowestBal = {
					accountName: "",
					initialBalance: ""
				};
				if (existList === true) {
					lowestBal = this.newAccController.lowestValAccount();
					this.newAccController.accountHolder=this.newAccController.accountHolder.sort((a,b) => {return a.key - b.key})
					lowestMessage = `The Account with Lowest Balance is: ${lowestBal.accountName} - $${lowestBal.initialBalance}`;
				} else {
					lowestMessage = "Sorry. No Accounts found in our system."
				}
				this.setState({
					accSummary: lowestMessage
				});
				break;
			case "btnChart":
				if (existList === true) {
					this.setState({
						listForChart: Object.assign([], this.newAccController.accountHolder),
						hideChart: false,
						hideThreeDiv: true
					});
				} else {
					this.setState({
						accSummary: "Sorry. No Accounts found in our system."
					});
				}
				break;
		}
	}
	deleteAccount = (index) => {
		const toConfirm = confirm("Would you like to delete this Account?");
		if (toConfirm) {
			this.newAccController.removeAccount(index);
			if (this.newAccController.accountHolder.length < 1) {
				this.setState({
					accName: "",
					balance: "",
					keyCard: this.state.keyCard + 1,
				});
			}
		} else {
			alert("Deleting the account has been CANCELED.");
		}
	}

	removeErrorMessage = () => {
		this.setState({
			error: "",
		})
	}

	removeMessage = () => {
		this.setState({
			accSummary: "",
		})
	}
	exitChart = () => {
		this.setState({
			hideChart: true,
			hideThreeDiv: false
		})
	}
	render() {
		let cards = this.newAccController.accountHolder.map((card, i) => {
			return <AddAccountCard removeMessage={this.removeMessage} accountHolder={this.newAccController.accountHolder} deleteAccount={this.deleteAccount} index={i} key={i} />
		});
		return (
			<div className="bigWindow">
				<div className="App" >
					<h2 className="h22"><span className="spanshadow">Welcome to DT Bank</span></h2>
					<div className="marquee"><p>Developed By Danny Tran - Learner @ <span style={{color: "yellow"}}>EvolveU - GREAT TEAM!</span></p></div>
				</div>
				<div hidden={this.state.hideChart}><BarChart toHide={this.exitChart} array={this.state.listForChart} /></div>
					<div hidden={this.state.hideThreeDiv} style={{width: "98%",marginLeft: "",marginRight: "", backgroundColor:"",height: '235px'}}>
						<div className="leftSide lcover" id="lside">
							<div className="leftdisplayarea" id="displayarea" onClick={this.removeErrorMessage}>
								<div className="summaryBoard">Summary Board</div>
								<div className="buttonsContainer">
									<button name="btnTotal" className="btnleft" onClick={this.handleSubmit}>Total Balance (All Accounts)</button>
									<button name="btnHighest" className="btnleft" onClick={this.handleSubmit}>Highest Balance</button>
									<button name="btnLowest" className="btnleft" onClick={this.handleSubmit}>Lowest Balance</button>
									{/* <input type="submit" value="Total Balance" name="btnTotal" className="btnleft" onClick={this.handleSubmit} />
									<input type="submit" value="Highest Acct." name="btnHighest" className="btnleft" onClick={this.handleSubmit} />
									<input type="submit" value="Lowest Acct." name="btnLowest" className="btnleft" onClick={this.handleSubmit} /> */}
								</div>
								<p className="pLeft" id="leftmessage">{this.state.accSummary}</p><br></br><br></br>
								{/* <br></br><br></br> */}
								<input type="submit" value="View Chart" name="btnChart" className="btnAcctChart" onClick={this.handleSubmit} />
							</div>
						</div>
						<div className="leftSide midside" id="midside" >
							<div onClick={this.removeMessage} className="leftdisplayarea midcreate" id="displayarea1" style={{ backgroundImage: "url(" + money + ")", height: "235px", width: "390px" }}>
								<h3>$$ Create a New Account $$</h3>
								<label className="lblAcct">
									Enter Account Name:
										<input type="text" autoFocus className="acct" name="accName" value={this.state.accName} onChange={this.handleChange} />
								</label>
								<br></br>
								<label className="lblAcct">
									Enter Initial Balance:
										<input type="number" className="acct" name="balance" value={this.state.balance} onChange={this.handleChange} />
								</label>
								<br></br>
								<p className="forCreateAccount">{this.state.error}</p>
								<br></br>
								<input type="submit" value="Clear" name="btnClear" className="btnAcct" onClick={this.handleSubmit} />
								<input type="submit" value="Create" name="btnCreate" className="btnAcct" onClick={this.handleSubmit} />
							</div>
						</div>
						<div className="leftSide rightside" id="rightside" style={this.cardDisplayStyle} onClick={this.removeErrorMessage} >
							{/* <h4 className="titleCreated" style={{color: "yellow"}}>{this.state.titleCreated}</h4>
							{cards} */}
						</div>	
					</div>
				<div className="cardDisplay" hidden={this.state.hideThreeDiv} onClick={this.removeErrorMessage} >
					<h4 className="titleCreated" style={{color: "yellow"}}>{this.state.titleCreated}</h4>
					{cards}
				</div>
			</div>	
		);
	}
}

export { AccountPage };