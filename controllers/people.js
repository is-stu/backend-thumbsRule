const { response, request } = require('express');

const getPeople = (req = request, res = response) => {

    res.json({
        people: ['hola']
    });
}

const updatePerson = (req = request, res = response) => {
    res.json({
        people: ['update']
    });
}

const patchPerson = (req = request, res = response) => {
    res.json({
        people: ['update']
    });
}

module.exports = {
    getPeople, 
    updatePerson,
    patchPerson
}