const axios = require("axios")

module.exports = async () => {
    const apiResp = await axios.get('http://localhost:5000/countries')
    return apiResp.data
}