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
   
            return (
               
                <div>
              
                        <h1>{this.props.evenNumber} is Even Number</h1>  
                   
                {/* <h1>{this.props.evenNumber} is {result}</h1>   */}
                </div>
            )
   
    }
}
class OddComponent extends React.Component {

    render() {
       
       
        return (
            
            <div>

                    <h1> {this.props.oddNumber} is Odd Number</h1>

            </div>
            
        
        )
  
    }
}
export {MyComponent, EvenComponent, OddComponent};
