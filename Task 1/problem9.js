function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}   

function multiply(a, b) {
    return a * b;
}       

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    } else {
        return a / b;
    }
}

console.log("Addition of 10 and 5 is:", add(10, 5));
console.log("Subtraction of 10 and 5 is:", subtract(10, 5));
console.log("Multiplication of 10 and 5 is:", multiply(10, 5));
console.log("Division of 10 and 5 is:", divide(10, 5));
console.log("Division of 10 by 0 is:", divide(10, 0));