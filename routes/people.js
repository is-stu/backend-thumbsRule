const { Router } = require('express');
const { getPeople, updatePerson } = require('../controllers/people');

const router = Router();

router.get('/', getPeople);

router.put('/:id', updatePerson);

module.exports = router;
