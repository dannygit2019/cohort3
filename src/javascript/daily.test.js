import functions from './daily'

test('check 2 parameters', () => {
   expect(functions.assertEquals("a","a")).toBe("true");
   expect(functions.assertEquals("a","b")).toBe("false");
   expect(functions.assertEquals(1,2)).toBe("false");
   expect(functions.assertEquals(2,2)).toBe("true");
   expect(functions.assertEquals("2",2)).toBe("false");
   expect(functions.assertEquals("This value","This value")).toBe("true");
    
});

test('email builder from an array', () => {
   const name = ["first", "last"];
   expect(functions.makeEmailArr(name))
       .toEqual("first.last@evolveu.ca");
   expect(functions.makeEmailArr(["First", "Last"]))
       .toEqual("first.last@evolveu.ca");
   expect(functions.makeEmailArr(["Bill", "Smith"]))
       .toEqual("bill.smith@evolveu.ca");
});

// daily exercise Oct-11-2019
test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
          .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
          .toEqual("bill.smith@evolveu.ca");
});
// daily exercise Oct-15-2019
test('loops', () => {
    let name = ["Dan", "Tran"];
    let test = [1,2];
    let anObject = {firstName: "Danny", lastName: "Tran"};
    expect(functions.forLoop(name)).toEqual("Dan Tran");
    expect(functions.whileLoop(name)).toEqual("Dan Tran");
    expect(functions.doWhileLoop(name)).toEqual("DanTran");
    expect(functions.forInLoop(anObject)).toEqual("Danny Tran");
    expect(functions.forOf(test)).toEqual([1,2]);
    
});


