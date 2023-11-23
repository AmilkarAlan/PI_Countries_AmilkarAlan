const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const loadCountries = require("../controllers/loadCountries");
const findCountry = require("../controllers/findCountry");


const router = Router();

router.get('/allcountries', async (req, res) => {
    try {
        const dbcountries = await getCountries();
        if(dbcountries.length === 0) {
            await loadCountries();
        }
        const countries = await getCountries();
        return res.status(200).json(countries)
    } catch (error) {
        console.error(error);
        return res.status(500).json('Error en el servidor');
    }
});

router.get('/country/:name', (req, res)=>{
    findCountry(req,res)
});

module.exports = router;
