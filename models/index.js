const Sequelize = require('sequelize')
const { authorsModel } = require('./authorsModel')
const { genresModel } = require('./genresModel')
const { booksModel } = require('./booksModel')
const { booksauthorsModel } = require('./booksauthorsModel')
const { booksgenresModel } = require('./booksgenresModel')
const allConfigs = require('../configs/sequelize')

const environment = process.env.NODE_ENV || 'development'
const { username, password, database, host, dialect } = allConfigs[environment]

const connection = new Sequelize(database, username, password, {
  host: host, dialect: dialect
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
