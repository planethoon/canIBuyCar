const express = require('express');
const router = express.Router();

const {authController} = require('../controllers');

router.post('/emailValidate', authController.emailvalidate);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.put('/', authController.edit);
router.delete('/', authController.remove);
router.get('/password', authController.password);

module.exports = router;
