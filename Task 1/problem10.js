let user = {
    name: "John",
    age: 25,
};

function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
};

function deleteProperty(obj, key) {
    delete obj[key];
    return obj;
};

function updateProperty(obj, key, value) {
    if (obj.hasOwnProperty(key)) {
        obj[key] = value;
    }
    return obj;
};

console.log("Before adding property:", user);   
addProperty(user, "city", "New York");
console.log("After adding property:", user);    
deleteProperty(user, "age");
console.log("After deleting property:", user);    
updateProperty(user, "name", "Jane");
console.log("After updating property:", user);
console.log("Trying to update non-existing property:", updateProperty(user, "country", "USA"));