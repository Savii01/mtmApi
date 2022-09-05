const eventOrgs = require('../models/eventOrg');
var EventOrg = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateEventOrg: updateEventOrg,
    deleteById: deleteById
}



function create(eventOrgI) {
    const eventOrg = new eventOrgs(eventOrgI);
    return eventOrg.save();
}


function findAll() {
    return eventOrgs.findAll();
}

function findById(eventOrgID) {
    return eventOrgs.findByPk(eventOrgID);
}

function updateEventOrg(eventOrg, eventOrgID) {
    const updateeventOrg = {
        companyName: eventOrg.companyName,
        eventOrgName: eventOrg.eventOrgName,
        email: eventOrg.email,
        phone: eventOrg.phone,
        addressID: eventOrg.addressID,
        
    };
    return eventOrgs.update(updateeventOrg, { where: { eventOrgID: eventOrgID }
});
}

function deleteById(eventOrgID) {
    return eventOrgs.destroy({ where: { eventOrgID: eventOrgID } });
}

module.exports = EventOrg;