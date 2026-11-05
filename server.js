const express = require('express');
const path = require('path');
const conexionDB = require('./db');
const productosRouter = require('./routes/productos');

/*Definimos el puerto */
const PORT = 3000;
/*Creamos el router para el CRUD */
const router = express.Router();
/*Se ejecuta la conexión a la base de datos */
conexionDB();

const app = express();
app.use(express.json());
/*Ruta publica para servir archivos estaticos */
app.use(express.static(path.join(__dirname, 'public')));
/*Usamos el router */
app.use('productos',productosRouter);

/*Escuchamos en el puerto 3000 */
app.listen(3000, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});