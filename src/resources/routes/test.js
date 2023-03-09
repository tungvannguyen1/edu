const express = require("express");
const router = express.Router();

const testController = require("../../app/controllers/testController")

router.get('/',testController.show)

module.exports = router;
