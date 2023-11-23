
const { Op } = require("sequelize");
const { Country } = require("../db")
module.exports = async (req, res) => {

    const { name } = req.params;

    console.log(req.body);
    console.log(name);
    if (!name) return res.json("Busca los países por nombre")
    try {
        const country = await Country.findAll({
            where: {
                name: {
                    [ Op.or ]: [
                        { common: { [ Op.iLike ]: `${name}%` } },
                        { official: { [ Op.iLike ]: `${name}%` } }
                    ],
                },
            },
        });
        if (!country.length) {
            return res.status(404).json("No se encontraron coincidencias")
        }
        return res.status(200).json(country)
    } catch (error) {
        return res.status(500).json(error.message)
    }

}