const address = require('../data/addressData');
const {validationResult} = require('express-validator');

const Address = {
    createAddress: createAddress,
    findAllAddress: findAllAddress,
    findaddressByID: findaddressByID,
    updateAddress: updateAddress,
    deleteById: deleteById
}

//creating
function createAddress(req, res) {
    const addresses = req.body;

  //validating request
  const errors = validationResult(req)
  if(!errors.isEmpty()){
      console.log(errors)
      return res.status(422).json({errors: errors.array()})
  }

    address.create(addresses)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllAddress(req, res) {
    address.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//retrieving by Id

function findaddressByID(req, res) {
    address.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

//updating

function updateAddress(req, res) {
    address.updateaddress(req.body, req.params.id)
        .then((data) => {
            res.status(200).json({
                message: "Account Details is successfully updated",
                addresses: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    address.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Account Details successfully deleted ",
                addresses: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}




module.exports = Address;