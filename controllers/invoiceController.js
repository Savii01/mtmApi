const invoice = require('../data/invoiceData');
const {validationResult} = require('express-validator');

const Invoice = {
    createInvoice:createInvoice,
    findAllInvoice: findAllInvoice,
    findInvoiceByID: findInvoiceByID,
    updateInvoice: updateInvoice,
    deleteById: deleteById
}

//creating

function createInvoice(req, res) {
    const invoic = req.body;
    
    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }
    
    invoice.create(invoic).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllInvoice(req, res) {
    invoice.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findInvoiceByID(req, res) {
    contracts.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateInvoice(req, res) {
    invoice.updateInvoice(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Contract is successfully updated",
                contract: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    invoice.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Contract successfully deleted ",
                contract: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = Invoice;