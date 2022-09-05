const contracts = require('../models/contract');
var Contract = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateContract: updateContract,
    deleteById: deleteById,
}



function create(contractI) {
    var contract = new contracts(contractI);
    return contract.save();
}


function findAll() {
    return contracts.findAll();
}

function findById(contractID) {
    return contracts.findByPk(contractID);
}

function updateContract(contract, contractID) {
    const updatecontract = {
        statuss: contract.statuss,
        Date: contract.Date,
        Expire: contract.Expire
    };
    return contracts.update(updatecontract, { where: { contractID: contractID }
});
}

function deleteById(contractID) {
    return contracts.destroy({ where: { contractID: contractID } });
}


module.exports = Contract;