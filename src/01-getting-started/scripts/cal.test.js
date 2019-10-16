import Calculation from './cal'

test('Does that functions work?', () => {
    expect(Calculation.add(1,2)).toBe(3);
    expect(Calculation.subtract(3,2)).toBe(1);
    expect(Calculation.multiply(3,2)).toBe(6);
    expect(Calculation.division(4,2)).toBe(2);
});
// Working with Canadian Taxes
test('Does taxes calculation work?', () => {
    expect(Calculation.calculateTaxes(47630)).toBe(7144.5);
  
});
// working with arrays exercise
test('Does this work?', () => {
    expect(Calculation.addClicked([1,2])).toBe("1,2,3");
    expect(Calculation.total([1,2])).toBe(3);
    expect(Calculation.clearArray()).toBe("");
});
// working with dictionaries
test('Does Lookup function work?', () => {
    expect(Calculation.dictionaries("ab")).toBe("Alberta");
});

