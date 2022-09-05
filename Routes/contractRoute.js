module.exports = app => {
const express = require('express');
const router = express.Router();
const {check} = require('express-validator')
const contract = require("../controllers/contractController");

    // Create a new Contract
    router.post("/",
    [
        check("statuss").isAlphanumeric("en-US",{ignore:"-"}),
        check('Date').isAlphanumeric("en-US",{ignore:"-"}),
        check("Expire").isAlphanumeric("en-US",{ignore:"-"}),
    ],
    contract.createContract);

    // Retrieve all Contract
    router.get("/", contract.findAllContracts);

    // Retrieve one  Contract
    router.get("/:id", contract.findContractByID);

    // Update a Contract with id
    router.put("/:id", contract.updateContracts);

    // Delete a Contract with id
    router.delete("/:id", contract.deleteById);


    app.use('/api/Contract', router);
};