const acctDetails = require('../models/acctDetails');
var AccountDetail = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateacctDetails: updateacctDetails,
    deleteById: deleteById,
}



function create(acctDetail) {
    const AacctDetails = new acctDetails(acctDetail);
    return AacctDetails.save();
}


function findAll() {
    return acctDetails.findAll();
}

function findById(accountID) {
    return acctDetails.findByPk(accountID);
}

function updateacctDetails(acctDetail, accountID) {
    const updateacctDetails = {
       acctName: acctDetail.acctName,
       acctNumber: acctDetail.acctNumber,
       bank: acctDetail.bank
    };
    return acctDetails.update(updateacctDetails, { where: { accountID: accountID } });
}

function deleteById(accountID) {
    return acctDetails.destroy({ where: { accountID: accountID } });
}


module.exports = AccountDetail;