const axios = require("axios");

const getClima = async(lat, lng) => {

    let latEncodeURL = encodeURI(lat);
    let lngEncodeURL = encodeURI(lng);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latEncodeURL}&lon=${lngEncodeURL}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`);
    if (resp.cod === '400') {

        throw new Error(`No hay resultados para la latitud ${latEncodeURL} i longitud ${lngEncodeURL}`);
    }
    return resp.data.main.temp;
};


module.exports = {
    getClima
}