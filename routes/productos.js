const express = require('express');
const productosRouter = express.Router();

/*CRUD para productos */
/*CREATE */
productosRouter.post('/', (req, res) => {});
/*READ */
productosRouter.get('/', (req, res) => {
    /*Este es el get que tiene que devolver en el json TODOS los productos */
    /*Incluir filtro */
})
productosRouter.get('/:id', (req, res) => {
    /*Este es el get que tiene que devolver en el json un producto especifico */
});
/*UPDATE */
productosRouter.put('/:id', (req, res) => {
    /*Este es el metodo para actualizar un producto especifico */
});
/*DELETE */
productosRouter.delete('/:id', (req, res) => {
    /*Este es el metodo para eliminar un producto especifico */
});


module.exports = productosRouter;