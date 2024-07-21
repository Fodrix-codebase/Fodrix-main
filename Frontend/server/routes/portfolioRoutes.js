const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

// GET image links for a specific category
router.get('/:category/images', portfolioController.getImageLinks);

// POST image links for a specific category
router.post('/:category/add', portfolioController.addImageLink);

// DELETE image link for a specific category
router.delete('/:category/delete', portfolioController.deleteImageLink);

module.exports = router;
