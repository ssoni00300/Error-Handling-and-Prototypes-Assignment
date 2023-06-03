class Student {
	constructor(name) {
		this.name = name;
	}
}


Object.prototype.printDetails = function detailsPrint(obj) {
	console.log(`"Hello, the student is ${this.name}"`);
};

const student = new Student("Mithun");
student.printDetails();