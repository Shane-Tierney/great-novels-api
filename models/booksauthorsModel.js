const booksauthorsModel = (connection, Sequelize, books, authors) => {
  return connection.define('booksauthors', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    bookId: { type: Sequelize.INTEGER, references: { model: books, key: 'id' } },
    authorId: { type: Sequelize.INTEGER, references: { model: authors, key: 'id' } }
  }, { paranoid: true })
}

module.exports = { booksauthorsModel }
