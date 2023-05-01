const service = require('./service');

async function main() {

    try {

        const { results } = await service.getPeople('a');

        // console.log('object', results[1]);

        const maleCharacters = results.filter((character) => character.gender === 'male');

        console.log('maleCharacters', maleCharacters.map((character) => character.name));

    } catch (error) {
        console.error('Error', error);
    }

};

main();
