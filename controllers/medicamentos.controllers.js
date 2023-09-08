//se importa la funcion Schema de Medicamentos  de los modelos
const Medicamentos = require("../models/Medicamentos.js"); 

//se crea la funcion get para medicamnetos filtrando conla query a los que su es stok sean menor a 50
const getMedicamentos = async (req, res) => {
  const query = { stock: {$lt:50}};
  const [total, medicamentos] = await Promise.all([
    Medicamentos.countDocuments(query),
    Medicamentos.find(query)
  ]); 

  res.json({
    total,
    medicamentos,
  });
}; 

// se crea la funcion para buscar solo a los provedores
const getProvedores = async (req, res) => {
  const query = req.query
  const [total, medicamentos] = await Promise.all([
    Medicamentos.countDocuments(query),
    Medicamentos.find(query).select('nombre proveedor')
  ]); 

  res.json({
    total,
    medicamentos,
  });
}; 

//se crea la funcion para filtrar solo a los provedores de A
const getProvedoresA = async (req, res) => {
  const query = {'proveedor.nombre': 'ProveedorA'};
  const [total, medicamentos] = await Promise.all([
    Medicamentos.countDocuments(query),
    Medicamentos.find(query)
  ]); 

  res.json({
    total,
    medicamentos,
  });
}; 




//se exportan la funciones creadas para ser unsadas por las rutas
module.exports = {
  getMedicamentos,
  getProvedores,
  getProvedoresA
};


