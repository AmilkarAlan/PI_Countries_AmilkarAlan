const { Activity } = require('../db.js');

module.exports = async (req, res) => {
    try {
        const { id, name, dificult, season, duration } = req.body;
        const [activity, created] = await Activity.findOrCreate({
            where: {
                id,
                name,
                dificult,
                season,
                duration,
            }
        })
        if (!created) return res.status(400).json({error: "La actividad ya existe."}, activity);
        const activities = Activity.findAll();
        return res.status(200).json(activities)
    } catch (error) {
        return res.status(500).json(error.message)
    }


}
