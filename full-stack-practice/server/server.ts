import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

type Todo = {
  entryId: number;
  task: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "products"
    `;
    const result = await db.query<Todo>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (productId === undefined)
      throw new ClientError(400, `${productId} is not a valid productId`);
    const sql = `
      select *
        from "products"
        where "productId" = $1
    `;
    const params = [productId];
    const result = await db.query<Todo>(sql, params);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
