const evenTab = require('../data/eventTableData');
const {validationResult} = require('express-validator');

const EventTab= {
    createEventTable: createEventTable,
    findAllEventTable: findAllEventTable,
    findEventTableByID: findEventTableByID,
    updateEventTable: updateEventTable,
    deleteById: deleteById
}

//creating

function createEventTable(req, res) {
    const eventab = req.body;

    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }
    
    evenTab.create(eventab).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllEventTable(req, res) {
    evenTab.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findEventTableByID(req, res) {
    evenTab.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateEventTable(req, res) {
    evenTab.updateEventTable(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event is successfully updated",
                eventTable: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    evenTab.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Event successfully deleted ",
                eventTable: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = EventTab;