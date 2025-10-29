# ⚡ Simple Fastify API

A lightweight REST API built with **Fastify** and **SQLite**, showcasing a minimal backend structure with fast performance and modern JavaScript syntax.

---

## 🧠 Tech Stack

- **Fastify** – High-performance web framework for Node.js  
- **SQLite** – Lightweight file-based database  
- **ES Modules** – Modern JavaScript module system  
- **Node.js** – Runtime environment for backend logic  

---

## 🧩 Project Structure
```plaintext
simple-fastify-app/
│
├── package.json # Project metadata & dependencies
├── server.js # Main Fastify app & routes
├── db.js # SQLite connection helper
├── init-db.js # One-time database initialization
└── README.md
```

---

## ⚙️ Setup & Installation

1. **Clone or create project directory:**
   ```bash
   mkdir simple-fastify-app
   cd simple-fastify-app
   ```

2. **Initialize and install dependencies:**
  ```bash
    npm init -y
    npm install fastify sqlite sqlite3
  ```

3. **Enable ES Modules in package.json:**
      ```bash
    {
      "type": "module"
    }
   ```

4. **Initialize the database:**
   ```bash
   node init-db.js
   ```

5. **Run the server:**
   ```bash
    node server.js
   ```

6. **Test the API:**
Visit http://localhost:3000/users

## 🧩 API Endpoints
Method	Endpoint	Description
GET	/users	Fetch all users from DB

Example Response:

[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]


## 🧱 Database Initialization

The init-db.js script creates and populates a simple users table:

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
);

Run this once before starting the server:
```bash
    node init-db.js
```

## 🚀 Development Notes
- **Fastify Dev Server:** Start instantly with node server.js

- **Hot Reloading (Optional):** Use nodemon for auto-restarts during dev
  ```bash
  npm install -g nodemon
  nodemon server.js
  ```

- **SQLite DB File:** Stored locally as database.db in project root

## Deployment
You can deploy this Fastify app easily to:

  - Render, Railway, or Fly.io
  - Any Node.js-capable hosting

Example production start command:
  ```bash
  node server.js
  ```

## Future Improvements
  - Add TypeScript support (ts-node, @types/node)
  - Add POST /users endpoint for insertions
  - Integrate simple authentication (JWT)
  - Add unit tests via Jest or Vitest
