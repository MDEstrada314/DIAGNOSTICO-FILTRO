
//requerimos a expres para ejecutar los servicios de las rutas
const {Router} = require('express');
//importamos a las funciones de los controladores
const { getMedicamentos,getProvedores,getProvedoresA } = require('../controllers/medicamentos.controllers.js');


        
const router = Router();

//creamos la rutas con sun funciones 
router.get("/", getMedicamentos);
router.get("/provedores", getProvedores);
router.get("/provedores/A", getProvedoresA);

//exportamos la ruta para usarlos en nuestra clase de servidor
module.exports = router; 