const eventOrgs = require('../data/eventOrgData');
const {validationResult} = require('express-validator');

const EventOrg = {
    createEventOrg: createEventOrg,
    findAllEventOrg: findAllEventOrg,
    findEventOrgByID: findEventOrgByID,
    updateEventOrg: updateEventOrg,
    deleteById: deleteById
}

//creating

function createEventOrg(req, res) {
    const eventOr = req.body;
    
    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }

    eventOrgs.create(eventOr).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllEventOrg(req, res) {
    eventOrgs.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findEventOrgByID(req, res) {
    eventOrgs.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateEventOrg(req, res) {
    eventOrgs.updateEventOrg(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event Organiser is successfully updated",
                eventOrgs: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    eventOrgs.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Event Organiser successfully deleted ",
                eventOrgs: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = EventOrg;