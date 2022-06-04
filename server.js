const baseUrl = 'http://gateway.marvel.com/v1/public/characters';
const apiKey = '79d5fcd6254ef126e8de3032036fc3f9';
const hash = '316c2e3a4fad53fed7a1a8103a513085';
const ts = 1
const axios = require('axios');

function getAll(req, res) {
    var url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}

function getById(req, res) {
    var id = req.params.id;
    var url = `${baseUrl}/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}

function getByComics(req, res) {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}

function getByEvent(req, res) {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/events?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}

function getBySerie(req, res) {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/series?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}

function getByStory(req, res) {
    var id = req.params.id;
    var url = `${baseUrl}/${id}/stories?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    return axios.get(url)

}



module.exports = {
    getAll,
    getById,
    getByComics,
    getByEvent,
    getBySerie,
    getByStory,
}