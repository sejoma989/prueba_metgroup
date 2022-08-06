const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

// Maneja las posibles rutas para el recurso user:
// register
// auth

// Se delega la logica al controller

router
    .get("/register", userController.postRegister)
    .get("/auth", userController.postAuth);

module.exports = router;