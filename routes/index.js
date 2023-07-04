const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { signinValidate, signupValidate } = require('../middlewares/validation');
const NotFound = require('../utils/errors/NotFound');

router.post('/signin', signinValidate, login); // проверяет переданные почту и пароль и возвращает JWT
router.post('/signup', signupValidate, createUser); // создаёт пользователя с переданными email, password и name

router.use(auth); // защищает маршруты, которым нужны авторизация

router.use('/', userRouter);
router.use('/', movieRouter);

router.use('*', (req, res, next) => next(new NotFound('Запрашиваемая страница не найдена')));

module.exports = router;
