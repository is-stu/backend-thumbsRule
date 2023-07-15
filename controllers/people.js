const { response, request } = require('express');
const People = require('../database/people')

const getPeople = async (req = request, res = response) => {
    const people = await People.find();
    res.json(people);
}

const postPeople = async (req = request, res = response) => {
    const body = req.body;
    const people = new People(body);

    await people.save();

    res.json({
        people
    });
}

const updatePerson = async (req = request, res = response) => {
    const { id } = req.query
    const body = req.body;

    const person = await People.findByIdAndUpdate(id, body);

    res.json({
        msg: 'Updated',
        person
    });
}

const patchPerson = (req = request, res = response) => {
    res.json({
        people: ['update']
    });
}

module.exports = {
    getPeople,
    postPeople,
    updatePerson,
    patchPerson
}