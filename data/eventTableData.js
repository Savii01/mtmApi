const eventTables = require('../models/eventTable');
var EventTable = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateEventTable: updateEventTable,
    deleteById: deleteById
}



function create(eventTableQ) {
    const eventTable = new eventTables(eventTableQ);
    return eventTable.save();
}


function findAll() {
    return eventTables.findAll();
}

function findById(eventID) {
    return eventTables.findByPk(eventID);
}

function updateEventTable(eventTable, eventID) {
    const updatetable = {
        eventType: eventTable.eventType,
        description: eventTable.description,
        date: eventTable.date,
        time: eventTable.time,
        location: eventTable.location,
        artistID: eventTable.artistID,
        eventOrgID: eventTable.eventOrgID
    };
    return eventTables.update(updatetable, { where: { eventID: eventID }
});
}

function deleteById(eventID) {
    return eventTables.destroy({ where: { eventID: eventID } });
}

module.exports = EventTable;