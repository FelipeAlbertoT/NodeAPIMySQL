const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const expressValidator = require('express-validator')
const dotenv = require('dotenv')
const booksRouter = require('./routes/books.routes')

dotenv.config()

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())

app.use('/books', booksRouter)

app.listen(process.env.PORT)