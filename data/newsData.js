const news = require('../models/news');
const News = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateNews: updateNews,
    deleteById: deleteById
}



function create(newsf) {
    const newsF = new news(newsf);
    return newsF.save();
}


function findAll() {
    return news.findAll();
}

function findById(newsID) {
    return news.findByPk(newsID);
}

function updateNews(newss , newsID) {
    const updatenews = {
        Source: newss.Source,
        News: newss.News,
        artistName: newss.artistName,
       artistID: newss.artistID,

    };
    return news.update(updatenews, { where: { newsID: newsID}
});
}

function deleteById(newsID) {
    return newsID.destroy({ where: { newsID: newsID } });
}


module.exports = News;