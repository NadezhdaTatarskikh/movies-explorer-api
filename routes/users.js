const router = require('express').Router();
const {
  getCurrentUser,
  updateUser,
} = require('../controllers/users');

const {
  userInfoValidate,
} = require('../middlewares/validation');

router.get('/me', getCurrentUser); //  возвращает информацию о пользователе (email и имя)
router.patch('/me', userInfoValidate, updateUser); // ообновляет информацию о пользователе (email и имя)

module.exports = router;
