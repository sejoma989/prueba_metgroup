const express = require('express');
const router = express.Router();

router
    .get('/create') // Crear nueva tienda /store/<string:name>, metodo: POST

    .get('/check')  // Ver nueva tienda /store/<string:name>, metodo: GET

    .get('/delete') // Eliminar tienda /store/<string:name>, metodo: DELETE

    .get('/all');   // Ver todas las tiendas /stores, metodo: GET


module.exports = router;