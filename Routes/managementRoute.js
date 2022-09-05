module.exports = app => {
const express = require('express');
const router = express.Router();
const {check} = require('express-validator')
const management = require("../controllers/managementController.js");


    // Create a new management
    router.post("/",
    [
        check('Month').isAlpha('en-US',{ignore:" "}),
        check("totalIncome").isAlphanumeric('en-US',{ignore:" "}),
        check('artistPercent').isAlphanumeric('en-US',{ignore:" "}),
        check("companyPercent").isAlphanumeric('en-US',{ignore:" "}),
        check('expenseID').isInt(),
        check('eventOrgID').isInt(),
    ],
    management.createManagement);

    // Retrieve all management
    router.get("/", management.findAllManagment);

    // Retrieve one  management
    router.get("/:id", management.findManagementByID);

    // Update a management with id
    router.put("/:id", management.updateManagement);

    // Delete a management with id
    router.delete("/:id", management.deleteById);

    
    app.use('/api/management', router);
};