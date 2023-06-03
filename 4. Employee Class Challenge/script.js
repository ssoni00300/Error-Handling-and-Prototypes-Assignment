class Employee {
	constructor(nam, pos, sal) {
		this.name = nam;
		this.position = pos;
		this.salary = sal;
	}

	getSalary() {
		console.log("Salary: ", this.salary);
	}
}

const employee01 = new Employee("Ankit Singh", "Software Engineer", 80000);
employee01.getSalary();