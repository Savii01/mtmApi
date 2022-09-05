module.exports = app => {
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const manager = require("../controllers/managerController.js");

    // Create a new manager
    router.post("/",
    [
        check('managerName').isAlpha('en-US',{ignore:" "}),
        check("gender").isAlpha(),
        check("email").isEmail(),
        check("addressID").isInt(),
        check('accountID').isInt(),
        check('assID').isInt(),
        check('assName').isAlpha('en-US',{ignore:" "}),
        ],
    manager.createManager);

    // Retrieve all manager
    router.get("/", manager.findAllManager);

    // Retrieve one  manager
    router.get("/:id", manager.findManagerByID);

    // Update a manager with id
    router.put("/:id", manager.updateManager);

    // Delete a manager with id
    router.delete("/:id", manager.deleteById);

    app.use('/api/manager', router);
};