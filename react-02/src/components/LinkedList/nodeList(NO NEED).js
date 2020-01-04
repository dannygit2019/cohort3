// import React, { Component } from 'react';
// import './indexList.css';

// class NodeList extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.bgColor="";
// 	}
// 	handleChange = event => {
// 		this.setState({
// 			[event.target.name]: event.target.value,
// 		})
// 	}
	
// 	handleLostFocus =() => {
// 		this.setState({
// 			selectedCardColor: "",
// 		})			
// 	}
// 	handleGotFocus = () => {
// 		this.setState({
// 			[event.target.name]: event.target.value,
// 			selectedCardColor: "yellow"
// 		})
// 	}
//     render () {
// 		console.log(this.props.currentNode)
// 		if ((this.props.index % 2 === 0)) {
// 			this.bgColor ="grey";
// 		} else {
// 			this.bgColor="teal"
// 		};
//         return (
            
//             <div className="nodeCreated">
// 				<p className="pdisplay">{this.props.currentNode.subject}
// 				</p>
//             </div>	
//             // <div className="rightshow" onFocus={this.handleGotFocus} onBlur={this.handleLostFocus} style={{backgroundColor: this.bgColor}} onClick={this.props.removeMessage}>
// 			// 	<p className="pdisplay" id="displayDetail" style={{backgroundColor: this.state.selectedCardColor}}>{this.props.accountHolder[this.props.index].showAccName()}
// 			// 	</p>
//             // </div>	
//         )
//     }
// }

// export {NodeList};