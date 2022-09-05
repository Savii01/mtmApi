const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');
const acctDetails = require('./acctDetails');
const Address = require('./address')

const Manager = connectDb.define('managers',{
        managerID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        managerName:{type: Sequelize.STRING,allowNull: false},
        gender:{type:Sequelize.STRING, allowNull: false},
        email:{type:Sequelize.STRING, allowNull: false},
        addressID:{type:Sequelize.INTEGER,
            references:{
                model: Address,
                key: 'addressID'
            }},
        accountID:{type:Sequelize.INTEGER,
            references:{
                model: acctDetails,
                key: "accountID",
            }},
            assID:{type:Sequelize.INTEGER,
                references:{
                    model:"adminAss",
                    key: "assID",
                }},
        assName:{type: Sequelize.STRING, allowNull: false},
    });

    Address.belongsTo(Manager, {as: 'Managers',foreignKey:'addressID'});
    Manager.hasOne(Address,{as:'Address',foreignKey: 'addressID'})

    acctDetails.belongsTo(Manager,{as:'Managers',foreignKey:'accountID'})
    Manager.hasOne(acctDetails,{as:'acctDetails',foreignKey:'accountID'})

    module.exports =  Manager;