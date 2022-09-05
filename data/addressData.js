const address = require('../models/address');
var Address = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateaddress: updateaddress,
    deleteById: deleteById,
}



function create(addresses) {
    const Aaddress = new address(addresses);
    return Aaddress.save();
}


function findAll() {
    return address.findAll();
}

function findById(addressID) {
    return address.findByPk(addressID);
}

function updateaddress(addresses, addressID) {
    const updateaddress = {
       city: addresses.city,
       state: addresses.state,
       country: addresses.country
    };
    return address.update(updateaddress, { where: { addressID: addressID } });
}

function deleteById(addressID) {
    return address.destroy({ where: { addressID: addressID } });
}


module.exports = Address;