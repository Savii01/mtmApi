const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const contract = connectDb.define('contracts',{
    contractID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    statuss:{type:Sequelize.STRING, allowNull:false},
    Date:{type: Sequelize.STRING, allowNull: false},
    Expire:{type:Sequelize.STRING, allowNull: false},
});

module.exports = contract;