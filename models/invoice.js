const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const invoice = connectDb.define('invoices',{
    invoiceID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    artistName:{type:Sequelize.STRING, allowNull:false},
    EventOrgName:{type:Sequelize.STRING, allowNull:false},
    statuss:{type:Sequelize.STRING, allowNull:false},
    amount:{type:Sequelize.STRING, allowNull:false},
    Date:{type: Sequelize.STRING, allowNull: false},
    due:{type:Sequelize.STRING, allowNull: false},
    artistID:{type:Sequelize.INTEGER,
        references:{
            model: "artist",
            key: "artistID"
        }},
    eventID:{type:Sequelize.INTEGER,
            references:{
                model: "EventTable",
                key: "eventID"  
    }
},
eventOrgID:{type:Sequelize.INTEGER,
            references:{
                model: "eventOrg",
                key: "eventOrgID"  
    }
}
});

module.exports = invoice;