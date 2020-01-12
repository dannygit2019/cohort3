import React from 'react';

const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
    constructor () {
        super ()
        this.state = {
            fontColor: "brown",
            bgColor: "white"
        }
    }

    changeFontColor = (event) => { // font color of a node created
        this.setState({fontColor: event.target.value});
    }
    changeBGColor = (event) => { // background color of a node created
        this.setState({bgColor: event.target.value});
    }
    render() {
        return (
        // value={{..this.state}}: get all properties inside the state (constructor() {})
        <ThemeContext.Provider value={{...this.state, changeFontColor : this.changeFontColor, changeBGColor : this.changeBGColor}} >
            {/* use this.props.children to indicate children compoments such as LinkedList, FIFO components */}
            {this.props.children} 
        </ThemeContext.Provider>
        )
    }
}

export {ThemeContext, ThemeProvider}