import functions from './syntax'

test('checking', () => {
   expect(functions.defineNumber(1)).toBe(1);
   expect(functions.defineString("string testing")).toBe("string testing");
   expect(functions.defineBoolean(3,2)).toBe(true);
   expect(functions.defineArray([1,2])).toBe(1);    
   expect(functions.defineObject({name: "Dan", hobby: "Badminton"})).toBe("Dan");   
   expect(functions.defineUndefined("return undefined")).toBe();
   expect(functions.sampleOfIfElse(5,10)).toBe("5 < 10");
   expect(functions.sampleOfIfElse(10,5)).toBe("10 > 5");  
   expect(functions.arrayToFront(["apple"])).toBe("pinnaple, apple");  
   expect(functions.arrayToEnd(["apple"])).toBe("apple, pinnaple");
   expect(functions.arrayUpdateValue(["apple"])).toBe("pear");
   expect(functions.forLoop(3)).toBe(3);
   expect(functions.forInLoop({fname: "Dan", lname: "T"})).toBe("Dan T");
   expect(functions.whileLoop(3)).toBe("The last number is 2");
   expect(functions.doWhileLoop(3)).toBe("The last number is 2");
   expect(functions.forEachWithArrFunction(["a","b","c"])).toBe("abcd");
   expect(functions.declareObject({name: "Dan", gender: "male"})).toBe("Dan is male");
   expect(functions.objectKeyValue({name: "Dan", gender: "male"})).toBe("Dan");

})