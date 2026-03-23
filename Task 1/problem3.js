let bill = {
    pen: 10,
    notebook: 50,
    bag: 500
};

function calculateTotal(bill) {
    let total = 0;
    for (let item in bill) {
        total += bill[item];
    }
    return total;

};

function discount10percent(total) {
    return total - (total * 0.1);
};

let total = calculateTotal(bill);
let discountedTotal = discount10percent(total); 
console.log("Total before discount: " + total);
console.log("Total after 10% discount: " + discountedTotal);    