const axios = require('axios');
const { Country } = require('../db.js');





const createDbCountries = async (apiData) => {

    for (const item of apiData) {
        await Country.findOrCreate({
            where: {
                id: item.cca3,
                name: {
                    common: item.name.common,
                    official: item.name.official
                },
                continent: item.region,
                capital: item.capital && item.capital.length > 0 ? item.capital[ 0 ] : "Dont have capital",
                subregion: item.subregion ? item.subregion : "Dont have subregion",
                area: item.area,
                population: item.population,
                image: item.flags.svg,
                languages: item.languages ? item.languages : "Dont have languages",
                coatOfArms: item.coatOfArms.svg ? item.coatOfArms.svg : "",
                borders: item.borders ? item.borders : "Dont have any country near",
                landlocked: item.landlocked,
            }
        });
    }
}

const getAllCountries = async () => {
    return await Country.findAll();
}

module.exports = {
    createDbCountries,
    getAllCountries
}