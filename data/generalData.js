const gen = require('../models/general');
var General = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateGeneral: updateGeneral,
    deleteById: deleteById
}



function create(Gen) {
    const generals = new adminAss(Gen);
    return generals.save();
}


function findAll() {
    return gen.findAll();
}

function findById(companyID) {
    return gen.findByPk(companyID);
}

function updateGeneral(general, companyID) {
    const updategen = {
        companyName: general.eventType,
        Email: general.Email,
        Phone: general.Phone,
        addressID: general.addressID,
    };
    return gen.update(updategen, { where: { companyID: companyID }
});
}

function deleteById(companyID) {
    return companyID.destroy({ where: { companyID: companyID } });
}


module.exports = General;