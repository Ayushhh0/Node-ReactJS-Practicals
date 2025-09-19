
console.log(a); 
var a = 10;

try {
    console.log(b); 
} catch (err) {
    console.log("Error with let:", err.message);
}
let b = 20;

try {
    console.log(c); 
} catch (err) {
    console.log("Error with const:", err.message);
}
const c = 30;
