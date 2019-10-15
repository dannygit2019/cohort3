import Calculation from './cal'

test('Does that functions work?', () => {
    expect(Calculation.add(1,2)).toBe(3);
    expect(Calculation.subtract(3,2)).toBe(1);
    expect(Calculation.multiply(3,2)).toBe(6);
    expect(Calculation.division(4,2)).toBe(2);
});
test('Does taxes calculation work?', () => {
    expect(Calculation.determineIncomeRange(50000)).toBe(50000);
  
});

