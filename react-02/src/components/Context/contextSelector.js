import React, { Component } from 'react';
import './indexContext.css';
import {ThemeContext, ThemeProvider} from './context.js'


class Theme extends Component {
    static contextType = ThemeContext; //use this in a class, which is a STATIC variable on the class.
    
    render() {
        
        return (
            <div className="bigWindow">
                <div className="App">
                    <h2 className="h22"><span className="spanshadow">Welcome to Theme Setting</span></h2>
                    <div className="marquee"><p>Developed By Danny Tran - Learner @ <span style={{ color: "yellow" }}>EvolveU - GREAT TEAM!</span></p></div>
                    <div className="linkedlist">
                        <div className="listContent">
                            <br></br>
                            <label className="lbllist">
                                Select Font Color:
                                <select value={this.context.fontColor} onChange={this.context.changeFontColor}>
                                    <option value="Brown">Brown(Default)</option>
                                    <option value="purple">Purple</option>
                                    <option value="blue">Blue</option>
                                </select>
                            </label>
                            <br></br><br></br>
                            <label className="lbllist">
                                Select BG Color:
                                <select value={this.context.bgColor} onChange={this.context.changeBGColor}>
                                    <option value="White">White(Default)</option>
                                    <option value="lightskyblue">Light-SkyBlue</option>
                                    <option value="lightGrey">light-Grey</option>
                                </select>
                            </label>
                            <br></br><br></br>
                            <div style={{float:"left",height:90, backgroundColor:"white", color:"brown"}}>
                            <p style={{fontSize: 16, fontWeight:"bold", float:"left"}}>NOTES:</p><br></br><br></br>
                            <p style={{float:"left"}}> * For Linked List and FIFO-LIFO pages: <strong>Font Color and Background Color </strong>will be applied when new Items created.</p>
                            <br></br><br></br>
                            <p style={{float:"left"}}> * For Account page: <strong>Font Color</strong> will be applied when new Items created.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Theme };
