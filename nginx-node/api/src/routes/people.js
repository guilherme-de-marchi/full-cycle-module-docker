const express = require('express');

const { people } = require('../controllers/index');

const router = express.Router();

router.get('/', people.get);
router.post('/', people.post);

module.exports = router; 