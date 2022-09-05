const Sequelize = require('sequelize');
const connectdb = require ('../config/configDB');

const Address = connectdb.define('addresses',{
    addressID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement:true},
    city:{type: Sequelize.STRING, allowNull:false},
    state:{type:Sequelize.STRING, allowNull:false},
    country:{type:Sequelize.STRING, allowNull:false},   
},
{freezeTableName: true});



module.exports = Address;