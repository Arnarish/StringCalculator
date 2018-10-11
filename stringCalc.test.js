//stringcalc.test.js
const  { stringCalculator } = require ('./stringCalc');

const tester = new stringCalculator();

test("Empty string returns 0", () => {
	expect(tester.add("")).toBe(0);
	});
	
	test("single number returns 1", () => {
	expect(tester.add("1")).toBe(1);
	});
	
	test("two numbers return the sum: 1 + 2 = 3", () => {
	expect(tester.add("1, 2")).toBe(3);
	});
	
	test("Lets try more than two numbers: 1+2+3+4 = 10", () => {
	expect(tester.add("1,2,3,4",)).toBe(10);
	});
	
	test("testing with newline as delimiter 1 + 2 + 3 = 6", () => {
	expect(tester.add("1\n2,3",)).toBe(6);
	});