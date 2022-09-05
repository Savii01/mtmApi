const artist = require('../models/artist');
var Artist = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateArtist: updateArtist,
    deleteById: deleteById,
}



function create(ArtistI) {
    var artists = new artist(ArtistI);
    return artists.save();
}


function findAll() {
    return artist.findAll();
}

function findById(artistID) {
    return artist.findByPk(artistID);
}

function updateArtist(artistU, artistID) {
    const updateArtistU = {
        artistName: artistU.artistName,
        gender: artistU.gende,
        email: artistU.email,
        genre: artistU.genre,
        addressID: artistU.addressID,
        contractID: artistU.contractID,
        accountID: artistU.accountID,
        managementID: artistU.managementID,
        managerID: artistU.managerID,
        managerName: artistU.managerName,
    };
    return artist.update(updateArtistU, { where: { artistID: artistID }
});
}

function deleteById(artistID) {
    return artist.destroy({ where: { artistID: artistID } });
}

module.exports = Artist;