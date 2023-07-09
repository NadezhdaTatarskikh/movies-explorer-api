const mongoose = require('mongoose');
const { isURL } = require('validator');

const { ObjectId } = mongoose.Schema.Types;

const movieSchema = new mongoose.Schema({
  country: {
    // страна создания фильма
    type: String,
    required: true,
  },
  director: {
    // режиссёр фильма
    type: String,
    required: true,
  },
  duration: {
    // длительность фильма
    type: Number,
    required: true,
  },
  year: {
    //  год выпуска фильма
    type: String,
    required: true,
  },
  description: {
    // описание фильма
    type: String,
    required: true,
  },
  image: {
    // ссылка на постер к фильму
    type: String,
    required: true,
    validate: [isURL],
  },
  trailerLink: {
    // ссылка на трейлер фильма
    type: String,
    required: true,
    validate: [isURL],
  },
  thumbnail: {
    //  миниатюрное изображение постера к фильму
    type: String,
    required: true,
    validate: [isURL],
  },
  owner: {
    // _id пользователя, который сохранил фильм
    type: ObjectId,
    required: true,
    ref: 'user',
  },
  movieId: {
    //  id фильма, который содержится в ответе сервиса MoviesExplorer
    type: Number,
    required: true,
  },
  nameRU: {
    // название фильма на русском языке
    type: String,
    required: true,
  },
  nameEN: {
    // название фильма на английском языке
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
