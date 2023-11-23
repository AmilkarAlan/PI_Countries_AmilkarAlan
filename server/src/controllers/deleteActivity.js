const {Activity} = require("../db.js");

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        if (await Activity.findOne({where:{id}})) {
            await Activity.destroy({
                where:{id}
            });
            const activities = await Activity.findAll();
            return res.status(200).json(activities)
        }
        return res.status(404).json("La actividad ya no existe.")
    } catch (error) {
        return res.status(500).json(error.message)
    }
}