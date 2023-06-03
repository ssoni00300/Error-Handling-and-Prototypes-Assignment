class Calculator {
	static add(num1, num2) {
		return num1 + num2;
	}
}

const myCalculator = new Calculator();
const result = Calculator.add(40, 40);
console.log("Result:", result);