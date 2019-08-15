const dotenv = require('dotenv')
const Sequelize = require('sequelize')
dotenv.config()

const sequelize = new Sequelize(
    process.env.DB, 
    process.env.DBUSER, 
    process.env.PASS, {
        host: process.env.HOST,
        dialect: 'mysql'
    }
)

module.exports = { Sequelize, sequelize }