
//requermos la dependecia instalada para conectar con la base de datos mongose
const mongoose = require('mongoose');

//hacemos la funcion para ingresar la url que conecta a la base de datos
const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{ //aqui con llamamos a las variables de entorno que contiene la url de la conecion
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB ONLINE');
    } catch (error) {
        console.log(error);
        throw new Error('DB CAN´T INICIALIZES');
    }
}

//exportamos la funcin para usarla en el modelo del servidor 
module.exports = {
    dbConnection
}