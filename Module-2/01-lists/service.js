const axios = require('axios');
const URL = `https://swapi.dev/api/people`;

async function getPeople(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);
    return response.data;
}

// getPeople('r2').then(function (result) {
//     // console.log('result', result);
// }).catch(function (error) {
//     console.error(error);
// });

module.exports = {
    getPeople
};