const Book = require('../models/Book.model')

exports.getBooks = (req, res) => {
    Book.findAll()
    .then(books => res.json(books))
    .catch(error => res.status(400).json({ error }))
}

exports.createBook = (req, res) => {
    Book.create(req.body)
    .then(result => res.status(201).json(result))
    .catch(error => res.status(400).json({ error }))
}

exports.getBook = (req, res) => {
    Book.findByPk(req.params.id)
    .then((book) => {
        if(!book) {
            return res.status(404).json({ error: "Book not found!" })
        }
        res.json(book)
    })
}

exports.updateBook = (req, res) => {
    const query = { where: { id: req.params.id} }
    const update = {
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    }
    Book.update(
        update,
        query
      )
      .then(rowsUpdated => res.json(rowsUpdated))
}

exports.deleteBook = (req, res) => {
    Book.destroy({ where: { 'id': req.params.id } })
    .then(() => {
        res.sendStatus(204)
    })
    .catch(error => {
        return res.status(400).json({ error })
    })
}
