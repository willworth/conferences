const express = require ('express');

const confController = require('../controllers/confController');

const router = express.Router();

router.get('/conferences', confController.getConfs);


module.exports = router; 