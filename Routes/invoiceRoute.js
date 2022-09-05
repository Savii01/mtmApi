module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const {check} = require('express-validator')
    const invoice = require("../controllers/invoiceController");
    
        // Create a new invoice
        router.post("/",
        [
            check('artistName').isAlphanumeric('en-US',{ignore:" "}),
            check('EventOrgName').isAlphanumeric('en-US',{ignore:" "}),
            check("statuss").isAlphanumeric('en-US',{ignore:" "}),
            check("amount").isAlphanumeric('en-US',{ignore:" "}),
            check('Date').isAlphanumeric('en-US',{ignore:"-"}),
            check("due").isAlphanumeric('en-US',{ignore:"-"}),
            check('artistID').isInt(),
            check('eventID').isInt(),
            check('eventOrgID').isInt()
        ],
        invoice.createInvoice);
    
        // Retrieve all inivoice
        router.get("/", invoice.findAllInvoice);
    
        // Retrieve one  invoice
        router.get("/:id", invoice.findInvoiceByID);
    
        // Update a invoice with id
        router.put("/:id", invoice.updateInvoice);
    
        // Delete a invoice with id
        router.delete("/:id", invoice.deleteById);
    
    
        app.use('/api/invoice', router);
    };