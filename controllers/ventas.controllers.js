
// se importa la funcion Schema de ventas 
const Ventas = require("../models/Ventas.js");

//se cre la funciin getVEBTAS para filtar las fehcas que son superiores al 1 de enero 2023
const getventas = async (req, res) => {
  const fehcaLimite = new Date ('2023-01-01')

  const query ={fechaVenta: {$gte:fehcaLimite}}; //$gte para que busque las fechas mayor a la indicada en la constante

  const [total, recetas] = await Promise.all([
    Ventas.countDocuments(query),
    Ventas.find(query)
  ]); 

  res.json({
    total,
    recetas,
  });
}; 


//se crea la funcion para filtrar las compras que se hicieron de paracetamol
const getParecetamol = async (req, res) => {
  const query = {'medicamentosVendidos.nombreMedicamento': 'Paracetamol'};
  const [total, recetas] = await Promise.all([
    Ventas.countDocuments(query),
    Ventas.find(query).select('medicamentosVendidos.cantidadVendida')
  ]); 

  res.json({
    total,
    recetas,
  });
}; 


//exportamos todas la funciones creadas para usarlas en las rutas
module.exports = {
  getventas,
  getParecetamol

};




