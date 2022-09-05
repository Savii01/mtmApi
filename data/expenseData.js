const expense = require('../models/expenses');
const Expense = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateExpense: updateExpense,
    deleteById: deleteById
}



function create(expe) {
    const expenses = new expense(expe);
    return expenses.save();
}


function findAll() {
    return expense.findAll();
}

function findById(expenseID) {
    return expense.findByPk(expenseID);
}

function updateExpense(expenses, expenseID) {
    const updateXpense = {
        expenses: expenses.expenses,
        cost: expenses.cost,
        incuredBy: expenses.incuredBy,
        dateIncured: expenses.dateIncured,

    };
    return expense.update(updateXpense, { where: { expenseID: expenseID}
});
}

function deleteById(expenseID) {
    return expense.destroy({ where: { expenseID: expenseID } });
}


module.exports = Expense;