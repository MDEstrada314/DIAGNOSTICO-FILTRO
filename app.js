//aqui ejecutamos a nuestro servido con la dependencia 
require('dotenv').config();

//importamos a nuestra clase
const Server = require('./models/server.js');

const server = new Server(); //instanciamo a nuestra clase 

server.listen(); //ejecutamos a nuestro servidor 