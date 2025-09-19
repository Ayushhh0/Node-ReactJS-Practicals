# Practical 3 – Node & ReactJS Development

This repository contains solutions for **Practical 3** of the coursework, covering **Modules, File System (Blocking vs Non-Blocking), and Asynchronous Programming** in **Node.js**.

---

## 📂 Contents

- `math.js` → Module exporting `add` and `subtract` functions.  
- `app.js` → Imports and uses functions from `math.js`.  
- `blockingRead.js` → Demonstrates **Blocking File Read**.  
- `nonBlockingRead.js` → Demonstrates **Non-Blocking File Read**.  
- `asyncExample.js` → Demonstrates **Asynchronous Programming** using `setTimeout`.  
- `sample.txt` → Example text file used for file system programs.  

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/practical-3-nodejs.git
   cd practical-3-nodejs
   ```

2. Install Node.js (if not already installed).  
   Download from: [https://nodejs.org](https://nodejs.org)

3. Run the scripts:

   **Modules Example**
   ```bash
   node app.js
   ```

   **File System Examples**
   ```bash
   node blockingRead.js
   node nonBlockingRead.js
   ```

   **Asynchronous Example**
   ```bash
   node asyncExample.js
   ```

---

## ✨ Output Example

**app.js**
```
Addition:  15
Subtraction:  5
```

**blockingRead.js**
```
Starting blocking read...
File contents:
(Contents of sample.txt)
Blocking read completed.
```

**nonBlockingRead.js**
```
Starting non-blocking read...
This will print before file reading completes (non-blocking).
File contents:
(Contents of sample.txt)
```

**asyncExample.js**
```
Fetching user data...
Data received   (after 2 seconds)
```

---

## 📜 License
This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
