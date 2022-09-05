const invoice = require('../models/invoice');
var Invoice = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateInvoice: updateInvoice,
    deleteById: deleteById,
}



function create(invoices) {
    var invoiceS = new invoice(invoices);
    return invoiceS.save();
}


function findAll() {
    return invoice.findAll();
}

function findById(invoiceID) {
    return invoice.findByPk(invoiceID);
}

function updateInvoice(invoicee, invoiceID) {
    const updateInvoices = {
        artistName: invoicee.artistName,
        EventOrgName: invoicee.EventOrgName,
        statuss: invoicee.statuss,
        amount: invoicee.amount,
        Date: invoicee.Date,
        due: invoicee.due,
        artistID: invoicee.artistID,
        eventID: invoicee.eventID,
        eventOrgID: invoicee.eventOrgID
    };
    return invoice.update(updateInvoices, { where: { invoiceID: invoiceID }
});
}

function deleteById(invoiceID) {
    return invoice.destroy({ where: { invoiceID: invoiceID } });
}


module.exports = Invoice;