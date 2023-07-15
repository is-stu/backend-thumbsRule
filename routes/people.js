const { Router } = require('express');
const { getPeople, updatePerson, postPeople } = require('../controllers/people');

const router = Router();

router.get('/', getPeople);

router.post('/', postPeople)

router.put('/', updatePerson);


module.exports = router;
