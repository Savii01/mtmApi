const news = require('../data/newsData');
const {validationResult} = require('express-validator');

const News = {
    createNews:createNews,
    findAllNews: findAllNews,
    findNewsByID: findNewsByID,
    updateNews: updateNews,
    deleteById: deleteById,
}

//creating

function createNews(req, res) {
    const newS = req.body;

    //validating request
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        return res.status(422).json({errors: errors.array()})
    }

    news.create(newS).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//Retrieving 
function findAllNews(req, res) {
    news.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}        

//retrieving by Id

function findNewsByID(req, res) {
    news.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

//updating

function updateNews(req, res) {
    news.updateNews(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "News is successfully updated",
                news: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    news.deleteById(req.params.id).
        then((data) => {
            res.status(204).json({
                message: "News successfully deleted ",
                news: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = News;