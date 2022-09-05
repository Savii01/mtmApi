const manager = require('../data/managerData');
const {validationResult} = require('express-validator');

const Manager= {
    createManager:createManager,
    findAllManager: findAllManager,
    findManagerByID: findManagerByID,
    updateManager: updateManager,
    deleteById: deleteById
}

//creating

function createManager(req, res) {
    const manag = req.body;

    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }

    manager.create(manag).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllManager(req, res) {
    manager.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findManagerByID(req, res) {
    manager.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateManager(req, res) {
    manager.updateManager(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Manager is successfully updated",
                manager: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    manager.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Manager successfully deleted ",
                manager: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}




module.exports = Manager;