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
el controller en este momento pasa la petición al service que maneja la logica-> el service valida segun la logica de negocio y pasa la peticion al repository->
el repository es quien realiza la comunicacion con la base de datos y retorna la respuesta de la query realizada.
La informacion retorna haciendo el camino inverso repository->server->controller
y es el controller el encargado de definir el status del mensaje y de retornar el json en su respuesta.

### Parte 3 Middleware y Filtro

Se coloca el middleware en una carpeta donde se podrian colocar a futuro otros middlewares para mantener mas limpio
el server

Para el filtro utilizamos el parametro categorias.

### Parte 4



