const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');
const Address = require('./address')

const eventOrg = connectDb.define('eventOrgs',{
    eventOrgID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    companyName:{type:Sequelize.STRING, allowNull: false},
    eventOrgName:{type: Sequelize.STRING,allowNull: false},
    email:{type:Sequelize.STRING,allowNull:false},
    phone:{type:Sequelize.STRING, allowNull: false},
    addressID:{type:Sequelize.STRING, allowNull: false}
        
    });

    Address.belongsTo(eventOrg, {as: 'eventOrgs',foreignKey:'addressID'});
    eventOrg.hasOne(Address,{as:'Address',foreignKey: 'addressID'})

    module.exports = eventOrg;