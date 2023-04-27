/*
    0 - Get an user
    1 - Get a phone number of a user by Id  
    3 - Get a address of a user by Id
*/

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

    return new promise((resolve, reject) => {

        setTimeout(() => {
            return resolve({
                phone: '990203992',
                areaCode: 55
            });
        }, 2000);
    });
}

function getUserAddress(userID) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            return resolve({
                street: 'Av. Uruguaiana',
                number: 1000
            });
        }, 2000);
    });
}


const userPromise = getUser();

// userPromise.then((user) => {
//     console.log('user', user);
// }).catch((error) => {
//     console.error('error', error);
// });


Promise.all()