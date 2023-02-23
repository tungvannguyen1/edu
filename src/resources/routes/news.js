const express = require('express')
const router = express.Router()

const NewsController = require('../../app/controllers/NewsController')

// router.get('/search', siteController.search);

router.get('/', NewsController.news)

module.exports = router