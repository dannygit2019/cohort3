import functions from './functions'

test('Basic DOM', () => {
    const newOl= document.createElement("ol");
    newOl.setAttribute("id","olList");
    
    expect(functions.showEvent(window.event)).toBe(window.event);

    // newOl.setAttribute("id", "olList");
    let li1=document.createElement("li");
    li1.textContent="Item 1";
    let li2=document.createElement("li");
    li2.textContent="Item 2";
    let li3=document.createElement("li");
    li3.textContent="Item 3";
    newOl.appendChild(li1);
    newOl.appendChild(li2);
    newOl.appendChild(li3);
    
    // console.log(newOl);
    expect(functions.showChildrenOfOl(newOl.children)).toEqual(["Item 1", "Item 2", "Item 3"]);
    expect(functions.addLi(newOl,"ssfs")).toBe(4);

    expect(functions.addLi(newOl,"")).toBe("");

    expect(functions.deleteLi(newOl)).toBe(3);
});
// working with cards

test('testing addcard', () => {
    const newParent= document.createElement("div");
    newParent.setAttribute("id","idplay");
    const newCard=document.createElement("div");
    newCard.setAttribute("class","cards");
   
    expect(functions.addCard(newParent)).toEqual(newParent.lastChild);
    expect(functions.addButtons(newCard)).toEqual(4);
    expect(functions.addBefore(newParent,functions.addCard(newParent))).toEqual(3);
    expect(functions.addAfter(newParent,functions.addCard(newParent))).toEqual(5);
    expect(functions.deleteCurrentCard(newParent, newCard)).toEqual(5);
});
