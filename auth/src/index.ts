import express from 'express';
import 'express-async-errors';

import { json } from 'body-parser';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';


const app = express();
app.use(json());


app.all('*', async (req, res) => {
  throw new NotFoundError();
})

app.use(errorHandler);

app.get('/api/users/current-user', (req, res)=> {
  res.send('Hi');
})

app.listen(3000, () => {
  console.log('Listening on port: 3000!');
})