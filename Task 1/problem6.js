function electricityBill(units) {
    input = parseInt(units);
    let billAmount = 0;
    if (units <= 100) {
        billAmount = units * 5;
    } else if (units <= 200) {
        billAmount = (100 * 5) + ((units - 100) * 7);
    } else if (units > 200) {
        billAmount = (100 * 5) + (100 * 7) + ((units - 200) * 10);
    }
    return billAmount;
}

console.log(electricityBill(50));
console.log(electricityBill(150));
console.log(electricityBill(250));
console.log(electricityBill(350));  