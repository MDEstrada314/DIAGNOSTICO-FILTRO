const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');

//creamos un clase que sera la que ejecutara a nuestro servicios y que se exportara en app para ser usada
class Server {

    constructor(){
        this.app = express();
       
        this.port = process.env.PORT //importamos el puerto que declaramos en las variables de entorno

        this.paths = {
            MedicamentoPath:   '/api/Medicamentos',
            ventas: '/api/recetasMedicas',
            //creamos al rutas 
        }
        //Conectar a base de datos MONGODB
        this.connectDB();
        //Middlewares
        this.middlewares();
        //Routing
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //Leer y parsear JSON en BODY
        this.app.use(express.json());

        //PUBLIC DIRECTORY
        this.app.use(express.static('public'));
    }

    routes(){
       this.app.use(this.paths.MedicamentoPath, require('../routes/medicamentos.routes.js'));
       this.app.use(this.paths.ventas, require('../routes/ventas.routes.js'));
       //importamos la rutas 

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        })
    }

}

//exportamos la funcion poara ser usada en app
module.exports = Server;