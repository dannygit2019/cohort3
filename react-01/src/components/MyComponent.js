import React from 'react';


class MyComponent extends React.Component {

    render() {
            return (
                <div>
                    <h1> Hello World from MyComp. {this.props.whatToSay}</h1>  
                    <button onClick={this.props.testPush}>
                        Test Push
                    </button>
                </div>
            )
    }
}
class EvenComponent extends React.Component {

    render() {
        let result;
        if (this.props.evenNumber % 2 === 0) {
           result = "Even number";       
            
        } 
        // else {
        //     result="Odd Number";
           
        // }
        
   
            return (
                result
                // <div>
                //     if ({result} === "Even number") {
                //         <h1>{this.props.evenNumber} is {result}</h1>  
                //     }
                   
                // {/* <h1>{this.props.evenNumber} is {result}</h1>   */}
                // </div>
            )
   
    }
}
class OddComponent extends React.Component {

    render() {
        let result1;
        if (this.props.oddNumber % 2 !== 0) {
            result1 = "Odd number";       
  
        }
        // else {
        //     result1="not Odd number";
   
        // }
       
        return (
            result1
            // <div>
            //   if ({result1} === "Odd number") {
            //         <h1> {this.props.oddNumber} is {result1}</h1>
            //   }
            // </div>
            
        
        )
  
    }
}
export {MyComponent, EvenComponent, OddComponent};
