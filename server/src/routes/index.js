const { Router } = require("express");
const apiFetch = require("../utils/apiFetch");
const { createDbCountries, getAllCountries } = require("../controllers/countryController");
const router = Router();

router.get('/allcountries', async (req, res) => {
    try {
        let countries;
        const existData = await getAllCountries();
        if (existData && existData.length > 0) {
            countries = existData
        } else {
            const apiDataResult = await apiFetch();
            await createDbCountries(apiDataResult);
            countries = await getAllCountries();
        }

        return res.status(200).json(countries)
    } catch (error) {
        console.error('Error en la solicitud:', error);
        res.status(500).json({ error: 'Error en la solicitud.' });
    }
});

module.exports = router;
