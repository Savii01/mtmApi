const recArt = require('../models/recArtist');
const RecArtist = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateRecArtist: updateRecArtist,
    deleteById: deleteById,
}



function create(Rec) {
    const recArts = new recArt(Rec);
    return recArts.save();
}


function findAll() {
    return recArt.findAll();
}

function findById(recArtistID) {
    return recArt.findByPk(recArtistID);
}

function updateRecArtist(recArtist, recArtistID) {
    const updaterecArtist = {
        recArtistName: recArtist.recArtistName,
        description: recArtist.description,
        addressID: recArtist.adddressID,
        managerID: recArtist.managerID,
    };
    return recArt.update(updaterecArtist, { where: { recArtistID: recArtistID}
});
}

function deleteById(recArtistID) {
    return recArt.destroy({ where: { recArtistID: recArtistID } });
}


module.exports = RecArtist;