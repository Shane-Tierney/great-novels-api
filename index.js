const express = require('express')
const {
  getAllAuthors,
  getAuthorsNovelsGenresByAuthorId,
  getAllGenres,
  getGenreAuthorsNovelsByGenreId,
  getAllNovels,
  getNovelByIdWithGenresAuthors
} = require('./controllers/books')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorsNovelsGenresByAuthorId)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreAuthorsNovelsByGenreId)

app.get('/books', getAllNovels)

app.get('/books/:id', getNovelByIdWithGenresAuthors)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('app is up http://localhost:1337 ...')
})
