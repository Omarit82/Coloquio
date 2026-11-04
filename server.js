const express = require('express');
const db = require('mysql2');
const path = require('path');

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
/*Definimos el puerto */
const PORT = 3000;
/*Creamos el router para el CRUD */
const router = express.Router();

const app = express();
/*Llamamos el middleware para la utilizacion de JSON */
app.use(express.json());
/*Ruta publica para servir archivos estaticos */
app.use(express.static(path.join(__dirname, 'public')));

/*Escuchamos en el puerto 3000 */
app.listen(3000, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});