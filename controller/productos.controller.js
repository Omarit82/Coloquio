const service = require('../service/productos.service.js');

/*Funcion para cargar un producto y retorna estado y json con mensaje*/
const cargarProducto = async (req, res) => {
    try {
        const nuevoProducto = await service.cargarProducto(req.body);
        if (!nuevoProducto) {
            /**Como se solicito en la consigna retorna un 400 */
            return res.status(400).json({ mensaje: "No se pudo cargar el producto" });
        }
        res.status(201).json({ mensaje: "Producto cargado correctamente", producto: nuevoProducto });
    } catch (error) {
        console.error('Error al cargar el producto:', error);
        res.status(500).json({ mensaje: 'Error al cargar el producto', error: error.message });
    }
}
/*Funcion para obtener todos los productos y retorna estado y json con productos */
const obtenerTodos= async(req, res) => {
    try{
        /**Agregamos el filtro */
        const { categoria } = req.query;
        const productos = await service.obtenerTodos(categoria);
        res.status(200).json({mensaje: "Productos obtenidos correctamente", productos: productos});
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ mensaje: 'Error al obtener los productos', error: error.message });
    }
}
/*Funcion para obtener un producto por id y retorna estado y json con el producto*/
const obtenerPorId = async (req, res) =>{
    try {
        const producto = await service.obtenerPorId(req.params.id);
        if (producto) {
            res.status(200).json({ mensaje: "Producto obtenido correctamente", producto: producto });
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener el producto por ID', error: error.message });
    }
}
/*Funcion para actualizar un producto y retorna estado y json con el producto actualizado*/
const actualizarProducto = async(req, res) => {
    try {
        const productoActualizado = await service.actualizarProducto(req.params.id, req.body);
        if (productoActualizado) {
            res.status(200).json({ mensaje: "Producto actualizado correctamente", producto: productoActualizado });
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el producto', error: error.message });
    }   
}

/*Funcion para eliminar un producto y retorna estado y json con el producto eliminado*/
const eliminarProducto = async(req, res) => {
    try {
        const productoEliminado = await service.eliminarProducto(req.params.id);
        if (productoEliminado) {
            /**Como se requirio en la consigna se retorna un 204 */
            res.status(204).json({ mensaje: "Producto eliminado correctamente", producto: productoEliminado });
        } else {
            res.status(404).json({ mensaje: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el producto', error: error.message });
    }
}

module.exports = {
    cargarProducto,
    obtenerTodos,
    obtenerPorId,
    actualizarProducto,
    eliminarProducto
}