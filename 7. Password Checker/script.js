// Password Checker...
class User {
	constructor(Username, Password) {
		this.username = Username;
		this.password = Password;
	}

	get getPassword() {
		return "*".repeat(this.password.length);
	}

	setPassword(newPassword) {
		if (
			newPassword.length < 8 ||
			!/\d/.test(newPassword) ||
			!/[A-Z]/.test(newPassword)
		) {
			console.log(
				"Password must be at least 8 characters long and contain at least one number and one uppercase letter."
			);
			return;
		}
		return (this.password = newPassword);
	}

	myCreditinal() {
		console.log(this);
	}
}

const Ankit = new User("Ankit Singh", "Password123");
console.log(Ankit.getPassword);

Ankit.setPassword("Ankit@1995");
console.log(Ankit.getPassword);

Ankit.myCreditinal();