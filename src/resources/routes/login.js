const express = require('express')
const router = express.Router()

const LoginController = require('../../app/controllers/LoginController')

// router.get('/search', siteController.search);
// router.post('/register', LoginController.login)
router.post('/', LoginController.login)
router.get('/', LoginController.loginSite)

module.exports = router