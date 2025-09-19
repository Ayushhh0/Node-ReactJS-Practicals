# Todo API (Express.js)

A simple REST API for managing todos, built with [Express.js](https://expressjs.com/).

## Features
- **Add a todo** (`POST /todos`)
- **List all todos** (`GET /todos`)
- Uses an **in-memory array** (data is lost when the server restarts)

## Requirements
- [Node.js](https://nodejs.org/) (v14 or later)
- npm (comes with Node.js)

## Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd <your-repo-folder>

# Install dependencies
npm install
```

## Running the Server
```bash
node server.js
```

Server will run at:  
```
http://localhost:3000
```

## API Endpoints

### 1. Add a Todo
**POST** `/todos`

#### Request body (JSON)
```json
{
  "task": "Buy groceries"
}
```

#### Example `curl` command
```bash
curl -X POST http://localhost:3000/todos \
     -H "Content-Type: application/json" \
     -d '{"task": "Buy groceries"}'
```

---

### 2. List Todos
**GET** `/todos`

#### Example `curl` command
```bash
curl http://localhost:3000/todos
```

#### Example response
```json
[
  {
    "id": 1,
    "task": "Buy groceries"
  }
]
```
