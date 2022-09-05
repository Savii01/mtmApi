const management = require('../data/managementData');
const {validationResult} = require('express-validator');

const Management = {
    createManagement:createManagement,
    findAllManagment: findAllManagment,
    findManagementByID: findManagementByID,
    updateManagement: updateManagement,
    deleteById: deleteById
}

//creating

function createManagement(req, res) {
    const manage = req.body;

    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }

    management.create(manage).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllManagment(req, res) {
    management.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findManagementByID(req, res) {
    management.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateManagement(req, res) {
    management.updateManagement(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Management is successfully updated",
                management: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    management.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Management successfully deleted ",
                management: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = Management;