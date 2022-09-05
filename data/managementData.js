const managements = require('../models/management');
var Management = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateManagement: updateManagement,
    deleteById: deleteById
}



function create(Managements) {
    const management = new managements(Managements);
    return management.save();
}


function findAll() {
    return managements.findAll();
}

function findById(managementID) {
    return managements.findByPk(managementID);
}

function updateManagement(management, managementID) {
    const updatemanagement = {
        Month: management.Month,
        totalIncome: management.totalIncome,
        artistPercent: management.artistPercent,
        companyPercent: management.companyPercent,
        expenseID: management.expenseID,
        eventOrgID: management.eventOrgID,
        dateCreated: management.dateCreated
    };
    return managements.update(updatemanagement, { where: { managementID: managementID }
});
}

function deleteById(managementID) {
    return managements.destroy({ where: {managementID: managementID } });
}


module.exports = Management;