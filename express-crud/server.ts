import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: { rejectUnauthorized: false },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades"
`;
    const result = await db.query(sql);
    const grades = result.rows;
    res.status(200).json(grades);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1
  `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) throw new ClientError(404, `gradeId: ${gradeId} not found`);
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { course, name, score } = req.body;
    if (course === undefined || course === '') {
      throw new ClientError(400, `course is required`);
    }
    if (name === undefined || name === '') {
      throw new ClientError(400, `name is required`);
    }
    if (score === undefined || score === '') {
      throw new ClientError(400, `score is required`);
    }
    if (!Number.isInteger(+score)) {
      throw new ClientError(400, `Non-integer gradeId: ${score}`);
    }
    if (score > 100 || score < 0)
      throw new ClientError(400, `score: ${score} is invalid`);
    const sql = `
    insert into "grades" ("course", "name", "score")
    values ($1, $2, $3)
    returning *
    `;
    const params = [course, name, score];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    res.status(201).json(newGrade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { course, name, score } = req.body;
    if (course === undefined || course === '') {
      throw new ClientError(400, `course is required`);
    }
    if (name === undefined || name === '') {
      throw new ClientError(400, `name is required`);
    }
    if (score === undefined || score === '') {
      throw new ClientError(400, `score is required`);
    }
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
    update "grades"
    set    "course" = $1,
           "name" = $2,
           "score" = $3
    where  "gradeId" = $4
    returning *
    `;
    const params = [course, name, score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade)
      throw new ClientError(404, `gradeId: ${gradeId} not found`);
    res.status(200).json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Non-integer gradeId: ${gradeId}`);
    }
    const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    if (!result) throw new ClientError(404, `gradeId ${gradeId} not found`);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
