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

const people = [
    {fname:"Alex", lname:"Smith", province:"BC", age:33},
    {fname:"Angela", lname:"Jones", province:"AB", age:61},
    {fname:"Anne", lname:"Bird", province:"SK", age:35},
    {fname:"Brent", lname:"Riddle", province:"MN", age:79},
    {fname:"Byron", lname:"Cardenas", province:"BC", age:38},
    {fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
    {fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
    {fname:"Dima", lname:"Curry", province:"MN", age:67},
    {fname:"Dustin", lname:"Bullock", province:"BC", age:59},
    {fname:"Eva", lname:"Keiths", province:"AB", age:24},
    {fname:"Faith", lname:"Liu", province:"SK", age:46},
    {fname:"Fawad", lname:"Bowman", province:"MN", age:69},
    {fname:"Forest", lname:"Vaughn", province:"BC", age:52},
    {fname:"Giovanni", lname:"Browning", province:"AB", age:32},
    {fname:"Greg", lname:"Hogan", province:"SK", age:55},
    {fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
    {fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
    {fname:"James", lname:"Kramer", province:"AB", age:57},
    {fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
    {fname:"Jawad", lname:"Huerta", province:"MN", age:35},
    {fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
    {fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
    {fname:"Joe", lname:"Banks", province:"SK", age:37},
    {fname:"Kristina", lname:"Dalton", province:"MN", age:73},
    {fname:"Latora", lname:"Matthews", province:"BC", age:25},
    {fname:"Lauren", lname:"McClure", province:"AB", age:42},
    {fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
    {fname:"Linden", lname:"Pierce", province:"MN", age:68},
    {fname:"Luis", lname:"Price", province:"BC", age:23},
    {fname:"Marcela", lname:"Perez", province:"AB", age:20},
    {fname:"Marilou", lname:"Graham", province:"SK", age:32},
    {fname:"Matt", lname:"Novak", province:"MN", age:29},
    {fname:"Monica", lname:"Giles", province:"BC", age:34},
    {fname:"Niloufar", lname:"Carson", province:"AB", age:29},
    {fname:"Omar", lname:"Olson", province:"SK", age:69},
    {fname:"Roger", lname:"Woodard", province:"MN", age:84},
    {fname:"Roman", lname:"Swanson", province:"BC", age:21},
    {fname:"Seun", lname:"Kelly", province:"AB", age:60},
    {fname:"Shane", lname:"Frost", province:"SK", age:87},
    {fname:"Steven", lname:"Haynes", province:"MN", age:47},
    {fname:"Thomas", lname:"Hart", province:"BC", age:14},
    {fname:"Trent", lname:"Kerr", province:"AB", age:12},
    {fname:"Darrell", lname:"Koch", province:"SK", age:10},
    {fname:"Tylor", lname:"Torres", province:"MN", age:98}
];
// daily Nov-21-2019

test('testing totalPeople of AB and BC', () => {
    //expect(functions.getTotalfromPart1(people)).toEqual(22) // testing total of peole
    // expect(functions.getTotalfromPart1(people)).toEqual(838) // testing total age
    // expect(functions.getTotalfromPart1(people)).toEqual(38) // testing average age
    expect(functions.getTotalfromPart1(people)).toEqual({totalOfPeople: 22,totalAge: 838,AverageAge: 38});
});


// daily exercise Nov-8-2019
test('get full name from People', () => {
    const fullName = functions.getFullNames(people[0]);
    expect(fullName).toEqual("Alex Smith");
});


test('testing collecting BC and AB people only from People', () => {
    expect(functions.getPeople(people,"no function")).toEqual("Not a function");
    expect(functions.getPeople(people,functions.getFullNames)[21]).toEqual("Trent Kerr");
});

// daily exercise Nov-06-2019
test('creating new array for balances >= 1000 from staff', () => {
    
    const staffEmail = functions.balOver1000(data.staff);
    // expect(staffEmail).toEqual([{ fname: 'Liam', lname: 'Henry', balance: 1000 },{ fname: 'Emma', lname: 'Jones', balance: 1330 }]);
    expect(staffEmail).toEqual([ 1000, 1330 ]);
});



// daily exercise Oct-29-2019
test('Total of balance from staff', () => {

    const staffEmail = functions.totalOfBalance(data.staff);
    expect(staffEmail).toEqual(3823);
});

test('Average of balance from staff', () => {

    const staffEmail = functions.averageOfBalance(data.staff);
    expect(staffEmail).toEqual(546);
});

// daily exercise Oct-25-2019
test('email builder for company with ForEach', () => {

    const staffEmail = functions.loopStaffForEach(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[2])
        .toEqual("emma.jones@evolveu.ca");

});

test('email builder for company with Map', () => {

    const staffEmail = functions.loopStaffMap(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[2])
        .toEqual("emma.jones@evolveu.ca");

});

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

test('email builder for company For Each', () => {
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


