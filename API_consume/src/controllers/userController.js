const userService = require("../services/userService");

// Maneja los controles o acciones de las rutas y llaman al service correspondiente
// register -> postRegister
// auth -> postAuth

const postRegister = (req, res) => {
    const registerUser = userService.postRegister();
    console.log(registerUser);
    // send desde el controller no del servicio 
    res.send({ status:"OK", data: registerUser });
};

const postAuth = (req, res) => {
    const authUser = userService.postAuth();
    console.log(authUser);
    res.send({ status:"OK", data: authUser });
};

module.exports = {
    postRegister,
    postAuth,
};