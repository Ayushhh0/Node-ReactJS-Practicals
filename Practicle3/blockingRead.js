// blockingRead.js
const fs = require('fs');

console.log("Starting blocking read...");

const data = fs.readFileSync('sample.txt', 'utf8');
console.log("File contents:\n", data);

console.log("Blocking read completed.");
