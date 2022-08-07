const axios = require('axios');

const dataPostRegister = {
    postRegister: async function(username, password) {
        const insertData = { username:username, password:password};        
        await axios.post('https://test-api-met.herokuapp.com/register', insertData)
            .then(res => {        
                console.log(`Status code: ${res.status}`);
                respuesta = JSON.stringify(res.data);
                console.log(`Body: ${respuesta}`);
                return respuesta;
        }).catch(err => {
            console.log(JSON.stringify(err.response.data))
        })
    }
};

const dataPostAuth = {
    postAuth: async function(username, password) {
        const insertData = { username:username, password:password};
        await axios.post('https://test-api-met.herokuapp.com/auth', insertData)
            .then(res => {        
                console.log(`Status code: ${res.status}`);
                respuesta = JSON.stringify(res.data);
                console.log(`Body: ${respuesta}`);
                return respuesta;
        }).catch(err => {
            console.log(JSON.stringify(err.response.data))
        })
    }
};

console.log(dataPostRegister.postRegister("met", "1234"));
console.log(dataPostAuth.postAuth("met", "1234"));

module.exports = {
    dataPostRegister,
    dataPostAuth
}