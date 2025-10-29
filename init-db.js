// init-db.js
import { openDb } from './db.js';

async function init() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);

  await db.run(`DELETE FROM users`);
  await db.run(`INSERT INTO users (name) VALUES ('Alice')`);
  await db.run(`INSERT INTO users (name) VALUES ('Bob')`);

  console.log('✅ Database initialized');
}

init();
