function reverseNumber(num) {
    let reversedNum = num.toString().split('').reverse().join('');
    return parseInt(reversedNum);
};

console.log("reverseNumber of 12345 is:", reverseNumber(12345));