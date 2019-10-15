// Working with arrays
import Arrays from './arrays'

test('Does that functions work?', () => {
    //expect(Arrays.addClicked([1,2])).toBe("1,2,3");
    //expect(Arrays.clear([1,2])).toBe("");
    expect(Arrays.total([1,2])).toBe(3);
});
test('Does Lookup function work?', () => {
    
    expect(Arrays.dictionaries("ab")).toBe("Alberta");
});
