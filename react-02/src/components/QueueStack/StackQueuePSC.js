
// class QueueStack extends React.Component {
//     constructor (key, itemName) {
//         this.key = key;
//         this.itemName = itemName;
//     }
// }
class Queue { //FIFO
    constructor () {
        this.ListInQueue = [];
    }

    addToQueue(itemInput) {
        this.ListInQueue.push(itemInput);
    }
    removeFromQueue() {
        if (this.ListInQueue.length > 0) {
            let itemRemoved = this.ListInQueue.shift();
            return itemRemoved;
        } else {
            return "List is empty";
        }
    }
}

class Stack { //LIFO
    constructor () {
        this.ListInStack = [];
    }
    addToStack (itemInput) {
        this.ListInStack.push(itemInput);
    }
    removeFromStack() {
        if (this.ListInStack.length > 0) {
            let itemRemoved = this.ListInStack.pop();
            return itemRemoved;
        } else {
            return "List is empty";
        }
    }
}

export {Queue, Stack}