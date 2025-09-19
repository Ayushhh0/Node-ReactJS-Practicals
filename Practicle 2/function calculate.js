function calculate(operation, a, b) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;

console.log("Add:", calculate(add, 4, 5));         
console.log("Subtract:", calculate(subtract, 9, 4)); 
console.log("Multiply:", calculate(multiply, 4, 5)); 
