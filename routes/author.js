const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author');

router.get('/:id', authorController.getAuthorbyId);

module.exports = router;