## Integrantes

Ignacio Carucci DNI: 36397301
Omar Armando Roselli DNI: 29555208

# Proyecto Integrador

### Instalación

Al descomprimir el archivo se verá una carpeta que debe ser abierta en Visual Studio Code
dentro de esta carpeta se encuentra el archivo proyecto.sql que debe ser importado en MySQL para la conexión a la base de datos.
Una vez abierta la carpeta del proyecto en Visual Studio Code desde la terminal ejecutar:

* npm install
Para instalar todas las dependencias necesarias para ejecutar la API

* npm run start
Para ejecutar la aplicación.

### Tecnologias aplicadas

* Express
* MySQL2

### Arquitectura

Aunque se trata de una API REST sencilla, decidimos utilizar una arquitectura que desacople y delegue responsabilidades. 
Por lo que utilizamos Router - Controller - Service - Repository.

Donde:
El Router declara las rutas y asocia los metodos al controller.
El Controller recibe las peticiones, pasa al servicio y cuando recibe la devolucion es quien responde
El Service es quien tiene la lógica y las reglas del negocio
El Repository es el encargado de la comunicacion con la base de datos.

Tambien separamos la parte de la conexion a la db en un archivo independiente. 
Para esto averiguamos que haciendo un pool de conexiones no tenemos que abrir y cerrar la conexion en cada consulta.

### Parte 1
#### Tema seleccionado: Inventario de un kiosko.
#### Tablas:

Se utiliza MySQL para la creacion de la tabla productos y se insertan 5 elementos en ella.
El archivo proyecto.sql contiene la creacion de la tabla y la insercion de los elementos.

### Parte 2

#### API con Express y MySQL

Se establece la conexión con la base de datos y se crea un servidor en el puerto 3000

El flujo de datos será el siguiente:

el server recibe una peticion del cliente -> el router lo deriva, dependiendo del verbo a la funcion del controller apropiada ->
el controller en este momento pasa la petición al service que maneja la logica-> el service valida segun la logica de negocio y pasa la peticion al repository-> el repository es quien realiza la comunicacion con la base de datos y retorna la respuesta de la query realizada.
La informacion retorna haciendo el camino inverso repository->server->controller
y es el controller el encargado de definir el status del mensaje y de retornar el json en su respuesta.

Se realizaron pruebas desde Postman para testear el CRUD. Para mejorar el metodo PUT, se puede colocar solo la caracteristica que se quiere modificar del producto, no es necesario completar todos los campos, la lógica incluida en productos.service se encarga de completar lo faltante con los datos que no se quieren modificar.

### Parte 3 Middleware y Filtro

Se coloca el middleware en una carpeta donde se podrian colocar a futuro otros middlewares para mantener mas limpio
el server

Para el filtro utilizamos el parametro categorias.
Las categorias disponibles al momento son: "Golosinas","Snacks","Galletitas"
En caso de agregar una nueva categoria, por ejemplo:"Lacteos" ésta estará disponible pero debe ser escrita en la url de postman de la misma manera


### Parte 4

Para la parte 4 se utilizo fetch con funciones async/await para hacer las llamadas y se utilizo bootstrap para mejorar de manera simple la estetica


### Parte 5

Pregunta 1: Metodo: PUT ruta: /productos/3

Cuando se realiza la consulta que el server recibe por el puerto 3000, inicialmente pasa por el middleware de rutaMetodo que va a mostrar por consola la informacion de metodo y ruta.
A continuacion ingresa al ruter porque la ruta es /productos y ejecuta productosRouter.put que pide un parametro que llega en la url. En este caso id: 3 pasando al controller de productos con actualizarProducto

Actualizar producto es una funcion asincrona que va a manejar el status y el json de la respuesta. Antes, consulta el service.actualizarProducto con el id y el producto modificado en el body de la request.
En el service se incluye la logica del negocio, en este caso se valida la existencia del producto que se quiere modificar, y se chequean que campos se modificaran del producto. Luego se pasa al repositorio con el id y el producto modificado.

En el repositorio se ejecuta la query de consulta a la db. Si el cambio es validado en la db el repositorio retorna como resultado el nuevo producto modificado. Al arribar de retorno al controlador, es este el que a partir de la respuesta obtenida envia el status y json como respuesta.

Pregunta 2: 

Principalmente por seguridad. Asi se evita la inyeccion SQL, donde si no se procesara previamente como hacemos con los ?, podria inyectarse directamente en la query codigo malicioso.
Si en nuestro caso hubiesemos puesto:
"SELECT * FROM productos WHERE categoria = '" + categoria + "'";

en la URL podrian poner .../productos?categoria="Golosinas" OR '1'='1'

Y como la 1=1 es siempre verdadero la db retornaria todos los registros

o un atacante podria incluir un DROP TABLE productos y asi borrar toda la tabla.