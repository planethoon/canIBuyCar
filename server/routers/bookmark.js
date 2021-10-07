const express = require('express');
const router = express.Router();

const {bookmarkController} = require('../controllers');

router.post('/', bookmarkController.create.post);
router.get('/:id', bookmarkController.getAll.get);
router.delete('/:id', bookmarkController.remove.delete);

module.exports = router;
