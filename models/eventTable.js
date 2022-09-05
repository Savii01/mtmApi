const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');
const artist = require('./artist')
const eventOrg = require('./eventOrg')

const eventTable = connectDb.define('eventTables',{
        eventID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        eventType:{type: Sequelize.STRING, allowNull: false},
        description:{type:Sequelize.STRING, allowNull: false},
        date:{type:Sequelize.STRING, allowNull: false},
        time:{type:Sequelize.STRING, allowNull: false},
        location:{type:Sequelize.STRING, allowNull: false},
        artistID:{type:Sequelize.INTEGER,
            references:{
                model: artist,
                key: "artistID",
            }},
        eventOrgID:{type:Sequelize.INTEGER,
            references:{
                model: eventOrg,
                key: "eventOrgID"
        }},
    })

    artist.belongsTo(eventTable, {as: 'eventTables',foreignKey:'artistID'});
    eventTable.hasMany(artist,{as:'artist',foreignKey: 'artistID'})
    
    eventOrg.belongsTo(eventTable, {as: 'eventTables',foreignKey:'eventOrgID'});
    eventTable.hasOne(eventOrg,{as:'eventOrg',foreignKey: 'eventOrgID'})
    module.exports = eventTable;