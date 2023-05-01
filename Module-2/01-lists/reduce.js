const service = require('./service');

async function main() {

    try {

        const { results } = await service.getPeople('a');

        // console.log('object', results[1]);

        const result = results.reduce((previous, next) => {

            if (next.gender === 'male') {
                previous.totalMale += 1;
                return previous;
            }

            previous.totalFemale += 1;
            return previous;

        }, { totalMale: 0, totalFemale: 0 });

        console.log('result', result)

    } catch (error) {
        console.error('Error', error);
    }
};

main();