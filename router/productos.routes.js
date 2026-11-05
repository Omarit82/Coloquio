const express = require('express');
const productosRouter = express.Router();
const productosController = require('../controller/productos.controller.js');
/*CRUD para productos */
/*Create*/
productosRouter.post('/',productosController.cargarProducto);
/*Read */
productosRouter.get('/',productosController.obtenerTodos);
productosRouter.get('/:id',productosController.obtenerPorId);
/*Update */
productosRouter.put('/:id',productosController.actualizarProducto);
/*Delete */
productosRouter.delete('/:id',productosController.eliminarProducto);


module.exports = productosRouter;