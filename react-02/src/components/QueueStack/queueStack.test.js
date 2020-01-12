import { Queue, Stack } from './StackQueuePSC'

test('testing Queue', () => {
    console.log("Testing Queue Class")
    const queueInstance= new Queue();
    queueInstance.addToQueue("A");
    expect(queueInstance.ListInQueue).toEqual(["A"]);
    queueInstance.addToQueue("B");
    expect(queueInstance.ListInQueue).toEqual(["A","B"]);
    queueInstance.addToQueue("C");
    expect(queueInstance.ListInQueue).toEqual(["A","B","C"]);
    // testing remove first in first out
    expect(queueInstance.removeFromQueue()).toEqual("A");
    expect(queueInstance.ListInQueue).toEqual(["B","C"]);
    expect(queueInstance.removeFromQueue()).toEqual("B");
    expect(queueInstance.ListInQueue).toEqual(["C"]);
    expect(queueInstance.removeFromQueue()).toEqual("C");
    expect(queueInstance.ListInQueue).toEqual([]);
    // testing when list is empty
    expect(queueInstance.removeFromQueue()).toEqual("List is empty");
});

test('testing Stack', () => {
    console.log("Testing Stack Class")
    const stackInstance= new Stack();
    stackInstance.addToStack("A");
    expect(stackInstance.ListInStack).toEqual(["A"]);
    stackInstance.addToStack("B");
    expect(stackInstance.ListInStack).toEqual(["A","B"]);
    stackInstance.addToStack("C");
    expect(stackInstance.ListInStack).toEqual(["A","B","C"]);
    // testing remove Last in first out
    expect(stackInstance.removeFromStack()).toEqual("C");
    expect(stackInstance.ListInStack).toEqual(["A","B"]);
    expect(stackInstance.removeFromStack()).toEqual("B");
    expect(stackInstance.ListInStack).toEqual(["A"]);
    expect(stackInstance.removeFromStack()).toEqual("A");
    expect(stackInstance.ListInStack).toEqual([]);
    // testing if list is empty
    expect(stackInstance.removeFromStack()).toEqual("List is empty");
});