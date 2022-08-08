const DB = require('./peticionNode');

// Modulo que maneja las peticiones a la API HEROKU
// Trae los datos de base de datos
// TODO: Los metodos deberian ser metodos asincronos

const postRegister = () => {
    return DB.dataPostRegister.postRegister;
};

const postAuth = () => {
    return DB.dataPostAuth.postAuth;
};

module.exports = {
    postRegister,
    postAuth    
}