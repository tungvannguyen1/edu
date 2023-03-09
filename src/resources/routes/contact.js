const express = require("express");
const router = express.Router();

const contactController = require("../../app/controllers/ContactController");

// router.get('/search', siteController.search);
router.get("/:slug", contactController.show);
router.get("/", contactController.contact);

module.exports = router;
