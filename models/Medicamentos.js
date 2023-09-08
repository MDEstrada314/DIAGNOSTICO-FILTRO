// requeromos la dependencia de Schema para crear los modelos
const {Schema, model} = require('mongoose');

const MedicamentosChema = Schema({
   //lo dejamos vacio ya que solo necesitamos hacer llamados 
});

module.exports = model('Medicamentos', MedicamentosChema ,'Medicamentos'); //exportamos la funcion para usarla en los controladores