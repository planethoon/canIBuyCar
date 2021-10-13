const express = require('express');
const router = express.Router();

const {resultController} = require('../controllers');

router.get('/', resultController.getByYear);

module.exports = router;
