
const { Op } = require("sequelize");
const { Country } = require("../db")
module.exports = async (req, res) => {

    const { id } = req.params;

    if (id) try {
        const country = await Country.findOne({
            where: {id: id},
        });
        if (!country) {
            return res.status(404).json("No se encontraron coincidencias")
        }
        return res.status(200).json(country)
    } catch (error) {
        return res.status(500).json(error.message)
    }

}