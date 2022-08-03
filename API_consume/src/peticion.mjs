import fetch from "node-fetch";

const update = {
    username: 'met',
    password: '1234'
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
};

fetch('https://test-api-met.herokuapp.com/register', options)
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
    }).then(update => {
        console.log(update);
    }).catch(e => {
        console.log(e);
    });