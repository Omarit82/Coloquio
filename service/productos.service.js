/*LOGICA DE NEGOCIO */
const repositorio = require('../repository/productos.repository.js');

const cargarProducto = async (producto) => {
    /*Lógica de validacion de producto
    Nombre no puede estar vacio
    Precio debe ser mayor a 0
    Stock debe ser mayor o igual a 0
    Categoria no puede estar vacia - Default: General
    */
    if (!producto.nombre) {
        throw new Error("El nombre del producto es obligatorio");
    }
    if (producto.precio <= 0) {
        throw new Error("El precio del producto debe ser mayor a 0");
    }
    if (producto.stock < 0) {
        throw new Error("El stock del producto debe ser mayor o igual a 0");
    }
    if (!producto.categoria) {
        producto.categoria = "General";
    }
    return await repositorio.cargarProducto(producto);
}

const obtenerTodos = async (categoria) => {
    return await repositorio.obtenerTodos(categoria);  
}

const obtenerPorId = async (id) => {
    return await repositorio.obtenerPorId(id);
}

const actualizarProducto = async (id, nuevo) => {
    /*Valido que el producto exista */
    const productoExistente = await repositorio.obtenerPorId(id);
    if (!productoExistente || productoExistente == null) {
        throw new Error("Producto no encontrado");
    }else{
        return await repositorio.actualizarProducto(id, nuevo, productoExistente);
    }
}

const eliminarProducto = async (id) => {
    /*Valido que el producto exista */
    const productoExistente = await repositorio.obtenerPorId(id);
    if (!productoExistente || productoExistente == null) {
        throw new Error("Producto no encontrado");
    }
    return await repositorio.eliminarProducto(id);
}

module.exports = {
    cargarProducto,
    obtenerTodos,
    obtenerPorId,
    actualizarProducto,
    eliminarProducto
}