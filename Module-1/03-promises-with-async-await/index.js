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
        }, 2000);
    });
}

function getUserPhoneNumber(userID) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            return resolve({
                phone: '990203992',
                areaCode: 55
            });
        }, 500);
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

// important! when adding the async keyword to a function, it will return a promise
// now when calling the main function, we can use the await keyword to wait for the promise to be resolved 
// and also we can use the then and catch methods to handle the promise
async function main() {
    try {

        console.time('time-promise-main');

        const user = await getUser();
        // const phoneNumber = await getUserPhoneNumber(user.id);
        // const address = await getUserAddressAsync(user.id);

        const result = await Promise.all([getUserPhoneNumber(user.id), getUserAddressAsync(user.id)])
        
        console.timeEnd('time-promise-main');

        console.log(`
            Name: ${user.name},
            Phone: (${result[0].phoneNumber.areaCode}) ${result[0].phoneNumber.phone}
            Address: ${result[1].address.street}, ${result[1].address.number}`
        );
    }
    catch (error) {
        console.error(error)
    };
}

main();