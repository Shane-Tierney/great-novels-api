const booksgenresModel = (connection, Sequelize, books, genres) => {
    return connection.define('booksgenres', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        bookId: { type: Sequelize.INTEGER, references: { model: books, key: 'id' } },
        genreId: { type: Sequelize.INTEGER, references: { model: genres, key: 'id' } }
    }, { paranoid: true })
}

module.exports = { booksgenresModel }
