import fetch from "node-fetch";

const update = {
    username: 'metgroup',
    password: '1234'
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
};

const postRegister = fetch('https://test-api-met.herokuapp.com/register', options)
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
    }).then(update => {
        
        console.log('update: ',update);
    }).catch(e => {
        console.log(e);
    });

console.log(postRegister);

    



// async function getRequest(options){
//     try {
//         let response = await fetch('https://test-api-met.herokuapp.com/register', options);
//         let data = await response.json()
//         return data
//     } catch (error) {
//         console.log(data.status)
//     }
// }

// getRequest().then(data => console.log(data));