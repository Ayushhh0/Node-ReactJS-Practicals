
function add(a, b) {
    return a + b;
}

const multiply = function(a, b) {
    return a * b;
};

console.log("Calling add before definition:", add(2, 3)); 
try {
    console.log("Calling multiply before definition:", multiply(2, 3)); 
} catch (err) {
    console.log("Error:", err.message);
}

console.log("Calling add after definition:", add(5, 6));       // 11
console.log("Calling multiply after definition:", multiply(4, 5)); // 20
