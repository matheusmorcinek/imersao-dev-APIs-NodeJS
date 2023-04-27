/*
    0 - Get an user
    1 - Get a phone number of a user by Id  
    3 - Get a address of a user by Id
*/

function getUser(callback) {

    const min = 1;
    const max = 10;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    setTimeout(() => {

        if (randomInt > 8) {
            return callback(new Error('User not found'));
        }

        return callback(null, {
            id: 1,
            name: 'Aladin',
            birthDate: new Date()
        });
    }, 1000);
}

function getUserPhoneNumber(userID, callback) {
    setTimeout(() => {
        return callback(null, {
            phone: '990203992',
            areaCode: 55
        });
    }, 2000);
}

function getUserAddress(userID, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'Av. Uruguaiana',
            number: 1000
        });
    }, 2000);
}


function resolveUserData(error, user) {

    if (error) {
        return console.log('error', error);
    }

    getUserPhoneNumber(user.id, function resolveUserPhoneNumber(error1, phone) {

        if (error1) {
            return console.log('error1', error1);
        }

        getUserAddress(user.id, function resolveUserAddress(error2, address) {

            if (error2) {
                return console.log('error2', error2);
            }

            console.log(`
            User: ${user.name},
            Address: ${address.street}, ${address.number},
            phone: (${phone.areaCode}) ${phone.phone}
            `);
        });
    });
}

getUser(resolveUserData);