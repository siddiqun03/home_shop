// Variables: ...
const express = require("express");
const router = express.Router();

// Middleware: ...
const { check_token } = require("../middlewares/verify_token");

// Controllers: ...
const home = require("../modules/home");
const admin = require("../modules/admin");

// Routes: ...
router
  .get("/home", home.GET)
  .get("/admin", admin.GET)
  .post("/home", home.POST)
  .get("/admin/:name", admin.GET2)
  .post("/admin", admin.POST);

// Export Router: ...
module.exports = router;
