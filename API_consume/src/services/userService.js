const User = require("../database/User");

const postRegister = () => {
    const registerUser = User.postRegister();
    return registerUser;
}
const postAuthUser = () => {
    return;
};

module.exports = {
    postRegister,
    postAuthUser
}