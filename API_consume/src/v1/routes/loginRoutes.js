const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/loginController");

router
    .get("/register", loginController.postRegister)
    .get("/", loginController.postLogin);

module.exports = router;