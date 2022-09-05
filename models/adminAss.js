const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');
const Address = require('./address')
const acctDetails = require('./acctDetails');

const adminAsses = connectDb.define('adminAsses',{
    assID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    assName:{type: Sequelize.STRING,  allowNull: false},
    gender:{type:Sequelize.STRING, allowNull: false},
    email:{type:Sequelize.STRING, allowNull: false},
    addressID:{type:Sequelize.INTEGER,
        references:{
            model:Address,
            key: "addressID"
    }},
    accountID:{type:Sequelize.INTEGER, allowNull:false,
        references:{
            model:acctDetails,
            key:"accountID"
        }}
})


Address.belongsTo(adminAsses, {as: 'adminAsses',foreignKey:'addressID'});
adminAsses.hasOne(Address,{as:'adminAsses',foreignKey: 'addressID'})

acctDetails.belongsTo(adminAsses,{as:'adminAssess',foreignKey:'accountID'})
adminAsses.hasOne(acctDetails,{as:'acctDetails',foreignKey:'accountID'})
module.exports = adminAsses;