const {Country} = require("../db");
const loadCountries = require("../utils/loadCountries");

module.exports = async (req, res) => {
    try {
        let countries = await Country.findAll();
        if (countries.length === 0) {
            countries = await loadCountries();
            return res.status(201).json(countries)
        }
        return res.status(200).json(countries)
    } catch (error) {
        console.error(error);
        return res.status(500).json('Error en el servidor');
    }
}
