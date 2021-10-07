const express = require('express');
const router = express.Router();

const {carController} = require('../controllers');

router.get('/', carController.getCars.get);

module.exports = router;
