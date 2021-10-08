const express = require('express');
const router = express.Router();

const {authController} = require('../controllers');

router.post('/signup', authController.signup.post);
router.post('/login', authController.login.post);
router.post('/logout', authController.logout);
router.put('/', authController.edit);
router.delete('/', authController.remove.delete);

module.exports = router;
