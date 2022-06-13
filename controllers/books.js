/* eslint-disable max-len */
const {
  authors, genres, books, booksauthors, booksgenres
} = require('../models/index')
const Sequelize = require('sequelize')

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

const getAuthorsNovelsGenresByAuthorIdPartialMatch = async (request, response) => {
  try {
    const { searchTerm } = request.params

    const authorsNovelsGenres = await authors.findOne({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      where: {
        [Sequelize.Op.or]: [
          { name: { [Sequelize.Op.like]: `%${searchTerm}%` } },
          { id: { [Sequelize.Op.like]: `%${searchTerm}%` } }
        ]
      },
      include: [{ model: books, include: [{ model: genres }], }]
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

const getNovelByIdWithGenresAuthorsPartialMatch = async (request, response) => {
  try {
    const { searchTerm } = request.params

    const novelsAuthorsGenres = await books.findOne({
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      where: {
        [Sequelize.Op.or]: [
          { title: { [Sequelize.Op.like]: `%${searchTerm}%` } },
          { id: { [Sequelize.Op.like]: `%${searchTerm}%` } }
        ]
      },
      include: [{ model: genres }, { model: authors }]
    })

    return response.send(novelsAuthorsGenres)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

const getAllBooksAuthors = async (request, response) => {
  try {
    const listOfAuthors = await booksauthors.findAll()

    return response.send(listOfAuthors)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return response.sendStatus(500)
  }
}

const getAllBooksGenres = async (request, response) => {
  try {
    const listOfAuthors = await booksgenres.findAll()

    return response.send(listOfAuthors)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return response.sendStatus(500)
  }
}

module.exports = {
  getAllAuthors,
  getAuthorsNovelsGenresByAuthorIdPartialMatch,
  getAllGenres,
  getGenreAuthorsNovelsByGenreId,
  getAllNovels,
  getNovelByIdWithGenresAuthorsPartialMatch,
  getAllBooksAuthors,
  getAllBooksGenres
}
