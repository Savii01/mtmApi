const artist = require('../data/artistData');
const {validationResult} = require('express-validator');

const Artists = {
    createArtist:createArtist,
    findAllArtist: findAllArtist,
    findArtistByID: findArtistByID,
    updateArtist: updateArtist,
    deleteById: deleteById
}

//creating

function createArtist(req, res) {
    const artistS = req.body;
    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }
    artist.create(artistS).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllArtist(req, res) {
    artist.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findArtistByID(req, res) {
    artist.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateArtist(req, res) {
    artist.updateArtist(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Artist is successfully updated",
                artist: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}        

//deleting by ID

function deleteById(req, res) {
    artist.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Artist successfully deleted ",
                artist: data
            })
        })
    .catch((error) => {
            console.log(error);
        });
    }


module.exports = Artists;