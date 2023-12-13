const { Activity, Country } = require('../db.js');


module.exports = async (req, res) => {
    try {
        const { id, name, difficulty, season, duration } = req.body;
        const {idCountry} = req.params;

        console.log(id);
        console.log(idCountry);
        const [activity, created] = await Activity.findOrCreate({
            where: {
                id,
                name,
                difficulty,
                season,
                duration,
            }
        })
        const country = await Country.findOne({
            where: {
                id: idCountry,
            },
            include: Activity
        })
        await country.addActivity(activity)
        return res.status(200).json({ message: "Activity created successfully" })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }


}
