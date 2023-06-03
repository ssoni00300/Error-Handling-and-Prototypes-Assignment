const arr = [1, 2, 3, 4, 5];

function numberChecker(arr) {
	return function checkNum(a) {
		return arr.includes(a);
	};
}

const checkNum = numberChecker(arr);
console.log(checkNum(3));
console.log(checkNum(6));