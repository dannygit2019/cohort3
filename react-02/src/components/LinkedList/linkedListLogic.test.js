import { ListNode, LinkedList } from "./linkedListLogic.js";

test("show", () => {
	const listNode = new ListNode("A", 20);
	expect(listNode.show()).toBe("Subject: A, Amount: 20");
});

test("testing insert()", () =>{
	const llInstance= new LinkedList();
	// testing insert a node when list is empty
	llInstance.insert("A",1);
	expect(llInstance.head.subject).toBe("A");
	expect(llInstance.currentNode.subject).toBe("A");
	expect(llInstance.tail).toBe(null);
	// testing insert if currentNode.forwardNode is null which insert a node after the tail
	llInstance.insert("B",2);
	expect(llInstance.head.subject).toBe("A");
	expect(llInstance.currentNode.subject).toBe("B");
	// testing insert a node after the current node
	expect(llInstance.currentNode.subject).toBe("B"); // current node BEFORE inserting a node
	llInstance.insert("C",3);
	expect(llInstance.currentNode.subject).toBe("C"); // current node AFTER inserted
	expect(llInstance.head.subject).toBe("A"); // to ensure the head is still "A"
})
test("testing first(), last()", () =>{
	const llInstance= new LinkedList();
	llInstance.insert("A",1);
	llInstance.first();
	expect(llInstance.currentNode.subject).toBe("A");
	expect(llInstance.head.subject).toBe("A");
	llInstance.insert("B",2);
	llInstance.insert("C",3);
	expect(llInstance.currentNode.subject).toBe("C");
	expect(llInstance.currentNode.forwardNode).toBe(null);
	// testing last()
		llInstance.last(); // testing go to last node if current node is currently last node
		expect(llInstance.currentNode.subject).toBe("C");
		expect(llInstance.currentNode.forwardNode).toBe(null);
	// testing go to last node from any given position
		expect(llInstance.currentNode.subject).toBe("C"); // current node before moving to the first node
		llInstance.first();
		expect(llInstance.currentNode.subject).toBe("A");
		expect(llInstance.currentNode.forwardNode.subject).toBe("B");
		llInstance.last();
		expect(llInstance.currentNode.subject).toBe("C");
		expect(llInstance.currentNode.forwardNode).toBe(null);
})
test("testing next(), previous()", () =>{
	const llInstance= new LinkedList();
	llInstance.insert("A",1);
	llInstance.insert("B",2);
	llInstance.insert("C",3);
	expect(llInstance.currentNode.subject).toBe("C");
	llInstance.first();
	expect(llInstance.currentNode.subject).toBe("A"); // before testing next()
	llInstance.next();
	expect(llInstance.currentNode.subject).toBe("B");
	llInstance.next();
	expect(llInstance.currentNode.subject).toBe("C");
	llInstance.next(); // call next() from the last node
	expect(llInstance.currentNode).toBe(null);
	// tesing previous() // start from the head
		llInstance.first();
		expect(llInstance.currentNode.subject).toBe("A");
		expect(llInstance.head.subject).toBe("A");
		llInstance.previous();
		expect(llInstance.head.subject).toBe("A");
		expect(llInstance.currentNode.subject).toBe("A");
		llInstance.next();
		expect(llInstance.currentNode.subject).toBe("B");
		llInstance.next();
		expect(llInstance.currentNode.subject).toBe("C");
		llInstance.previous();
		expect(llInstance.currentNode.subject).toBe("B");
})
test("testing delete()", () =>{
	const llInstance= new LinkedList();
	expect(llInstance.currentNode).toBe(null); // to ensure it is empty list
	llInstance.delete(); // testing delete() when list is empty
	expect(llInstance.currentNode).toBe(null); // testing delete() works when list is empty
	llInstance.insert("A",1);
	expect(llInstance.head.subject).toBe("A");
	llInstance.delete();
	expect(llInstance.currentNode).toBe(null); // testing if (this.currentNode === this.head)
	llInstance.insert("A",2);
	llInstance.insert("B",2);
	llInstance.delete(); // deleting "B" which is the tail
	expect(llInstance.currentNode.subject).toBe("A");
	// testing delete a given node in between nodes
	llInstance.insert("B",2);
	llInstance.insert("C",2);
	llInstance.previous();
	expect(llInstance.currentNode.subject).toBe("B");
	llInstance.delete(); //deleteing B
	expect(llInstance.currentNode.subject).toBe("A");
	llInstance.delete(); 
	expect(llInstance.currentNode.subject).toBe("C");
	expect(llInstance.head.subject).toBe("C");
	llInstance.delete(); 
	expect(llInstance.currentNode).toBe(null);
	llInstance.next(); // testing next() if list is empty
	expect(llInstance.currentNode).toBe(null);
});
test("testing total()", () =>{
	const llInstance= new LinkedList();
	llInstance.insert("A",2);
	llInstance.insert("B",2);
	llInstance.insert("C",2);
	expect(llInstance.total()).toBe(6);
	expect(llInstance.currentNode.subject).toBe("C");
	llInstance.previous();
	expect(llInstance.currentNode.subject).toBe("B");
	expect(llInstance.total()).toBe(6);
	expect(llInstance.currentNode.subject).toBe("B");
	
})