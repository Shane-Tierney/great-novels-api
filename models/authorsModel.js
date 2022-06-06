const authorsModel = (connection, Sequelize) => {
    return connection.define('authors', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = { authorsModel }