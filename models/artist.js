const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');
const Address = require('./address')
const contract= require('./contract')
const manager = require('./manager')
const management= require('./management')
const acctDetails = require('./acctDetails');




const artistU = connectDb.define('artists',{
    artistID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    artistName:{type: Sequelize.STRING,allowNull: false},
    gender:{type:Sequelize.STRING, allowNull: false},
    email:{type:Sequelize.STRING, allowNull: false},
    genre:{type:Sequelize.STRING, allowNull: false},
    addressID:{type:Sequelize.INTEGER,
        references:{
            model:Address,
            key: "addressID"
    }},
    contractID:{type:Sequelize.INTEGER,
        references:{
        model:contract,
        key: "contractID"
    }},
    accountID:{type:Sequelize.INTEGER,
        references:{
        model:acctDetails,
        key: "accountID"
    }},
    managementID:{type:Sequelize.INTEGER,
        references:{
        model: management,
        key: "managementID"
    }},    
    managerID:{type:Sequelize.INTEGER,
        references:{
        model: manager,
        key: "managerID"
    }},
    managerName:{type:Sequelize.STRING, allowNull: false},
})


    Address.belongsTo(artistU, {as: 'artistU',foreignKey:'addressID'});
    artistU.hasOne(Address,{as:'Address',foreignKey: 'addressID'})

    acctDetails.belongsTo(artistU,{as:'artistU',foreignKey:'accountID'})
    artistU.hasOne(acctDetails,{as:'acctDetails',foreignKey:'accountID'})

    contract.belongsTo(artistU, {as: 'artistU',foreignKey:'contractID'});
    artistU.hasMany(contract,{as:'contract',foreignKey: 'contractID'})
 
    manager.belongsTo(artistU, {as: 'artistU',foreignKey:'managerID'});
    artistU.hasOne(manager,{as:'manager',foreignKey: 'managerID'})
    
    management.belongsTo(artistU, {as: 'artistU',foreignKey:'managementID'});
    artistU.hasOne(management,{as:'management',foreignKey: 'managementID'})

module.exports = artistU;