export class ListNode {
	constructor(subject, amount) {
		this.subject = subject;
		this.amount = amount;
		this.forwardNode = null;
	}
	show() {
		return `Subject: ${this.subject}, Amount: ${this.amount}`;
	};
}
export class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.currentNode=null;
	}
	insert(subject, amount) {
		const nodeInstance = new ListNode(subject,amount);
		if (this.head === null) { // check to see if list is empty
			this.head=nodeInstance;
			this.currentNode = nodeInstance;
			return;
		} else { // if the list is not empty
			if (this.currentNode.forwardNode === null) { // currentNode is now the last node(tail) and insert new node after the last node
				this.currentNode.forwardNode=nodeInstance;
				this.currentNode=nodeInstance;
			} else { // to insert a node after a current node
				nodeInstance.forwardNode = this.currentNode.forwardNode;
				this.currentNode.forwardNode=nodeInstance;
				this.currentNode=nodeInstance;
			}
			return this.currentNode;
		}
	};

	first() { this.currentNode = this.head};

	last() {
		if (this.currentNode.forwardNode === null) {
			return this.currentNode;
		 } else {
			while(this.currentNode.forwardNode !== null) {
				this.currentNode=this.currentNode.forwardNode
			}
			return this.currentNode;
		}
	};
	next() {
		if (this.currentNode === null) return;
		if (this.currentNode.forwardNode  !== null) {
			this.currentNode = this.currentNode.forwardNode;
			return this.currentNode;
		} else return this.currentNode=null;
	};
	previous() {
		let prevNode=this.head;  // to hold a previous node in a loop
		// checking from the head
		console.log("head", this.head)
		if (this.currentNode === this.head) {
			return ;
		}
		while (this.currentNode !== prevNode.forwardNode) {
			prevNode = prevNode.forwardNode;
		}
		return this.currentNode=prevNode;
	};
	delete() {
		if(this.currentNode === null) return;// if the list is empty
		if (this.currentNode.forwardNode === null) {
			if (this.currentNode === this.head) {
				this.head=null;
				return this.currentNode=null;
			} else { // not the head which tail
				this.previous();
				this.head = this.currentNode;
				this.currentNode.forwardNode=null;
				return this.currentNode;
			}		
		} else { // if forward node is not null
			if (this.currentNode === this.head) {
				this.head = this.currentNode.forwardNode;
				this.currentNode = this.head;
			} else {
				let currentNodeValue= this.currentNode;
				this.previous();
				this.currentNode.forwardNode=currentNodeValue.forwardNode;
			}
		}
	}
	total() {
		let totalAmount=0;
		let currentPoint=this.currentNode; // to keep the current node where the total button clicks
		this.first();
		while (this.currentNode !== null) {
			totalAmount += this.currentNode.amount;
			this.next();
		}
		this.currentNode=currentPoint;
		return totalAmount;
	}
}