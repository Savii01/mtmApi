module.exports = app => {
const express = require('express');
const router = express.Router();
const {check} =require('express-validator')
const eventTable = require("../controllers/eventTableController.js");

    // Create a new eventTable
    router.post("/",
    [
        check('eventType').isAlpha('en-US',{ignore:" "}),
        check("description").isAlphanumeric('en-US',{ignore:" "}),
        check('date').isAlphanumeric('en-US',{ignore:"-"}),
        check('time').isAlphanumeric('en-US',{ignore:":"}),
        check("location").isAlphanumeric('en-US',{ignore:" |"}),
        check('artistID').isInt(),
        check("eventOrgID").isInt(),
    ],
    eventTable.createEventTable);

    // Retrieve all eventTable
    router.get("/", eventTable.findAllEventTable);

    // Retrieve one  eventTable
    router.get("/:id", eventTable.findEventTableByID);

    // Update a eventTable with id
    router.put("/:id", eventTable.updateEventTable);

    // Delete a eventTable with id
    router.delete("/:id", eventTable.deleteById);
    

    app.use('/api/eventTable', router);
}