const User = require("../database/User");

// Crea funciones que llaman a los modelos de base de datos

const postRegister = () => {
    const registerUser = User.postRegister();
    return registerUser;
}

const postAuth = () => {
    const authUser = User.postAuth();
    return authUser;
}

module.exports = {
    postRegister,
    postAuth
}