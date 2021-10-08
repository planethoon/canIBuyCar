const express = require('express');
const router = express.Router();

const {authController} = require('../controllers');

router.get('/', authController.sayhi);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
// router.post('/logout', authController.logout.post);
// router.put('/', authController.edit.put);
// router.delete('/', authController.remove.delete);

module.exports = router;
