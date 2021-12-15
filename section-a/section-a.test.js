// Not all functions are imported, be careful 👇
const {
    subtract,
    divide, 
    isDivisibleBy,
    gradeAssignment,
    areaOrPerimeter 
} = require("./section-a.js");

// Section A 01. Write a smoke test
test('passes when value is NaN', () => {
    expect(NaN).toBeNaN();
      expect(NaN).toBeNaN();
      expect(1).not.toBeNaN();
      expect(typeof NaN).toBe('number');
  });
  

// Section A 02. Test the subtraction() function

test("that the subtract() function", () => {
    expect(subtract(20, 5)).toEqual(15),
    expect(subtract(20, 10)).toEqual(10)
})
// Feel free to delete all of the starter test block and make it better

describe('Test the ', () => {
    test("Subtract 2 positive numbers, where the first parameter is larger than the scond one", () => {
        let num1 = 5;
        let num2 = 1;
        var expected = 4;
        var output = subtract(num1, num2);
    });
});


// SECTION 3 
// Section A 03. Test the divide() function
test("that the divide() divides two given numbers", () => {
    expect(divide(6, 3)).toEqual(2)
});

// Feel free to delete all of the starter test block and make it better

// Section A 04. Test the isDivisibleBy() function

test("that isDivisibleBy() checks is a number is divisible by another given number", () => {
    expect(isDivisibleBy(10, 5, 5)).toBe(true),
    expect(isDivisibleBy(30, 6, 5)).toBe(true)
})

// Section A 05. Test the areaOrPerimeter() function

test("that the areaOrPerimeter() finds the area or perimeter", () => {
        expect(areaOrPerimeter(5, 4)).toEqual(18),
        expect(areaOrPerimeter(5, 5)).toEqual(25)

});

// Section A 06. Test the gradeAssignment() function


// Section A 07. Test the disemvowel() function

// Section A 08. Test the removeUrlAnchor() function

// Section A 09. Test the strEndsWith() function

// Section A 10. Test the numberToString() function
