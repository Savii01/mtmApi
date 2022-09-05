const gen = require('../data/generalData');
const {validationResult} = require('express-validator');

const General = {
    createGen:createGen,
    findAllGen: findAllGen,
    findGenByID: findGenByID,
    updateGen: updateGen,
    deleteById: deleteById
}

//creating

function createGen(req, res) {
    const Gen = req.body;

    
    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }

    gen.create(Gen).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllGen(req, res) {
    gen.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findGenByID(req, res) {
    gen.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateGen(req, res) {
    gen.updateGen(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Company is successfully updated",
                general: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    gen.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Company successfully deleted ",
                general: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = General;