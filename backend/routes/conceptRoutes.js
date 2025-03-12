const express = require('express');
const { createConcept } = require('../controllers/conceptController');

const router = express.Router();

router.post('/', createConcept);

module.exports = router;
