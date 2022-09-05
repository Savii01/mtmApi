const accountDetail = require('../data/acctDetailsData');
const {validationResult} = require('express-validator');

const acctDetailS = {
    createAcctDetail: createAcctDetail,
    findAllAcctDetail: findAllAcctDetail,
    findAccountDetailByID: findAccountDetailByID,
    updateAcctDetails: updateAcctDetails,
    deleteById: deleteById
}

//creating
function createAcctDetail(req, res) {
    const acctDetails = req.body;

  //validating request
  const errors = validationResult(req)
  if(!errors.isEmpty()){
      console.log(errors)
      return res.status(422).json({errors: errors.array()})
  }

    accountDetail.create(acctDetails)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllAcctDetail(req, res) {
    accountDetail.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findAccountDetailByID(req, res) {
    accountDetail.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

//updating

function updateAcctDetails(req, res) {
    accountDetail.updateacctDetails(req.body, req.params.id)
        .then((data) => {
            res.status(200).json({
                message: "Account Details is successfully updated",
                acctDetails: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    accountDetail.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "Account Details successfully deleted ",
                acctDetails: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}




module.exports = acctDetailS;