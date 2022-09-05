module.exports = app => {
const express = require('express');
const router = express.Router();
const {check} = require('express-validator')
const expenses = require("../controllers/expenseController");


    // Create a new expenses
    router.post("/", 
    [
        check('expenses').isAlpha('en-US',{ignore:" "}),
        check('cost').isAlphanumeric('en-US',{ignore:" "}),
        check('incuredBy').isAlphanumeric('en-US',{ignore:" "}),
        check("dateIncured").isAlphanumeric('en-US',{ignore:"-"}),
    ],
    expenses.createExpense);

    // Retrieve all expenses
    router.get("/", expenses.findAllExpense);

    // Retrieve one  expenses
    router.get("/:id", expenses.findExpenseByID);

    // Update a expenses with id
    router.put("/:id", expenses.updateExpense);

    // Delete a expenses with id
    router.delete("/:id", expenses.deleteById);
    
    app.use('/api/expenses', router);
};