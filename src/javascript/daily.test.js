import functions from './daily'

test('check 2 parameters', () => {
//    expect(functions.assertEquals("a","a")).toBe("true");
//    expect(functions.assertEquals("a","b")).toBe("false");
//    expect(functions.assertEquals(1,2)).toBe("false");
//    expect(functions.assertEquals(2,2)).toBe("true");
//    expect(functions.assertEquals("2",2)).toBe("false");
//    expect(functions.assertEquals("This value","This value")).toBe("true");
    
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