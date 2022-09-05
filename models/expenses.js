const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const expenses = connectDb.define('expenses',{
        expenseID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        expenses:{type: Sequelize.STRING, allowNull: false},
        cost:{type: Sequelize.STRING, allowNull: false},
        incuredBy:{type: Sequelize.STRING, allowNull: false},
       dateIncured:{type:Sequelize.STRING, allowNull: false},

    });
    module.exports =  expenses;