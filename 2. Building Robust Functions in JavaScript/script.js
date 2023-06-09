const getPerson = function (person) {
	try {
		if (
			typeof person == "object" &&
			person.hasOwnProperty("name") &&
			person.hasOwnProperty("age")
		) {
			return `Name: ${person.name}, Age: ${person.age}`;
		}
		throw new Error("Invalid parameter type");
	} catch (err) {
		return err.message;
	}
};

console.log(getPerson({ name: "Ankit", age: 27 }));
console.log(getPerson({ name: "Ankit" })); 
console.log(getPerson(["name", "Ankit"]));