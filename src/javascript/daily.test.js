import functions from './daily'
const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};




// daily exercise Oct-24-2019
test('email builder for company with ForIn', () => {

    const staffEmail = functions.loopStaffIn(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[2])
        .toEqual("emma.jones@evolveu.ca");

});
test('email builder for company with ForOf', () => {

    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[2])
        .toEqual("emma.jones@evolveu.ca");
    
});


// daily exercise Oct-21 2019

test('email builder for company ForEach', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});


// daily exercise Oct-16 & 17 2019

test('advanced', () => {

    let fruits = ["Banana", "Orange", "Lemon"];
    let fruits2 = ["Banana", "Orange", "Lemon"];
    let numArray =[2, 4, 6];
    let numArray1 =[8,2,4,6];
    let arrSort =[8,2,4,6];
    
    expect(functions.sliceExample(fruits)).toEqual(["Orange"]);
    expect(functions.spliceExample(fruits)).toEqual(["Banana", "Kiwi", "Orange", "Lemon"]);
    expect(functions.forEachExample(fruits2)).toEqual(["Banana", "Orange", "Lemon"]);
    expect(functions.mapExample(numArray)).toEqual([4,8,12]);
    expect(functions.reduceExample(numArray)).toEqual(12);
    expect(functions.filterExample(numArray1)).toEqual([8,4,6]);
    expect(functions.sortExample(arrSort)).toEqual([2,4,6,8]);

});

// **********************************
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


