const {Sequelize} = require('sequelize');

//connection string
const db = new Sequelize('MTM', 'sa', 'savii123', {
  // host: 'Savii\\SQLVER19',   // I removed this and it connected but while it is still there i have the *getaddrinfo error*
  dialect: 'mssql'

});


module.exports = db;