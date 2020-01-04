import React, { useState,useContext } from 'react';
import ReactDOM from 'react-dom';
import './indexList.css';
import { LinkedList, ListNode } from './linkedListLogic';
import {ThemeContext} from '../Context/context'
// import {NodeList} from './nodeList'
// const linkedList = new LinkedList();

const linkedList = new LinkedList();
const List = () => {
    
    const context = useContext (ThemeContext);
    // let [bgColor, setBgColor] = useState("");
    let [fColor, setFColor] = useState(context.fontColor);
    let [bgColor, setBgColor] = useState(context.bgColor);
    let [currentItem, setCurrentItem] = useState("");
    let [subject, setSubject] = useState("");
    let [amount, setAmount] = useState("");
    let [message, setMessage] = useState("");
    
    const handleInsert = () => {
        let displayMesage = "";
        if (subject !== "" && amount !== "") {
            linkedList.insert((subject).toUpperCase(), Number(amount));
            displayMesage = `Subject has been created. CURRENT Item: ${(subject).toUpperCase()}.`;
            setCurrentItem(currentItem = linkedList.currentNode);
            setSubject("");
            setAmount("");
        } else {
            displayMesage = "Please enter a Subject and Amount!";
        }
        setMessage(displayMesage);
    }

    const handleClear = () => {
        setAmount("");
        setSubject("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let displayMesage = "";
        if (linkedList.currentNode === null) {
            setMessage("Sorry List is empty.");
            return;
        }
        switch (event.target.name) {
            case "btnPrevious":
                if (linkedList.head === currentItem) {
                    displayMesage = `Sorry - Subject: ${currentItem.subject} is the 1st item of the list.`;
                } else {
                    linkedList.previous();
                    setCurrentItem(currentItem = linkedList.currentNode);
                    displayMesage = `Subject: ${currentItem.subject}. Amount: ${currentItem.amount}`;
                }
                setMessage(displayMesage);
                break;
            case "btnNext":
                if (linkedList.currentNode.forwardNode === null) {
                    displayMesage = `Sorry - Subject: ${currentItem.subject} is the last item of the list.`;
                } else {
                    linkedList.next();
                    setCurrentItem(currentItem = linkedList.currentNode);
                    displayMesage = `Subject: ${currentItem.subject}. Amount: ${currentItem.amount}`;
                }
                setMessage(displayMesage);
                break;
            case "btnFirst":
                if (linkedList.head === currentItem) {
                    displayMesage = `Sorry - Subject: ${currentItem.subject} is the 1st item of the list.`;
                } else {
                    linkedList.first();
                    setCurrentItem(currentItem = linkedList.currentNode);
                    displayMesage = `Subject: ${currentItem.subject}. Amount: ${currentItem.subject}`;
                }
                setMessage(displayMesage);
                break;
            case "btnLast":
                if (linkedList.currentNode.forwardNode === null) {
                    displayMesage = `Sorry - Subject: ${currentItem.subject} is the last item of the list.`;
                } else {
                    linkedList.last();
                    setCurrentItem(currentItem = linkedList.currentNode);
                    displayMesage = `Subject: ${currentItem.subject}. Amount: ${currentItem.amount}`;
                }
                setMessage(displayMesage);
                break;
            case "btnDelete":
                linkedList.delete();
                setMessage(`The subject ${currentItem.subject} has been deleted.`);
                setCurrentItem(currentItem = linkedList.currentNode);
                break;
            case "btnTotal":
                let total =linkedList.total();
                setMessage(`Total Amount is $${total}.`);
                setCurrentItem(currentItem = linkedList.currentNode);
                break;
        }
    }
    const NodeList = (props) => (
        <div className="nodeCreated" >
            {/* <p className="pdisplay node">{`Subject: ${props.current.subject}. Amount: ${props.current.amount}`} </p> */}
            {/* <p className="pdisplay node" style={{ color: fColor}}>{props.current.show()}</p> */}
            <p className="pdisplay node" style={{ color: fColor, backgroundColor: bgColor }}>{props.current.show()}</p>
            {/* <p className="pdisplay node" style={{ color: fColor}}>{props.current.show()}</p> */}
        </div>
    )

    const displayNodes = (list) => {
        let nodeList = [];
        let key = 0;
        let current = list.head;
        if (current === null) {
            return null;
        } else {
            while (current) {
                nodeList.push(<NodeList key={key} current={current} />)
                key++;
                current = current.forwardNode;
            }
            return nodeList;
        }
        
    }
    
    return (
        <div className="bigWindow">
            <div className="App">
                <h2 className="h22"><span className="spanshadow">Welcome to Linked List</span></h2>
                <div className="marquee"><p>Developed By Danny Tran - Learner @ <span style={{ color: "yellow" }}>EvolveU - GREAT TEAM!</span></p></div>
                <div className="linkedlist">
                    <div className="listContent">
                        <label className="lbllist">
                            Enter Subject:
                                <input type="text" autoFocus className="list" value={subject} name="subject" onChange={e => {
                                setSubject(e.target.value);
                                setMessage("");
                            }} />
                        </label>
                        <label className="lbllist" >
                            Enter Amount:
                                <input type="number" className="list" value={amount} name="amount" onChange={e => {
                                setAmount(e.target.value);
                                setMessage("");
                            }} />
                        </label>
                        <br></br><br></br>
                        <p className="message">{message}</p>
                        <br></br><br></br>
                        <input type="submit" value="Insert" name="btnInsert" className="btnList" onClick={handleInsert} />
                        <input type="submit" value="Clear" name="btnClear" className="btnList" onClick={handleClear} />
                        <br></br>
                        <input type="submit" value="First" name="btnFirst" className="btnList" onClick={handleSubmit} />
                        <input type="submit" value="Prev" name="btnPrevious" className="btnList" onClick={handleSubmit} />
                        <input type="submit" value="Next" name="btnNext" className="btnList" onClick={handleSubmit} />
                        <input type="submit" value="Last" name="btnLast" className="btnList" onClick={handleSubmit} />
                        <input type="submit" value="Total" name="btnTotal" className="btnList" onClick={handleSubmit} />
                        <input type="submit" value="Delete" name="btnDelete" className="btnList" onClick={handleSubmit} />
                        <br></br><br></br><br></br>
                        {/* <div className="nodeCreated" style={{ backgroundColor: bgColor }} > */}
                            {displayNodes(linkedList) }
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { List };
