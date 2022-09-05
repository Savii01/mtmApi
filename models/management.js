const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');
const expense = require('./expenses')
const Address = require('./address')


const management = connectDb.define('management',{
        managementID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        Month:{type: Sequelize.STRING, allowNull: false},
        totalIncome:{type:Sequelize.STRING,allowNull:false},
        artistPercent:{type:Sequelize.STRING,allowNull:false},
        companyPercent:{type:Sequelize.STRING,allowNull:false},
        expenseID:{type:Sequelize.INTEGER,
            references:{
                model:expense,
                key:"expenseID"
            }},
        eventOrgID:{type:Sequelize.INTEGER,
            references:{
                model:"eventOrg",
                key: "eventOrgID" 
        }},
    });

    expense.belongsTo(management, {as: 'managements',foreignKey:'expenseID'});
    management.hasOne(expense,{as:'expense',foreignKey: 'expenseID'})
 
    Address.belongsTo(management, {as: 'management',foreignKey:'addressID'});
    management.hasOne(Address,{as:'Address',foreignKey: 'addressID'})
  module.exports = management;