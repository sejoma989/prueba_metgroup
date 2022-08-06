const userService = require("../services/userService");

// Maneja los controles de las rutas de User
// register -> postRegister
// auth -> postAuth

const postRegister = (req, res) => {
    const registerUser = userService.postRegister();
    res.send("Get register page")
}
const postAuth = (req, res) => {
    const authUser = userService.postAuth();
    res.send("Get login page")
}

module.exports = {
    postRegister,
    postAuth,
};