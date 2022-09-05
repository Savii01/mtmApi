module.exports = app => {
const express = require('express');
const router = express.Router();
const {check} = require('express-validator')
const general = require("../controllers/generalController.js");


    // Create a new general
    router.post("/",
    [
        check('companyName').isAlpha('en-US',{ignore:" "}),
        check('Email').isEmail().normalizeEmail(),
        check("Phone").isAlphanumeric(),
        check('addressID').isInt(),
    ],
    general.createGen);

    // Retrieve all general
    router.get("/", general.findAllGen);

    // Retrieve one  general
    router.get("/:id", general.findGenByID);

    // Update a general with id
    router.put("/:id", general.updateGen);

    // Delete a general with id
    router.delete("/:id", general.deleteById);
    
    app.use('/api/general', router);
};