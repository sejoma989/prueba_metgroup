const DB = require('./peticionNode');

const postRegister = () => {
    // Aca debe ir lo que se trae desde la API
    return DB.dataPostRegister.postRegister();
};

const postAuth = () => {
    return DB.dataPostAuth.postAuth();
};

module.exports = {
    postRegister,
    postAuth    
}