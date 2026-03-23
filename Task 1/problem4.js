function passwordChecker(password) {
    for (let i = 0; i < password.length; i++) {
        if (password[i] === ' ') {
            return "Password should not contain spaces.";
        }

        if (password.length < 8) {
            return "Password should be at least 8 characters long.";
        }

        if (!/[A-Z]/.test(password)) {
            return "Password should contain at least one uppercase letter.";
        }

        if (!/[a-z]/.test(password)) {
            return "Password should contain at least one lowercase letter.";
        }

        if (!/[0-9]/.test(password)) {
            return "Password should contain at least one digit.";
        }

        else {
            return "Strong Password.";
        }

    }

};

console.log(passwordChecker("Passw0rd"));
console.log(passwordChecker("password")); 
