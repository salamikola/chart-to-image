const express = require('express');
const router = express.Router();

// Require controller modules.
const encoded_controller = require('../controllers/encodedController');
// define the home page route
router.post('/encode-chart',encoded_controller.encode_chart);

module.exports = router