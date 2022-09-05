const adminAsst = require('../data/adminAssData');
const {validationResult} = require('express-validator');

const AdminAssT = {
    createAdminAss: createAdminAss,
    findAllAdminAss: findAllAdminAss,
    findAdminAssByID: findAdminAssByID,
    updateAdmin: updateAdmin,
    deleteById: deleteById
}

//creating

function createAdminAss(req, res) {
    const adminAss = req.body;
    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }
    adminAsst.create(adminAss).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllAdminAss(req, res) {
    adminAsst.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findAdminAssByID(req, res) {
    adminAsst.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateAdmin(req, res) {
    adminAsst.updateAdmin(req.body, req.params.id)
        .then((data) => {
            res.status(200).json({
                message: "Admin Assistant is successfully updated",
                adminAss: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    adminAsst.deleteById(req.params.id)
        .then((data) => {
            res.status(204).json({
                message: "Admin Assistant successfully deleted ",
                adminAss: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = AdminAssT;