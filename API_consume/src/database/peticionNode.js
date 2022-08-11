const axios = require('axios');
const { postRegister } = require('./User');

const dataPostRegister = {
    insertData: {
        username:"metgr",
        password:"12345",
    },
    postRegister: function() {
        axios.post('https://test-api-met.herokuapp.com/register', this.insertData).then(res => {        
            console.log(`Status code: ${res.status}`);
            respuesta = JSON.stringify(res.data);
            console.log(`Body: ${respuesta}`);
            return respuesta;
        }).catch(err => {
            console.log(JSON.stringify(err.response.data));
        })
    }
};

// const dataPostRegister = {
//     postRegister: function(username, password) {
//         const insertData = { username:username, password:password};        
//         axios.post('https://test-api-met.herokuapp.com/register', insertData)
//             .then(res => {        
//                 console.log(`Status code: ${res.status}`);
//                 respuesta = JSON.stringify(res.data);
//                 console.log(`Body: ${respuesta}`);
//                 return respuesta;
//         }).catch(err => {
//             console.log(JSON.stringify(err.response.data))
//         })
//     }
// };

const dataPostAuth = {
    insertData: {
        username:"metgr",
        password:"12345",
    },
    postAuth: function() {
        axios.post('https://test-api-met.herokuapp.com/auth', this.insertData)
            .then(res => {        
                console.log(`Status code: ${res.status}`);
                console.log(JSON.stringify(res.data)); 
                return res;               
            }).catch(err => {
                console.log(JSON.stringify(err.response.data));
        })
    }
};

console.log(dataPostRegister[postRegister]);
console.log(dataPostAuth);

module.exports = {
    dataPostRegister,
    dataPostAuth,

}