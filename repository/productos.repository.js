/**En este archivo se encuentran las funciones para interactuar con la base de datos de productos */

const db = require('../db.js');
const { execute } = require('../db.js');

/*Funcion para cargar un producto en la base de datos */
const cargarProducto = async (producto) => {
    try{
        /**deconstruimos el producto */
        const { nombre, descripcion, precio, stock, categoria } = producto;
        /**planteamos la consulta con ? */
        const query = 'INSERT INTO productos (nombre, descripcion, precio, stock, categoria) VALUES (?, ?, ?, ?, ?)';
        /**ejeutamos la consulta incluyendo los valores */
        const resultado = await db.execute(query, [nombre, descripcion, precio, stock, categoria]);
        return resultado;
    } catch (error) {
        console.error('Error al cargar el producto en la base de datos:', error);
        throw new Error('Error al cargar el producto en la base de datos');
    }
}

/*Funcion para obtener todos los productos de la base de datos */
const obtenerTodos = async (categoria) => {
    try {
        /**Si existe una categoría, filtramos los productos*/
        if (categoria) {
            const productos = await db.execute('SELECT * FROM productos WHERE categoria = ?', [categoria]);
            return productos;
        }
        const productos = await db.execute('SELECT * FROM productos');
        return productos;
    } catch (error) {
        console.error('Error al obtener los productos de la base de datos:', error);
        throw new Error('Error al obtener los productos de la base de datos');
    }
}

/**Funcion para obtener un producto por ID de la base de datos */
const obtenerPorId = async (id) => {
    try {
        const producto = await db.execute('SELECT * FROM productos WHERE id = ?', [id]);
        return producto;
    } catch (error) {
        console.error('Error al obtener el producto por ID de la base de datos:', error);
        throw new Error('Error al obtener el producto por ID de la base de datos');
    }
}

/**Funcion para actualizar un producto en la base de datos */
const actualizarProducto = async (id, nuevo) => {
    try {
        const { nombre, descripcion, precio, stock, categoria } = nuevo;
        const query = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, categoria = ? WHERE id = ?';
        const resultado = await db.execute(query, [nombre, descripcion, precio, stock, categoria, id]);
        return resultado;
    } catch (error) {
        console.error('Error al actualizar el producto en la base de datos:', error);
        throw new Error('Error al actualizar el producto en la base de datos');
    }
}

module.exports = {
    cargarProducto,
    obtenerTodos,
    obtenerPorId,
    actualizarProducto
}