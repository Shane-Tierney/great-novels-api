const booksModel = (connection, Sequelize) => {
    return connection.define('books', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING, allowNull: false },
    }, { paranoid: true })
}

module.exports = { booksModel }
