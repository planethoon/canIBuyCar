const express = require('express');
const router = express.Router();

const {commentController} = require('../controllers');

router.post('/:id', commentController.create);
router.delete('/:id', commentController.remove);

module.exports = router;