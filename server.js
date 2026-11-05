const express = require('express');
const path = require('path');
const conexionDB = require('./db.js').conexionDB;
const productosRouter = require('./router/productos.routes.js');
const rutaMetodo = require('./middleware/info');

/*Definimos el puerto */
const PORT = 3000;
/*Creamos el router para el CRUD */
const router = express.Router();
/*Se ejecuta la conexión a la base de datos */
conexionDB();

const app = express();
app.use(express.json());

/* middleware de método y la ruta - PARTE 3*/
app.use(rutaMetodo);

/*Usamos el router */
app.use('/productos',productosRouter);

/*Ruta publica para servir archivos estaticos */
app.use(express.static(path.join(__dirname, 'public')));

/*Escuchamos en el puerto 3000 */
app.listen(3000, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});