const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        clima.getClima(resp.lat, resp.lng)
            .then(temperatura => {
                console.log(`La temperatura de ${ argv.direccion } ahora mismo es de ${ temperatura }`);
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));*/

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);

        return `El cima en ${coors.direccion} es de ${temperatura}`;
    } catch (err) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));