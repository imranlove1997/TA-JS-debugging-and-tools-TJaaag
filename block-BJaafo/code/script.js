function fullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return fullName;
}

var expected = "Imran Khan";
var result = fullName("Imran", "Khan");
if(expected !== result){
    console.error("output is not matched.")
}

var expected = "ImranKhan";
var result = fullName("Imran", "Khan");
if(expected !== result) {
    console.error("output is not matched")
}

function totalAmount(amt, tx) {
    let totalAmount = amt + (amt * tx);
    return totalAmount;
}

var expected = 210;
var amount = totalAmount(10, 20);
if(amount !== expected) {
    console.error(`${amount} is not equal to ${expected}`);
}

var expected = 120;
var amount = totalAmount(10, 20);
if(amount !== expected) {
    console.error(`${amount} is not equal to ${expected}`);
}
