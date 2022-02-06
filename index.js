
function Cantidad() {

var Precio = 2000;
var cantidadDePaletas = document.getElementsByClassName('cantidad');
var IVA = 19;
var div = 100;
var resultadoSinIva
var resultadoConIva

resultadoSinIva = parseInt(precio) * parseInt(cantidadDePaletas);
resultadoConIva = parseInt(resultadoSinIva) * parseInt(IVA) / parseInt(div);

console.log (resultadoConIva)
}

cantidad();
