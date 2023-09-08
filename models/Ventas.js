
// requeromos la dependencia de Schema para crear los modelos
const {Schema, model} = require('mongoose');

const VentasChema = Schema({
   //lo dejamos vacio ya que solo necesitamos hacer llamados 
});

module.exports = model('Ventas', VentasChema ,'Ventas'); //exportamos la funcion para usarla en los controladores