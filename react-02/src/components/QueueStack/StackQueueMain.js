import React, { Component, useState, useContext, useEffect } from 'react';
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
    let [takenOutFIFO, setTakenOutFIFO] = useState("");
    let [takenOutLIFO, setTakenOutLIFO] = useState("");
    let [beforeFIFO, setBeforeFIFO] = useState([]);
    let [beforeLIFO, setBeforeLIFO] = useState([]);
    // let [currentItem, setCurrentItem] = useState("");

    let [highLight,setHighLight]=useState(""); // to highLight FIFO and LIFO
    
    useEffect(()=> {
        setHighLight("itemRemoved"); // to use css defined as class "itemRemoved"
        setEmpty(); // to start over
    },[highLight])

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
                    // setDisable(true); // not using for now
                    return;
                }
                item = itemList[Math.floor(Math.random() * itemList.length)];
                setRandomItem(randomItem = item);
                break;
            case "btnPutIn":
                if (randomItem !== "") {
                    queue.addToQueue(randomItem);
                    stack.addToStack(randomItem);
                    let fifo = Object.assign([], queue.ListInQueue); // make a copy of queue before makign changes
                    let lifo = Object.assign([], stack.ListInStack); // make a copy of stack before making changes
                    setBeforeFIFO(fifo);
                    setBeforeLIFO(lifo);
                    setTakenOutFIFO("");
                    setTakenOutLIFO("");
                    // remove the selected item from original list (itemList)
                    let indexOfRandomItem = itemList.indexOf(randomItem);
                    itemList.splice(indexOfRandomItem, 1);
                    //setCurrentItem(randomItem);
                    setRandomItem("");

                } else {
                    alert("Sorry, List is empty.");
                }
                break;
            case "btnTakeOut":
                let fifo = Object.assign([], queue.ListInQueue); // make a copy of queue before makign changes
                let lifo = Object.assign([], stack.ListInStack); // make a copy of stack before making changes
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
    const ListFIFO = (props) => (
        <div className="listDisplay" style={{ color: fColor, backgroundColor: bgColor }} >
            {/* <p className={`pFormat ` + ((props.currentFIFO === queue.ListInQueue[0]) ? "itemRemoved" : null)}>{props.currentFIFO}</p> */}
            <p className={`pFormat ` + ((props.currentFIFO === queue.ListInQueue[0]) ? highLight : null)}>{props.currentFIFO}</p>
        </div>
    )
    const ListLIFO = (props) => (
        <div className="listDisplay" style={{ color: fColor, backgroundColor: bgColor }} >
            {/* <p className={`pFormat ` + ((props.currentLIFO === stack.ListInStack[stack.ListInStack.length - 1]) ? "itemRemoved" : null)}>{props.currentLIFO}</p> */}
            <p className={`pFormat ` + ((props.currentLIFO === stack.ListInStack[stack.ListInStack.length - 1]) ? highLight : null)}>{props.currentLIFO}</p>
        </div>
    )
    const displayListFIFO = (listFIFO) => {
        let itemListFIFO = [];
        let key = 0;
        let current;
        for (let i = 0; i < listFIFO.ListInQueue.length; i++) {
            current = listFIFO.ListInQueue[i];
            itemListFIFO.push(<ListFIFO key={key} currentFIFO={current} />)
            key++;
        }
        return itemListFIFO;
    }
    const displayListLIFO = (listLIFO) => {
        let itemListLIFO = [];
        let key = 0;
        let current;
        for (let i = 0; i < listLIFO.ListInStack.length; i++) {
            current = listLIFO.ListInStack[i];
            itemListLIFO.push(<ListLIFO key={key} currentLIFO={current} />)
            key++;
        }
        return itemListLIFO;
    }
    return (
        <div className="bigWindow">
            <div className="App">
                <h2 className="h22"><span className="spanshadow">Welcome to FIFO and LIFO</span></h2>
                <div className="marquee"><p>Developed By Danny Tran - Learner @ <span style={{ color: "yellow" }}>EvolveU - GREAT TEAM!</span></p></div>
                {/* <div className="linkedlist"> */}

                <div className="queueStackContent">
                    <label className="lbllist" style={{color: "yellow"}}>
                        Please generate a country name:
                        {/* <button disabled={disableGenerator} name="btnGenerator" className="btnQueueStack" onClick={handleSubmit}>Generate</button> */}
                            <input disabled type="text" className="queueStack" name="randomItem" value={randomItem} />
                        <button disabled={disableGenerator} name="btnGenerator" className="btnQueueStack" onClick={handleSubmit}>Generate</button>
                        <button name="btnPutIn" className="btnQueueStack" onClick={handleSubmit}>Put In</button>
                        <button name="btnStartOver" className="btnQueueStack" onClick={handleSubmit}>Start Over</button>
                    </label><br></br>
                    <button style={{ float: "right", marginRight: 9, color: "yellow" }} name="btnTakeOut" className="btnQueueStack" onClick={handleSubmit}>Take Out</button>
                    <br></br><br></br><br></br>
                    <p className="demonstrateHeader">*** Demonstration of FIFO ***</p>
                    <p className="infoLine">List before TAKING OUT(FIFO): <strong className="update">{beforeFIFO}</strong></p>
                    <p className="infoLine">Item Taken Out: <strong className="update">{takenOutFIFO}</strong></p>
                    <p className="infoLine">Current List(FIFO): <strong className="update">{queue.ListInQueue}</strong></p>
                    {displayListFIFO(queue)}
                   
                    <p style={{ backgroundColor: "rgba(22, 21, 21, 0.521)", height: 20 }}></p>
                    <p className="demonstrateHeader" style={{ backgroundColor: "darkblue" }}>*** Demonstration of LIFO ***</p>
                    <p className="infoLine">List before TAKING OUT(LIFO): <strong className="update">{beforeLIFO}</strong></p>
                    <p className="infoLine">Item Taken Out: <strong className="update">{takenOutLIFO}</strong></p>
                    <p className="infoLine">Current List(LIFO): <strong className="update">{stack.ListInStack}</strong></p>
                    {displayListLIFO(stack)}
                    <div style={{ height: 100, float: "center", backgroundColor: "darkgrey" }}>
                        <h5 style={{float:"left",marginTop: 5,marginLeft: 5, color: "red", fontSize: 16, fontStyle: "italic", marginBottom: 0 }}>Instructions</h5>
                        <br></br><br></br>
                            <p className="instruction">- Click "GENERATE" to get a random country name.</p><br></br>
                            <p className="instruction">- Click "PUT IN" to add the provided country to Queue and stack.</p><br></br>
                            <p className="instruction">- Click "TAKE OUT" to see demonstration of FIFO and LIFO.</p><br></br>
                            <p className="instruction">- Click "START OVER" to reset all and start again.</p>

                        {/* <ul style={{ listStylePosition: "inside", fontSize: 13, color: "black", marginTop: 2 }} >
                            <li >Click "GENERATOR" to get a random country name.</li>
                            <li>Click "PUT IN" to add the provided country to Queue and stack.</li>
                            <li>Click "TAKE OUT" to see demonstration of FIFO and LIFO.</li>
                            <li>Click "START OVER" to reset all and start again.</li>
                        </ul> */}
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export { QueueStack };
