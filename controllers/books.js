const {
  authors, genres, books
} = require('../models/index')

const getAllAuthors = async (request, response) => {
  try {
    const listOfAuthors = await authors.findAll()

    return response.send(listOfAuthors)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return response.sendStatus(500)
  }
}

const getAuthorsNovelsGenresByAuthorId = async (request, response) => {
  try {
    const { id } = request.params

    const authorsNovelsGenres = await authors.findOne({
      where: { id },
      include: [{ model: books, include: [{ model: genres }] }]
    })

    return response.send(authorsNovelsGenres)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

const getAllGenres = async (request, response) => {
  try {
    const listOfGenres = await genres.findAll()

    return response.send(listOfGenres)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return response.sendStatus(500)
  }
}

const getGenreAuthorsNovelsByGenreId = async (request, response) => {
  try {
    const { id } = request.params

    const genreNovelsAuthors = await genres.findOne({
      where: { id },
      include: [{ model: books, include: [{ model: authors }] }]
    })

    return response.send(genreNovelsAuthors)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

const getAllNovels = async (request, response) => {
  try {
    const listOfNovels = await books.findAll()

    return response.send(listOfNovels)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return response.sendStatus(500)
  }
}

const getNovelByIdWithGenresAuthors = async (request, response) => {
  try {
    const { id } = request.params

    const novelsAuthorsGenres = await books.findOne({
      where: { id },
      include: [{ model: genres }, { model: authors }]
    })

    return response.send(novelsAuthorsGenres)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

module.exports = {
  getAllAuthors,
  getAuthorsNovelsGenresByAuthorId,
  getAllGenres,
  getGenreAuthorsNovelsByGenreId,
  getAllNovels,
  getNovelByIdWithGenresAuthors
}
