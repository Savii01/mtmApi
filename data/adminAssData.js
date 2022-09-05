const adminAss = require('../models/adminAss');
const AdminAss = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateAdmin: updateAdmin,
    deleteById: deleteById
}



function create(asst) {
    const newadminAss = new adminAss(asst);
    return newadminAss.save();
}


function findAll() {
    return adminAss.findAll();
}

function findById(assID) {
    return adminAss.findByPk(assID);
}

function updateAdmin(adminass, assID) {
    const update = {
        assName: adminass.acctName,
        gender: adminass.gender,
        email: adminass.email,
        addressID: adminass.addressID,
        accountID: adminass.accountID,
    };
    return adminAss.update(update, { where: { assID: assID }
});
}

function deleteById(assID) {
    return adminAss.destroy({ where: { assID: assID } });
}



module.exports = AdminAss;