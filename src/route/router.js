// Variables: ...
const express = require("express");
const router = express.Router();

// Middleware: ...
const { check_token } = require("../middlewares/verify_token");

// Controllers: ...
const home = require("../modules/home");
const admin = require("../modules/admin");

// Routes: ...
router.get("/home", home.GET);
router.get("/admin", check_token, admin.GET);

// Export Router: ...
module.exports = router;
