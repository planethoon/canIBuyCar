const express = require('express');
const router = express.Router();

const {boardController} = require('../controllers');

router.post('/', boardController.create);
// router.get('/', boardController.getAll);
router.delete('/:id', boardController.remove);

module.exports = router;
