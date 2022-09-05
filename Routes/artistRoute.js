module.exports = app => {
const express = require('express');
const router = express.Router();
const {check} = require('express-validator')
const artist = require("../controllers/artistController.js");

// Create a new Artist
router.post("/", [
    check('artistName').isAlpha('en-US',{ignore:" "}),
    check("gender").isAlpha(),
    check("email").isEmail(),
    check("genre").isAlpha(),
    check('addressID').isInt(),
    check('contractID').isInt(),
    check('accountID').isInt(),
    check("managementID").isInt(),
    check("managerID").isInt(),
    check("managerName").isAlpha('en-US',{ignore:" "}),
    ],
    artist.createArtist);

// Retrieve all Artist
router.get("/", artist.findAllArtist);

// Retrieve one  Artist
router.get("/:id", artist.findArtistByID);

// Update a Artist with id
router.put("/:id", artist.updateArtist);

// Delete a Artist with id
router.delete("/:id", artist.deleteById);


app.use('/api/Artist', router);
};