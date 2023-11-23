const axios = require("axios")

module.exports = async () => {
    try {
        const apiResp = await axios.get('http://localhost:5000/countries');
        const countries = apiResp.data
        return countries;
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener datos de la API");
    }
};