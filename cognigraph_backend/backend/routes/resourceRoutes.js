const express = require('express');
const { createResource } = require('../controllers/resourceController');

const router = express.Router();

router.post('/', createResource);

module.exports = router;
