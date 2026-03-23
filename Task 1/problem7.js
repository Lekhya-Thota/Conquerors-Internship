let car = {
    brand: "Toyota",
    model: "Innova",
    year: 2022,
    color: "White",
};

function noofProperties(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
};

console.log("Number of properties in car:", noofProperties(car));