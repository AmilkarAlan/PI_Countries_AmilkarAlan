const { Activity, Country } = require('../db.js');


module.exports = async (req, res) => {
    try {
        const { id, name, dificult, season, duration } = req.body;
        const {idCountry} = req.params;

        console.log(req.body);
        const activity = await Activity.findOrCreate({
            where: {
                id,
                name,
                dificult,
                season,
                duration,
            }
        })
        const country = await Country.findAll({
            where: {
                id: idCountry,
            }
        })
        activity.setCountry(country)
        return res.status(200).json({ message: "Activity created successfully" })
    } catch (error) {
        return res.status(500).json(error.message)
    }


}
