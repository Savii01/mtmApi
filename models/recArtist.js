const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const recArtist = connectDb.define('recArtists',{
        recArtistID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        recArtistName:{type: Sequelize.STRING, allowNull: false},
        email:{type: Sequelize.STRING, allowNull: false},
        description:{type:Sequelize.STRING, allowNull: false},
        addressID:{type:Sequelize.INTEGER,
            references:{
                model:"address",
                key: "addressID"
        }},
        managerID:{type:Sequelize.INTEGER,
            references:{
                model: "manager",
                key: "managerID"
            }},
        
    });
    module.exports =  recArtist;