const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');
const Address = require('./address')

const general = connectDb.define('general',{
        companyID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        companyName:{type: Sequelize.STRING, allowNull: false},
        Email:{type: Sequelize.STRING, allowNull: false},
        Phone:{type:Sequelize.STRING, allowNull: false},
        addressID:{type:Sequelize.INTEGER,
            references:{
                model: "address",
                key: "addressID",
            }}

    });

    Address.belongsTo(general, {as: 'general',foreignKey:'addressID'});
    general.hasOne(Address,{as:'Address',foreignKey: 'addressID'})

module.exports =  general;
