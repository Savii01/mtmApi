module.exports = app => {
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const eventOrg = require("../controllers/eventOrgController.js");


    // Create a new  Event Organiser
    router.post("/",
    [
        check('companyName').isAlpha('en-US',{ignore:" "}),
        check('eventOrgName').isAlpha('en-US',{ignore:" "}),
        check('email').isEmail(),
        check("phone").isAlphanumeric(),
        check('addressID').isInt()
    ],
    eventOrg.createEventOrg);

    // Retrieve all  Event Organiser
    router.get("/", eventOrg.findAllEventOrg);

    // Retrieve one   Event Organiser
    router.get("/:id", eventOrg.findEventOrgByID);

    // Update a  Event Organiser with id
    router.put("/:id", eventOrg.updateEventOrg);

    // Delete a  Event Organiser with id
    router.delete("/:id", eventOrg.deleteById);

    app.use('/api/eventOrg', router);
}