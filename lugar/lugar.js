const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}+Amphitheatre+Parkway,+Mountain+View&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let results = resp.data.results[0];
    let coordenadas = results.geometry.location;

    return {
        direccion: results.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    };
}

module.exports = {
    getLugarLatLng
}