

// let olTag = document.getElementById("olElement");
let olTag = document.getElementById("olList");
//let count=1;

const functions = {
    
    showEvent: (event) => {
        console.log(event);
    },

    
    showChildrenOfOl: (anElement) => {
        let i = 0;
        let childrenArray = [];
        let anInstance;
        for (anInstance of anElement) {
            childrenArray[i] = anInstance.textContent;
            i++;
        }
        return childrenArray;

    },
    // // add Li to the end
    // addLi: (str) => {
    //     let newLi = document.createElement("li");
    //     let text=document.createTextNode(str);

    //     newLi.appendChild(text);
    //     if (str != "") {
    //         //return olTag.appendChild(newLi);
    //         olTag.appendChild(newLi);
    //     }
    //     return olTag.childElementCount;
    // },
    addLi: (olElement,str) => {
        let newLi = document.createElement("li");
        let text=document.createTextNode(str);

        newLi.appendChild(text);
        if (str !== "") {
            //return olTag.appendChild(newLi);
            olElement.appendChild(newLi);
            return olElement.childElementCount;
        }
        
            return "";
       
        // return olElement.childElementCount;
        
    },

    deleteLi: (olElement) => {
        
        
        olElement.removeChild(olElement.lastChild);
        // console.log(olElement.childElementCount);
        return olElement.childElementCount;
   
    },
    // add to the start
    // addLiStart: (str) => {
    //     let newLi = document.createElement("li");
    //     let text=document.createTextNode(str);
 
    //     newLi.appendChild(text);
    //     if (str != "") {
    //         return olTag.insertBefore(newLi, olTag.childNodes[0]);
    //     }
    // },


    // working with cards

    addCard: (node) => {
       
        
        let newCard=document.createElement("div");
        
        //console.log("I'mchildNodes in add card");
        //node.textContentchildNodes="I'm updating div";
        newCard.setAttribute("class", "cards");
        
        newCard.textContent=`Card ${node.childElementCount}`;
       
        node.appendChild(newCard);
        functions.addButtons(newCard);
        
        // console.log(node.childElementCount);
        // console.log(newCard.childElementCount);
        //return node.childElementCount;
        return newCard;
        
    },

    addButtons: (newCard) => {
        let makeNewLine=document.createElement("br");
        newCard.appendChild(makeNewLine);
        let btnAddBefore=document.createElement("button");
        let btnAddAfter=document.createElement("button");
        let btnDelete=document.createElement("button");    
    
        btnAddBefore.setAttribute("class", "buttons");
        btnAddBefore.setAttribute("type","button");
        btnAddBefore.textContent="Add Before";
        newCard.appendChild(btnAddBefore);

        btnAddAfter.setAttribute("class", "buttons");
        btnAddAfter.setAttribute("type","button");
        btnAddAfter.textContent="Add After";
        newCard.appendChild(btnAddAfter);

        btnDelete.setAttribute("class", "buttons");
        btnDelete.setAttribute("type","button");
        btnDelete.setAttribute("id","delete");
        btnDelete.textContent="Delete";
        newCard.appendChild(btnDelete);
       //console.log(newCard.childElementCount);
       return newCard.childElementCount;
    },

    // addBefore: (node,currentCard) => {
        
    //     let newCard = document.createElement("div");

    //     newCard.textContent = `Card ${node.childElementCount}`;
    //     node.insertBefore(newCard,currentCard);
    //     newCard.setAttribute("class", "cards");
    //     functions.addButtons(newCard);
    //     return node.children.length;
    // },
    addBefore: (node,currentCard) => {
        
        //let newCard = functions.addCard(node);
        // newCard.textContent = `Card ${node.childElementCount}`;
        // newCard.setAttribute("class", "cards");
        // functions.addButtons(newCard);
        
        node.insertBefore(functions.addCard(node),currentCard);
        
        return node.children.length;
    },

    // addAfter: (node,afterCurrent) => {
    //     let newCard = document.createElement("div");
   
    //     newCard.textContent = `Card ${node.childElementCount}`;
    //     node.insertBefore(newCard, afterCurrent);
    //     newCard.setAttribute("class", "cards");
    //     functions.addButtons(newCard);
    //     return node.children.length;
    // },
    
    addAfter: (node,afterCurrent) => {
        
        node.insertBefore(functions.addCard(node), afterCurrent);
        
        return node.children.length;
    },
    

    deleteCurrentCard: (node,currentCard) => {
        
        currentCard.remove();
        return node.childElementCount;
     }
    
};

export default functions;