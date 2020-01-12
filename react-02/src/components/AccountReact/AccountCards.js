import React, { Component,useContext } from 'react';
import './index.css';
import money from './images/money.png';
import newimage from './images/newimage.jpg';
import { AccountController } from './AccountandControllerPOJO';

import {ThemeContext} from '../Context/context'

class AddAccountCard extends Component {
	static contextType = ThemeContext;
	componentDidMount() {
		const useFontColor = this.context.fontColor;
		this.setState({
			fColor: useFontColor
		})
	}
	constructor(props) {
		super(props);
		this.bgColor="";
		this.errorStr="Error Message: ";
		
		this.state = {
			balUpdate: "",
			message: "",
			selectedCardColor: "",
			fColor: ""
		}		
	}
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
			message:""
		})
	}
	handleWithdraw = (index) => {
		let withdrawMessage="";
		if (this.state.balUpdate === "") {
			withdrawMessage="It can't be empty. Please enter a number!"
		} else {
			if (this.state.balUpdate < 0) {
				withdrawMessage=`The amount can not be negative ($${this.state.balUpdate}). Please try again.`;
			}  else {
				if (this.state.balUpdate > this.props.accountHolder[index].initialBalance) {
					withdrawMessage=`Insufficient fund to withdraw. Please try again.`;
				} else {
					this.props.accountHolder[index].withdraw(Number(this.state.balUpdate));
					withdrawMessage=`You successfully withdrew $${this.state.balUpdate} from the account.`;
				}
			}
		}
		this.setState ({
			message: this.errorStr + withdrawMessage,
			balUpdate: ""
		})
	}
	handleDeposit = (index) => {
		let depositMessage="";
		if (this.state.balUpdate === ""){
			depositMessage="It can't be empty. Please enter a number!";
		} else {
			if (this.state.balUpdate < 0) {
				depositMessage=` The amount can not be negative ($${this.state.balUpdate}). Please try again.`;
			} else {
				this.props.accountHolder[index].deposit(Number(this.state.balUpdate));
				depositMessage=` You successfully deposited $${this.state.balUpdate} into the account.`;
			}
		}
		this.setState ({
			message: this.errorStr +  depositMessage,
			balUpdate: ""
		})
	}
	handleLostFocus =() => {
		this.setState({
			selectedCardColor: "",
			message:""
		})			
	}
	handleGotFocus = () => {
		this.setState({
			[event.target.name]: event.target.value,
			message: "",
			selectedCardColor: "yellow"
		})
	}
    render () {
		if ((this.props.index % 2 === 0)) {
			this.bgColor ="grey";
		} else {
			this.bgColor="teal"
		};
        return (
            
			// <div className="rightshow" onFocus={this.handleGotFocus} onBlur={this.handleLostFocus} style={{backgroundColor: this.bgColor}} onClick={this.props.removeMessage}>
			<div className="rightshow" onFocus={this.handleGotFocus} onBlur={this.handleLostFocus} style={{backgroundColor: this.bgColor}} onClick={this.props.removeMessage}>
				{/* <p className="pdisplay" id="displayDetail" style={{color: this.state.fColor, backgroundColor: this.state.selectedCardColor}}>{this.props.accountHolder[this.props.index].showAccName()} */}
				<p className="pdisplay" id="displayDetail" style={{color: this.state.fColor, backgroundColor: this.state.selectedCardColor}}>{this.props.accountHolder[this.props.index].showAccName()}
				<span className="errorDisplay" >{this.state.message}</span>
				</p>
                <label className="lblmoving">
					Deposit or Withdraw $:
						<input type="number" className="rightPop" name="balUpdate" value={this.state.balUpdate}  onChange={this.handleChange}/>	
				</label>
				{/* <span className="errorDisplay" >{this.state.message}</span> */}
				<input type="submit" value="Delete" style={{backgroundColor: this.bgColor}} name="btnDelete"  className="btnDetail" onClick={() => {this.props.deleteAccount(this.props.index)}}/>
				<input type="submit" value="Withdraw" style={{backgroundColor: this.bgColor}} name="btnWithdraw"  className="btnDetail" onClick={() => {this.handleWithdraw(this.props.index)}}/>
				<input type="submit" value="Deposit" style={{backgroundColor: this.bgColor}} name="btnDeposit" className="btnDetail"onClick={() => {this.handleDeposit(this.props.index)}}/>
            </div>	
        )
    }
}

export {AddAccountCard};