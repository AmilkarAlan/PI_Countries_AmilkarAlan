
const { Op } = require("sequelize");
const {Country} = require("../db")
module.exports = async (req, res) => {

    const { name } = req.params;
    try {
        console.log(name);
        const country = await Country.findOne({
            where:{
                name: {
                    [Op.iLike]: "Kenya",
                    [Op.contains]:{
                        name:{
                            common:{[Op.iLike]:'%Kenya%',},
                        },
                    },
                },
            },
        });
        console.log(country);
        if (!country) {
            return res.status(404).json("No se encontraron coincidencias")
        }
        return res.status(200).json(country)
    } catch (error) {
        return res.status(500).json(error.message)
    }

}