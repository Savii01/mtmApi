module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const {check} = require('express-validator');
    const Address = require("../controllers/addressController");
    
        // Create a new Account details
        router.post("/", [
        check('city').isAlpha('en-US',{ignore:" "}),
        check("state").isAlphanumeric(),
        check('country').isAlpha('en-US',{ignore:" "}),
        ],
        Address.createAddress);
    
        // Retrieve all Account details
        router.get("/", Address.findAllAddress);
    
        // Retrieve one  Account details
        router.get("/:id", Address.findaddressByID);
    
        // Update a Account details with id
        router.put("/:id", Address.updateAddress);
    
        // Delete a Account details with id
        router.delete("/:id", Address.deleteById);
    
        app.use('/api/Address', router);
    };
    
    