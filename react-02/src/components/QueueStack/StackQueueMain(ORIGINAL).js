import React, { Component, useState, useContext } from 'react';
import './indexQueueStack.css';
import { Queue, Stack } from './StackQueuePSC';
import { ThemeContext } from '../Context/context';

const queue = new Queue();
const stack = new Stack();

const QueueStack = () => {

    const context = useContext(ThemeContext);
    let [fColor, setFColor] = useState(context.fontColor);
    let [bgColor, setBgColor] = useState(context.bgColor);
    const listProvided = ["Canada ", "Cuba ", "China "];
    // const listProvided = ["Canada","Cuba","China","Denmark","India", "Indonesia","Italy","Korea","Malaysia","Mexico","Norway", "Russia","US"];
    let [disableGenerator, setDisable] = useState(false)
    let [itemList, setItemList] = useState(listProvided);
    let [randomItem, setRandomItem] = useState("");
    let [listGeneratedFIFO, setListGeneratedFIFO] = useState([]);
    let [listGeneratedLIFO, setListGeneratedLIFO] = useState([]);
    let [takenOutFIFO, setTakenOutFIFO] = useState("");
    let [takenOutLIFO, setTakenOutLIFO] = useState("");
    let [beforeFIFO, setBeforeFIFO]=useState([]);
    let [beforeLIFO, setBeforeLIFO]=useState([]);
    
    const setEmpty = () => {
        setTakenOutFIFO("");
        setTakenOutLIFO("");
        setBeforeFIFO([]);
        setBeforeLIFO([]);
        queue.ListInQueue = [];
        stack.ListInStack = [];
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let item;
        switch (event.target.name) {
            case "btnGenerator":
                if (itemList.length < 1) {
                    alert("Sorry, List is empty. Please click 'Start over' to start again.")
                    setDisable(true);
                    return;
                }
                item = itemList[Math.floor(Math.random() * itemList.length)];
                setRandomItem(randomItem = item);
                break;
            case "btnPutIn":
                if (randomItem !== "") {
                    queue.addToQueue(randomItem);
                    stack.addToStack(randomItem);
                    setListGeneratedFIFO(listGeneratedFIFO =queue.ListInQueue);
                    setListGeneratedLIFO(listGeneratedLIFO =stack.ListInStack);
                    // remove the selected item from original list (itemList)
                    let indexOfRandomItem = itemList.indexOf(randomItem);
                    itemList.splice(indexOfRandomItem, 1);
                    setRandomItem("");
                } else {
                    alert("Sorry, List is empty.");
                }
                break;
            case "btnTakeOut":
                let fifo= Object.assign([],queue.ListInQueue); // make a copy of queue before makign changes
                let lifo= Object.assign([],stack.ListInStack); // make a copy of stack before making changes
                if (queue.ListInQueue.length < 1 || stack.ListInStack.length < 1) {
                    alert("Sorry, List is empty. Please click 'Start over' to start again.");
                    setEmpty();
                } else {
                    let takeFIFO = queue.removeFromQueue();
                    setTakenOutFIFO(takenOutFIFO = takeFIFO);
                    let takeLIFO = stack.removeFromStack();
                    setTakenOutLIFO(takenOutLIFO = takeLIFO);
                    setBeforeFIFO(fifo);
                    setBeforeLIFO(lifo);
                }   
                break;
            case "btnStartOver":
                setEmpty();
                setItemList(listProvided);
                setDisable(false);
                break;
        }
    }
   
    const List = (props) => (
        <div className="listDisplay" >
            <p className="listDisplay" style={{ color: fColor, backgroundColor: bgColor }}>
                <span className="title"><strong>Demonstration of FIFO(Queue)</strong></span><br></br><br></br>
                <span className="infoLine">Current Item List: <strong>{props.currentFIFO}</strong></span><br></br>
                <span className="infoLine">Item Removed(FIFO): <strong>{takenOutFIFO}</strong></span><br></br>
                <span className="infoLine">List before Remove: <strong>{beforeFIFO}</strong></span><br></br>
            </p>
            <p className="listDisplay" style={{ color: fColor, backgroundColor: bgColor }}>
                <span className="title"><strong>Demonstration of LIFO(Stack)</strong></span><br></br><br></br>
                <span className="infoLine">Current Item List: <strong>{props.currentLIFO}</strong></span><br></br>
                <span className="infoLine">Item Removed(LIFO): <strong>{takenOutLIFO}</strong></span><br></br>
                <span className="infoLine">List before Remove: <strong>{beforeLIFO}</strong></span><br></br>
            </p>
        </div>
    )
   
    const displayList = (listFIFO, listLIFO) => {
        let itemList = [];
        let key = 0;
        itemList.push(<List key={key} currentFIFO={listFIFO} currentLIFO={listLIFO}/>)
        key++;
        return itemList;
    }
    return (
        <div className="bigWindow">
            <div className="App">
                <h2 className="h22"><span className="spanshadow">Welcome to Theme Setting</span></h2>
                <div className="marquee"><p>Developed By Danny Tran - Learner @ <span style={{ color: "yellow" }}>EvolveU - GREAT TEAM!</span></p></div>
                <div className="linkedlist">
                    <div className="queueStackContent">
                        <label className="lbllist">
                            A random Country provided:
                            <input disabled type="text" className="queueStack" name="randomItem" value={randomItem} />
                            <button disabled={disableGenerator} name="btnGenerator" className="btnQueueStack" onClick={handleSubmit}>Generator</button>
                            <button name="btnPutIn" className="btnQueueStack" onClick={handleSubmit}>Put In</button>
                            <button name="btnStartOver" className="btnQueueStack" onClick={handleSubmit}>Start Over</button>
                        </label>
                        <button style={{ float: "right", marginRight: 6, color: "yellow" }} name="btnTakeOut" className="btnQueueStack" onClick={handleSubmit}>Take Out</button>
                        <br></br><br></br><br></br>

                        {displayList(listGeneratedFIFO, listGeneratedLIFO)}

                        <div style={{height: 90}}></div>
                        <div style={{ height:90, float: "center", backgroundColor: "lightgrey" }}>
                            <h5 style={{ color: "darkBlue", fontSize: 16, fontStyle: "italic", marginBottom:0 }}>Instructions</h5>
                            <ul style={{ listStylePosition: "inside", fontSize: 13, color: "black", marginTop:2 }} >
                                <li >Click "GENERATOR" to get a random country name.</li>
                                <li>Click "PUT IN" to add the provided country to Queue and stack.</li>
                                <li>Click "TAKE OUT" to see demonstration of FIFO and LIFO.</li>
                                <li>Click "START OVER" to reset all and start again.</li>
                            </ul>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { QueueStack };
