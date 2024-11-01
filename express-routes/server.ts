import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('handled GET req for /');
  console.log('handled GET req for /');
});

app.get('/notes', (req, res) => {
  res.send('handled GET req for /notes');
  console.log('handled GET req for /notes');
});

app.get('/notes/123', (req, res) => {
  res.send('handled GET req for /notes/123');
  console.log('handled GET req for /notes/123');
});

app.use((req, res, next) => {
  console.log('The date is', new Date());
  console.log('req.method: ', req.method);
  console.log('req.path: ', req.path);
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
