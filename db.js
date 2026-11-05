/**MANEJO DE LA CONEXION A LA BASE DE DATOS */
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kiosko',
    waitForConnections: true,
    connectionLimit: 10
});

const conexionDB = async () => {
    try {
        const conn = await pool.getConnection();
        console.log('Conexion exitosa a la base de datos MySQL');
        conn.release();
    } catch (error) {
        console.error('Error al conectar a la BD:', error.message);
    }
};

const execute = async (query, params = []) => {
    const [results] = await pool.execute(query, params);
    return results;
};

module.exports = { conexionDB, execute };
