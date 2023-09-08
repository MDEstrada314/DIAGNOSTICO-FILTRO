const {Router} = require('express');
const { getventas,getParecetamol} = require('../controllers/ventas.controllers.js');


        
const router = Router();

router.get("/", getventas);
router.get("/paracetamol", getParecetamol);



module.exports = router;