// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const helmet = require('helmet');
const { errors } = require('celebrate');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger'); // импорт логов
const { MONGO_URL } = require('./utils/constants');
const limiter = require('./middlewares/rateLimit');

const { PORT = 3000 } = process.env;

const app = express();
app.use(cors());

mongoose.connect(MONGO_URL);

app.use(limiter);

app.use(helmet());

// подключаем логгер запросов
app.use(requestLogger);

// подключаем парсеры
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

// подключаем логгер ошибок
app.use(errorLogger);

// обработчик ошибок celebrate
app.use(errors());

app.use(errorHandler);

app.listen(PORT);
