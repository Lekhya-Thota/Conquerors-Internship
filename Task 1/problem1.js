let student = {
    name: "Rahul",
    maths: 78,
    science: 85,
    english: 90
};


function calculateTotal(student) {
    return student.maths + student.science + student.english;
}

function calculateAverage(student) {
    let total = calculateTotal(student);
    return total / 3;
}


function grade(student) {
    if (calculateAverage(student) >= 80) {
        return "A";
    }
    else if (calculateAverage(student) >= 60) {
        return "B";
    }
    else {
        return "C";
    }

}

console.log("Total Marks: " +calculateTotal(student));
console.log("Average Marks: " + calculateAverage(student));
console.log("Grade: " + grade(student));

