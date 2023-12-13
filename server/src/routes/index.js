const { Router } = require("express");
const findCountry = require("../controllers/findCountry");
const countriesDb = require("../controllers/countriesDb");
const postActivity = require("../controllers/postActivity");
const delActivity = require("../controllers/delActivity");
const getActivities = require("../controllers/getActivities");



const router = Router();
// Countries
router.get('/', countriesDb);
router.post('/country', findCountry);

// Activities

router.get('/country/:idCountry/activities', getActivities)
router.post('/country/:idCountry/activities', postActivity)
router.delete('/country/:idCountry/activities/:id', delActivity)

module.exports = router;
