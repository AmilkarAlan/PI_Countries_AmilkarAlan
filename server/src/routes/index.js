const { Router } = require("express");
const findCountry = require("../controllers/findCountry");
const countriesDb = require("../controllers/countriesDb");
const postActivity = require("../controllers/postActivity");
const delActivity = require("../controllers/delActivity");
const getActivities = require("../controllers/getActivities");
const showCountry = require("../controllers/showCountry");


const router = Router();
// Countries
router.get('/', countriesDb);
router.get('/country/:id', showCountry);
router.post('/country', findCountry);

// Activities
router.get('/activities', getActivities)
router.post('/activities', postActivity)
router.delete('/activities/:id', delActivity)

module.exports = router;
