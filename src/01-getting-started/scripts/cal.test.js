import Calculation from './cal'

test('Does that functions work?', () => {
    expect(Calculation.add(1,2)).toBe(3);
    expect(Calculation.subtract(3,2)).toBe(1);
    expect(Calculation.multiply(3,2)).toBe(6);
    expect(Calculation.division(4,2)).toBe(2);
    expect(Calculation.clearAll()).toBe("");
});
// Working with Canadian Taxes
test('Does taxes calculation work?', () => {
    expect(Calculation.calculateTaxes(47630)).toBe(`7,144.50`);
    expect(Calculation.calculateTaxes(95259)).toBe(`16,908.44`);
    expect(Calculation.calculateTaxes(147667)).toBe(`30,534.53`);
    expect(Calculation.calculateTaxes(210371)).toBe(`48,718.69`);
    expect(Calculation.calculateTaxes(210380)).toBe(`48,721.66`);
  
});
// working with arrays exercise
test('Does this work?', () => {
    ;
    expect(Calculation.addClicked([1,2])).toBe("The number has been added to the array");
   // expect(Calculation.total([1,2])).toBe(3);
    expect(Calculation.showarray()).toStrictEqual("1,2");
    expect(Calculation.total("1,2")).toBe(3);
    expect(Calculation.clearArray()).toBe("");
});
// working with dictionaries
test('Does Lookup function work?', () => {
    expect(Calculation.dictionaries("ab")).toBe("Alberta");
    expect(Calculation.dictionaries("tt")).toBe("Invalid Province Code");
});

