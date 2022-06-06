const Sequelize = require('sequelize')
const { authorsModel } = require('./authorsModel')
const { genresModel } = require('./genresModel')
const { booksModel } = require('./booksModel')
const { booksauthorsModel } = require('./booksauthorsModel')
const { booksgenresModel } = require('./booksgenresModel')

const connection = new Sequelize('bookDb', 'bookWorm', 'password123', {
  host: 'localhost', dialect: 'mysql'
})

const authors = authorsModel(connection, Sequelize)
const genres = genresModel(connection, Sequelize)
const books = booksModel(connection, Sequelize)
const booksauthors = booksauthorsModel(connection, Sequelize, books, authors)
const booksgenres = booksgenresModel(connection, Sequelize, books, genres)

authors.belongsToMany(books, { through: booksauthors })
books.belongsToMany(authors, { through: booksauthors })

genres.belongsToMany(books, { through: booksgenres })
books.belongsToMany(genres, { through: booksgenres })

module.exports = {
  authors, genres, books, booksauthors, booksgenres
}
