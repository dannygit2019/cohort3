import React, { Component } from 'react';
import './index.css';
import money from './images/money.png';
import newimage from './images/newimage.jpg';
import { AccountController } from './AccountandControllerPOJO';



class AddAccountCard extends Component {
	constructor(props) {
		super(props);
		this.bgColor="";
		this.state = {
			balUpdate: 0,
		}
	}
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}
	handleWithdraw = (index) => {
		let withdrawMessage="";
		if (this.state.balUpdate < 0) {
			this.setState ({
				balUpdate: 0
			})
			withdrawMessage=`The amount can not be negative ($${this.state.balUpdate}). Please try again.`;
		}  else {
			if (this.state.balUpdate > this.props.accountHolder[index].initialBalance) {
				this.setState ({
					//message: "The amount can not be more than current balance. Please try again",
					balUpdate: 0
				})
				withdrawMessage=`Insufficient fund to withdraw. Current Bal $${this.props.accountHolder[index].initialBalance}. Please try again.`;
			} else {
				this.props.accountHolder[index].withdraw(Number(this.state.balUpdate));
				this.setState ({
					//message: `You successfully withdrew ${this.state.balUpdate} from the account.`,
					balUpdate: 0
				})
				withdrawMessage=`You successfully withdrew $${this.state.balUpdate} from the account.`;
			}
			
		}
		alert(withdrawMessage);
	}
	handleDeposit = (index) => {
		let depositMessage="";
		if (this.state.balUpdate < 0) {
			this.setState ({
				// message: "The amount can not be negative. Please try again",
				balUpdate: 0
			})
			depositMessage=`The amount can not be negative ($${this.state.balUpdate}). Please try again.`;
		} else {
			this.props.accountHolder[index].deposit(Number(this.state.balUpdate));
			this.setState({
				// message: `You successfully deposited ${this.state.balUpdate} into the account.`,
				balUpdate: 0
			})
			depositMessage=`You successfully deposited $${this.state.balUpdate} into the account.`;
		}
		alert(depositMessage);
	}
    render () {
		if ((this.props.index % 2 === 0)) {
			this.bgColor ="teal";
		} else {
			//this.bgColor ="rgb(1, 66, 66)";
			this.bgColor="grey"
		};
        return (
            
            <div className="rightshow" style={{backgroundColor: this.bgColor}} onClick={this.props.removeMessage}>
				{/* <p hidden={true}>{this.props.accName}</p><br></br> */}
				{/* <p className="pdisplay" id="displayDetail" >{this.props.detail}</p><br></br> DO NOT USE THIS */}
				<p className="pdisplay" id="displayDetail" >{this.props.accountHolder[this.props.index].showAccName()}</p><br></br>
				{/* <p className="pdisplay pBig" id="displayConfirmation" >{this.state.message}</p><br></br> */}
                <label className="lblmoving">
					Deposit or Withdraw Amount $:
						<input type="number" className="rightPop" name="balUpdate" value={this.state.balUpdate}  onChange={this.handleChange}/>
						</label>
						<br></br>
						<input type="submit" value="Delete" style={{backgroundColor: this.bgColor}} name="btnDelete"  className="btnDetail" onClick={() => {this.props.deleteAccount(this.props.index)}}/>
						<input type="submit" value="Withdraw" style={{backgroundColor: this.bgColor}} name="btnWithdraw"  className="btnDetail" onClick={() => {this.handleWithdraw(this.props.index)}}/>
						<input type="submit" value="Deposit" style={{backgroundColor: this.bgColor}} name="btnDeposit" className="btnDetail"onClick={() => {this.handleDeposit(this.props.index)}}/>
            </div>	
        )
    }
}

export {AddAccountCard};