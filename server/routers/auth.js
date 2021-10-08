const express = require('express');
const router = express.Router();

const {authController} = require('../controllers');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.put('/', authController.edit);
router.delete('/', authController.remove);

module.exports = router;
