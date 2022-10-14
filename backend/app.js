require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const {
  validationCreateUser,
  validationLogin,
} = require('./middlewares/validations');
const errorHandler = require('./middlewares/errorHandler');
const { createUser, login } = require('./controllers/users');
const routes = require('./routes');
// eslint-disable-next-line import/order
const { errors } = require('celebrate');
// eslint-disable-next-line import/order
// const cookieParser = require('cookie-parser');
const { requestLogger, errorLogger } = require('./middlewares/logger');
// eslint-disable-next-line import/no-unresolved,import/order
// const cors = require('cors');
const cors = require('./middlewares/cors');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

app.use(cors);
// app.use(cookieParser());

// const allowedCors = [
//   'http://localhost:3000',
//   'http://localhost:3001',
//   'http://andkov.nomoredomains.icu',
//   'https://andkov.nomoredomains.icu',
// ];

// app.use(cors({
//   origin: allowedCors,
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер может упасть');
  }, 0);
});

app.use(requestLogger);
app.post('/signin', validationLogin, login);
app.post('/signup', validationCreateUser, createUser);

app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
