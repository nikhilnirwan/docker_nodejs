const express = require('express');
const router = new express.Router;
const Staff = require('../controllers/staffController');
const Right = require('../controllers/rightController');

router.post('/staff/create',Staff.create);
router.get('/staff/getData',Staff.getData);

router.post('/right/create',Right.create);
router.get('/right/getData',Right.getData);


module.exports = router