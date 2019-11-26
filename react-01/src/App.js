import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MyComponent, EvenComponent,OddComponent} from './components/MyComponent01';
// import Clock from './components/test.js'

class App extends Component {
  constructor() {
    super();
    this.counter=21;
    this.state={
      myState: "TBD",
      // display:this.numberFilter(this.setState.myState)
      display:this.numberFilter(this.counter)
    }
  }
  onPushMe= () => {
    this.counter=this.counter + 1;
    this.setState({
      myState: "Now:" + this.counter,
      display: this.numberFilter(this.counter)
    });
   

  }
  numberFilter = (num) => {
  
    if (num % 2 === 0) {
      return <EvenComponent evenNumber={this.counter}/>;
    } else {
      return <OddComponent oddNumber={this.counter}/>;
    }
  }

  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <h1>I am in control of this application and my name is Danny {this.counter} {this.state.myState}</h1>
          <button onClick={this.onPushMe}>
            Push Me
          </button>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <MyComponent whatToSay="What Ever" testPush={this.onPushMe}/>
        </div>

        <div>
          <h1>{this.state.display}</h1>
          {/* <EvenComponent evenNumber={this.counter}/> */}
        </div>

        {/* <div>
          <OddComponent oddNumber={this.counter}/>
        </div> */}
        {/* <div>
          <Clock/>
        </div> */}
      </div>

          
    );
  }
}

export default App;
