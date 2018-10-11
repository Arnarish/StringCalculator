//stringcalc.test.js
const  { stringCalculator } = require ('./stringCalc');

const tester = new stringCalculator();

test("Empty string returns 0", () => {
	expect(tester.add("")).toBe(0);
	});
	
	test("single number returns 1", () => {
	expect(tester.add("1")).toBe(1);
	});
	
	test("two numbers return the sum", () => {
	expect(tester.add("1, 2")).toBe(3);
	});