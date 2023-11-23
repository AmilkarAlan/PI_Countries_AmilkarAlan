const { Activity } = require('../db.js');

module.exports = async (req, res) => {
    try {
        const { id, name, dificult, season, duration } = req.body;

        console.log(req.body);
        const activity= await Activity.findOrCreate({
            where: {
                id,
                name,
                dificult,
                season,
                duration,
            }
        })
        const activities = await Activity.findAll();
        return res.status(200).json(activities)
    } catch (error) {
        return res.status(500).json(error.message)
    }


}
