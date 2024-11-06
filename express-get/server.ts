import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select "description", "filmId", "replacementCost", "title"
    from "films"
    order by "replacementCost" desc
    limit 2
    `;
    const result = await db.query(sql);
    const films = result.rows;
    res.json(films);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (!Number.isInteger(+filmId)) {
      throw new ClientError(400, `${filmId} is not integer`);
    }
    const sql = `
    select "description", "filmId", "replacementCost", "title"
    from "films"
    where "filmId" = $1
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    if (!filmId) throw new ClientError(404, `${filmId} not found`);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
