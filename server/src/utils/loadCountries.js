const { Country, Activity} = require('../db.js');
const apiFetch = require("./apiFetch.js");

module.exports = async () => {
    try {

        const apiData = await apiFetch();

        for (const item of apiData) {
            await Country.findOrCreate({
                where: {
                    id: item.cca3,
                    name: {
                        common: item.name.common,
                        official: item.name.official
                    },
                    continent: item.region,
                    capital: item.capital && item.capital.length > 0 ? item.capital[0] : "Don't have capital",
                    subregion: item.subregion ? item.subregion : "Don't have subregion",
                    area: item.area,
                    population: item.population,
                    image: item.flags.svg,
                    languages: item.languages ? item.languages : "Don't have languages",
                    coatOfArms: item.coatOfArms.svg ? item.coatOfArms.svg : "",
                    borders: item.borders ? item.borders : "Don't have any country near",
                    landlocked: item.landlocked,
                    demonyms: item.demonyms && item.demonyms.eng ? item.demonyms.eng.f: "Don't have demonyms",
                }
            });
        }
        const countries = await Country.findAll({include: Activity,});

        return countries;
        
    } catch (error) {
        throw error;
    }
};