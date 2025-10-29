// server.js
import Fastify from 'fastify';
import { openDb } from './db.js';

const fastify = Fastify({ logger: true });

// Route: GET /users
fastify.get('/users', async (request, reply) => {
  const db = await openDb();
  const users = await db.all('SELECT * FROM users');
  return users;
});

// Start server
try {
  await fastify.listen({ port: 3000 });
  console.log('🚀 Server running at http://localhost:3000');
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
