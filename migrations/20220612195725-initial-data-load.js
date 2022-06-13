'use strict'

const authorsData = [
  {
    'id': 1,
    'name': 'Bram Stoker'
  },
  {
    'id': 2,
    'name': 'Oscar Wilde'
  },
  {
    'id': 3,
    'name': 'Alice Walker'
  }
]

const genreData = [
  {
    'id': 1,
    'genre': 'Fiction'
  },
  {
    'id': 2,
    'genre': 'Horror'
  },
  {
    'id': 3,
    'genre': 'Fantasy'
  },
  {
    'id': 4,
    'genre': 'Gothic'
  },
  {
    'id': 5,
    'genre': 'Historical Fiction'
  }
]

const bookData = [
  {
    'id': 1,
    'title': 'Dracula'
  },
  {
    'id': 2,
    'title': 'The Picture of Dorian Gray'
  },
  {
    'id': 3,
    'title': 'The Color Purple'
  }
]

const booksGenresData = [
  {
    'id': 1,
    'bookId': 1,
    'genreId': 1
  },
  {
    'id': 2,
    'bookId': 1,
    'genreId': 2
  },
  {
    'id': 3,
    'bookId': 1,
    'genreId': 3
  },
  {
    'id': 4,
    'bookId': 2,
    'genreId': 1
  },
  {
    'id': 5,
    'bookId': 2,
    'genreId': 2
  },
  {
    'id': 6,
    'bookId': 2,
    'genreId': 4
  },
  {
    'id': 7,
    'bookId': 2,
    'genreId': 3
  },
  {
    'id': 8,
    'bookId': 3,
    'genreId': 1
  },
  {
    'id': 9,
    'bookId': 3,
    'genreId': 5
  }
]

const booksAuthorsData = [
  {
    'id': 1,
    'bookId': 1,
    'authorId': 1
  },
  {
    'id': 2,
    'bookId': 2,
    'authorId': 2
  },
  {
    'id': 3,
    'bookId': 3,
    'authorId': 3
  }
]

module.exports = {
  async up(queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.bulkInsert('authors', authorsData)

     await queryInterface.bulkInsert('genres', genreData)

     await queryInterface.bulkInsert('books', bookData)

     await queryInterface.bulkInsert('booksgenres', booksGenresData)

     return queryInterface.bulkInsert('booksauthors', booksAuthorsData)
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.bulkDelete('booksauthors')

     await queryInterface.bulkDelete('booksgenres')

     await queryInterface.bulkDelete('books')

     await queryInterface.bulkDelete('genres')

     return queryInterface.bulkDelete('authors')
  }
}
