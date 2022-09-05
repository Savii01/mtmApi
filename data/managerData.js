const managers = require('../models/manager');
var Manager= {
    create: create,
    findAll: findAll,
    findById: findById,
    updateManager: updateManager,
    deleteById: deleteById,
}



function create(Manager) {
    const manager = new managers(Manager);
    return manager.save();
}


function findAll() {
    return managers.findAll();
}

function findById(managerID) {
    return managers.findByPk(managerID);
}

function updateManager(manager, managerID) {
    const updatemanager = {
        managerName: manager.managerName,
        gender: manager.gender,
        email: manager.email,
        addressID: manager.addressID,
        accountID: manager.accountID,
        assID: manager.assID,
        assName: manager.assName
    };
    return managers.update(updatemanager, { where: { managerID: managerID }
});
}

function deleteById(managerID) {
    return managers.destroy({ where: {managerID: managerID } });
}


module.exports = Manager;