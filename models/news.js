const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const news = connectDb.define('newsfeeds',{
        newsID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        Source:{type:Sequelize.STRING, allowNull: false},
       News:{type: Sequelize.STRING, allowNull: false},
        artistName:{type:Sequelize.STRING, allowNull: false},
        artistID:{type:Sequelize.INTEGER,
            references:{
                model:"artist",
                key: "artistID"
             }},
    });

    
    module.exports = news;