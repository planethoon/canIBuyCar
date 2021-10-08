const express = require('express');
const router = express.Router();

const {bookmarkController} = require('../controllers');

// router.post('/', bookmarkController.create);
router.get('/:id', bookmarkController.getAll);
router.delete('/:id', bookmarkController.remove);

module.exports = router;
