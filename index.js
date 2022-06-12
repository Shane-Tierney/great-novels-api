const express = require('express')
const {
  getAllAuthors,
  getAuthorsNovelsGenresByAuthorIdPartialMatch,
  getAllGenres,
  getGenreAuthorsNovelsByGenreId,
  getAllNovels,
  getNovelByIdWithGenresAuthorsPartialMatch
} = require('./controllers/books')

const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorsNovelsGenresByAuthorIdPartialMatch)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenreAuthorsNovelsByGenreId)

app.get('/books', getAllNovels)

app.get('/books/:id', getNovelByIdWithGenresAuthorsPartialMatch)

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('app is up http://localhost:1337 ...')
})
