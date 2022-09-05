module.exports = app => {const express = require('express');
    const router = express.Router();
    const {check} = require('express-validator')
    const adminAss = require("../controllers/adminAssController");
   

    // Create a new Admin Assistant
    router.post("/", [
        check('assName').isAlpha('en-US',{ignore:" "}),
        check("gender").isAlpha(),
        check("email").isEmail(),
        check("addressID").isInt(),
        check('accountID').isInt(),
        ],
        adminAss.createAdminAss);

    // Retrieve all Admin Assistant
    router.get("/", adminAss.findAllAdminAss);

    // Retrieve one  Admin Assistant
    router.get("/:id", adminAss.findAdminAssByID);

    // Update a Admin Assistant with id
    router.put("/:id", adminAss.updateAdmin);

    // Delete a Admin Assistant with id
    router.delete("/:id", adminAss.deleteById);

    
    app.use('/api/AdminAssistant', router);

}     
