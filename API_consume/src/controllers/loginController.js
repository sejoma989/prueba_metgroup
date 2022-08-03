const postRegister = (req, res) => {
    res.send("Get register page")
};

const postLogin = (req, res) => {
    res.send("Get login page")
}

module.exports = {
    postLogin,
    postRegister
};