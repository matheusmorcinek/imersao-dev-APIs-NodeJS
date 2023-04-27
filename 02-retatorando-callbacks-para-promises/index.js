/*
    0 - Get an user
    1 - Get a phone number of a user by Id  
    3 - Get a address of a user by Id
*/

const utils = require('util');

function getUser() {

    const min = 1;
    const max = 10;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;


    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (randomInt > 8) {
                return reject(new Error('User not found'));
            }

            return resolve({
                id: 1,
                name: 'Aladin',
                birthDate: new Date()
            });
        }, 1000);
    });
}

function getUserPhoneNumber(userID) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            return resolve({
                phone: '990203992',
                areaCode: 55
            });
        }, 800);
    });
}

function getUserAddress(userID, callback) {

    setTimeout(() => {
        return callback(null, {
            street: 'Rua dos Bobos',
            number: 0
        });
    }, 500);
}

const getUserAddressAsync = utils.promisify(getUserAddress);

const userPromise = getUser();

userPromise
    .then(user => {
        return getUserPhoneNumber(user.id).then(phone => {
            return {
                ...user,
                phone: phone
            }
        })
    }).then(result => {
        const address = getUserAddressAsync(result.id);
        return address.then(address => {
            return {
                ...result,
                address: address
            }
        });
    }).then(result => {
        console.log('result', result)
    })
    .catch(error => console.error(error));