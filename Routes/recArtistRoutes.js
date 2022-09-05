module.exports = app => {
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const recArtist = require("../controllers/recArtistControllers.js");


    // Create a new recArtist
    router.post("/",
    [
        check('recArtistName').isAlpha('en-US',{ignore:" "}),
        check("email").isEmail(),
        check("description").isAlphanumeric('en-US',{ignore:" "}),
        check("addressID").isInt(),        
        check("managerID").isInt(),
        ],
    recArtist.createRecArt);

    // Retrieve all nrecArtistews
    router.get("/", recArtist.findAllRecArt);

    // Retrieve one  recArtist
    router.get("/:id", recArtist.findAllRecArt);

    // Update a recArtist with id
    router.put("/:id", recArtist.updateRecArt);

    // Delete a recArtist with id
    router.delete("/:id", recArtist.deleteById);

    app.use('/api/recArtist', router);
};