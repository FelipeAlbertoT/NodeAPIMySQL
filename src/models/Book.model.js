const db = require('./db')

const Book = db.sequelize.define('books', {
    title: {
        type: db.Sequelize.STRING
    },
    author: {
        type: db.Sequelize.STRING
    },
    category: {
        type: db.Sequelize.STRING
    }
});

//Book.sync({ force: true })

module.exports = Book