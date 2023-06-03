class Person {
	constructor(name = "Unknown", age = 0) {
		this.Name = name;
		this.Age = age;
	}

	getDetails() {
		console.log(`Name: ${this.Name}, Age: ${this.Age}`);
	}
}

const Person1 = new Person("Mithun", 20);
Person1.getDetails();

const Person2 = new Person();
Person2.getDetails();