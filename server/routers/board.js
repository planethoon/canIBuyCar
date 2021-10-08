const express = require('express');
const router = express.Router();

const {boardController} = require('../controllers');

router.post('/', boardController.create.post);
router.get('/', boardController.getAll.get);
router.delete('/:id', boardController.remove.delete);

module.exports = router;
