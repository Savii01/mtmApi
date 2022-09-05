const contracts = require('../data/contractData');
const {validationResult} = require('express-validator');

const Contracts = {
    createContract:createContract,
    findAllContracts: findAllContracts,
    findContractByID: findContractByID,
    updateContracts: updateContracts,
    deleteById: deleteById
}

//creating

function createContract(req, res) {
    const contrac = req.body;
    
    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }
    
    contracts.create(contrac).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllContracts(req, res) {
    contracts.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findContractByID(req, res) {
    contracts.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateContracts(req, res) {
    contracts.updateContract(req.body, req.params.id).
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
    contracts.deleteById(req.params.id).
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


module.exports = Contracts;