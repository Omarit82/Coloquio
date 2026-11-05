/**MANEJO DE LA CONEXION A LA BASE DE DATOS */
const db = require('mysql2');


function conexionDB() {
    /*Definimos la conexión a la db de MySQL */
    const connection = db.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'kiosko'
    });
    /*Conectamos a la db */
    connection.connect((error) => {
        if (error) {
            console.error('Error en la conexion a la base de datos:', error);
            return;
        }
        console.log('Conexion exitosa a la base de datos MySQL');
    });
}

function execute(query, params) {
    return new Promise((resolve, reject) => {
        const connection = db.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'kiosko'  
        });

        connection.execute(query, params, (error, results) => {
            connection.end();
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {conexionDB, execute};