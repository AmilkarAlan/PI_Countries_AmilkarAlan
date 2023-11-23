
const { Country } = require('../db.js');


module.exports = async () => {

    try {
        const countries = await Country.findAll();
        return countries;
    } catch (error) {
        throw error;
    }


};
