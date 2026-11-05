

const rutaMetodo = ((req, res, next) => {
  console.log(`Metodo: ${req.method} | Ruta: ${req.url}`);
  next();
});

module.exports = rutaMetodo;
