"use strict";

addEventListener("DOMContentLoaded", () => {
    let res = [];
    const cargarProductos = async () => {
        try {
            const response = await fetch("/productos");
            res = await response.json();
            const listadoProductos = document.getElementById("listado-productos");
            listadoProductos.innerHTML = "";
            res.productos.forEach((producto) => {
                const li = document.createElement("li");
                li.classList.add("list-group-item");
                li.classList.add("m-2");
                li.textContent = `${producto.nombre} - ${producto.descripcion} - $${producto.precio} - Stock: ${producto.stock} - Categoria: ${producto.categoria}`;
                listadoProductos.appendChild(li);
            });
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };

    /**Escucho el submit del formulario */
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        
       /*Traigo los valores del formulario */
        const nombre = document.getElementById("nombre").value;
        const descripcion = document.getElementById("descripcion").value;
        const precio = document.getElementById("precio").value;
        const stock = document.getElementById("stock").value;
        const categoria = document.getElementById("categoria").value;
        /**Creo el objeto producto */
        const producto = {
            nombre,
            descripcion,
            precio,
            stock,
            categoria
        };
        console.log(producto);
        /*realizo un fetch para enviar el producto al servidor utiilzando async await */
        const enviarProducto = async () => {
            try {
                const response = await fetch("/productos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(producto)
                });
                const data = await response.json();
                console.log("Producto cargado exitosamente:", data);
                /**Limpiamos el formulario */
                formulario.reset();
                alert("Producto cargado exitosamente");
                /**Recargamos los productos */
                cargarProductos();
            } catch (error) {
                console.error("Error al cargar el producto:", error);
            }
        };
        enviarProducto();
    });

    /**Llamo a la funcion para cargar los productos al inicio */
    cargarProductos();
});