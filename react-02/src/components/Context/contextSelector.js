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
                                    <option value="Default">Black(Default)</option>
                                    <option value="purple">Purple</option>
                                    <option value="blue">Blue</option>
                                </select>
                            </label>
                            <br></br><br></br>
                            <label className="lbllist">
                                Select BG Color:
                                <select value={this.context.bgColor} onChange={this.context.changeBGColor}>
                                    <option value="Default">White(Default)</option>
                                    <option value="cadetblue">Cadetblue</option>
                                    <option value="lightGrey">lightGrey</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Theme };
