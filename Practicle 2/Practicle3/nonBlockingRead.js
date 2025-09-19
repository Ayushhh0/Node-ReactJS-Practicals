// nonBlockingRead.js
const fs = require('fs');

console.log("Starting non-blocking read...");

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:\n", data);
});

console.log("This will print before file reading completes (non-blocking).");
