const express = require("express");
const exampleController = require("../controller/exampleController");

const router = express.Router();

router
  .route("/")
  .post(exampleController.example)

module.exports = router;
