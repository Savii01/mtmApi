const Sequelize = require('sequelize');
const connectdb = require ('../config/configDB');


const acctDetails = connectdb.define('acctDetails',{
    accountID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true},
    accountName:{type: Sequelize.STRING, allowNull:false},
    accountNumber:{type:Sequelize.STRING, allowNull:false},
    bank:{type:Sequelize.STRING, allowNull:false}
});


module.exports = acctDetails;