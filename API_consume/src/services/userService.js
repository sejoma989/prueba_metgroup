const User = require("../database/User");

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