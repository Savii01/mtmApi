const expenses = require('../data/expenseData');
const {validationResult} = require('express-validator');

const Expenses= {
    createExpense: createExpense,
    findAllExpense: findAllExpense,
    findExpenseByID: findExpenseByID,
    updateExpense: updateExpense,
    deleteById: deleteById
}

//creating

function createExpense(req, res) {
    const expe = req.body;

    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }
    
    expenses.create(expe).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllExpense(req, res) {
    expenses.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findExpenseByID(req, res) {
    expenses.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateExpense(req, res) {
    expenses.updateExpense(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Expense is successfully updated",
                expense: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    expenses.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Expense successfully deleted ",
                expense: data
            })
        })
        .catch((error) => {
            console.log(error);
            });
}




module.exports = Expenses;