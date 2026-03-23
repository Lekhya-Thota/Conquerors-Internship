function analyzeNumber(num) {
    let totalDigits = num.toString().length;
    let sumOfDigits = 0;
    for (let i = 0; i < totalDigits; i++) {
        sumOfDigits += parseInt(num.toString()[i]);
    }
    if (num.toString() === num.toString().split('').reverse().join('')) {
        palindromeCheck = "The number is a palindrome.";
    } else {
        palindromeCheck = "The number is not a palindrome.";
    }
    return { totalDigits, sumOfDigits ,palindrome: palindromeCheck };

};

console.log(analyzeNumber(12345));