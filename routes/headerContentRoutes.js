const express = require('express');
const router = express.Router();
const headerContentController = require('../controllers/headerContentController');

router.post('/create', headerContentController.createHeaderContent);
router.get('/get', headerContentController.getHeaderContent);


module.exports = router;