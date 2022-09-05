const recArts = require('../data/recArtistData');
const {validationResult} = require('express-validator');

const RecArt = {
    createRecArt:createRecArt,
    findAllRecArt: findAllRecArt,
    findRecArtByID: findRecArtByID,
    updateRecArt: updateRecArt,
    deleteById: deleteById
}

//creating

function createRecArt(req, res) {
    const recc = req.body;

    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }


    recArts.create(recc)
    .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllRecArt(req, res) {
    recArts.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findRecArtByID(req, res) {
    recArts.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateRecArt(req, res) {
    recArts.updateRecArtist(req.body, req.params.id)
        .then((data) => {
            res.status(200).json({
                message: "Recommended Artist is successfully updated",
                recArt: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    recArts.deleteById(req.params.id)
        .then((data) => {
            res.status(204).json({
                message: "News successfully deleted ",
                recArt: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = RecArt;