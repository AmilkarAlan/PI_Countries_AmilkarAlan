const { Activity, Country } = require("../db.js");

module.exports = async (req, res) => {
    const { idCountry } = req.params;
    try {
        const activities = await Activity.findAll({where:{countryId: idCountry},include: Country});
        if (!activities) {
            return res.status(404).json({ message: "No activities found for this country" });
        }
        return res.status(200).json(activities)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}