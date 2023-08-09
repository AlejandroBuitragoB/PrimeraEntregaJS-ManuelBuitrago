/*Interfaz de bienvenida al portal personalizada */
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
if (nombre != "" && apellido != "") {
    alert(`Hola ${nombre} ${apellido}`);
} else {
    alert(`Nombre y apellidos Requeridos`);
}

/*medidor de consumo diario de proteinas según el peso del usuario*/


let peso = parseInt(prompt("¿cúal es su peso (en números)?"));

function multip (peso , b = 1.2) {
    return peso * b;
}

const proteinanecesaria = multip (peso);

alert(`Debes consumir ${proteinanecesaria} gr de proteina al día`);

if (proteinanecesaria < 70) {
    alert("Echale un vistazo a nuestros ganadores de masa muscular");
} else if (proteinanecesaria < 100 && proteinanecesaria > 70) {
    alert("Echale un vistazo a nuestras creatinas")
} else if (proteinanecesaria < 120 && proteinanecesaria > 100) {
    alert("Aquí podrás encontrar el producto perfecto para ayudarte a definir")
} else {
    alert("Nuestros profesionales pueden guiarte en este camino")
}

/*interfaz para saber si el cliente puede y desea navegar solo a través de la tienda online o si necesita o desea ayuda según su nivel de experiencia*/

let respuesta = prompt("¿Estás listo para empezar?").toLowerCase();

while (respuesta != "si") {
    alert("¡animos!");
    respuesta = prompt("¿Estás listo para empezar?");
}

alert("¡VAMOS!");


let meta = prompt(`Entonces ${nombre}, ¿cuál es tu nivel de fitness: bajo, medio o alto?`);

while (meta != "SALIR") {
    switch (meta) {
        case "bajo":
            alert("Puedes asesorarte con nuestros expertos (escribe la palabra SALIR para continuar)");
            break;

        case "medio":
            alert("Estamos aquí si tienes alguna duda (escribe la palabra SALIR para continuar)");
            break;

        case "alto":
            alert("Seguro prefieres manejarte solo (escribe la palabra SALIR para continuar)");
            break;

        default:
            alert("si no tienes idea, puedes consultar en el chatbot (escribe la palabra SALIR para continuar)")
            break;
    }

    meta = prompt(`Entonces ${nombre}, ¿cuál es tu nivel de fitness: bajo, medio o alto?`);
}


class Producto {
    constructor(nombrep, precio, imagen) {
        this.nombrep = nombrep;
        this.precio = precio;
        this.imagen = imagen;
        this.vendido = false;
    }

    vender() {
        this.vendido = true;
    }
}

const producto1 = new Producto("proteina1", 22.000, "insertar url de foto de preotina");
const producto2 = new Producto("proteina2", 19.000, "insertar url de foto de preotina");
const producto3 = new Producto("proteina3", 18.000, "insertar url de foto de preotina");
const producto4 = new Producto("proteina4", 17.000, "insertar url de foto de preotina");
const producto5 = new Producto("creatina1", 25.000, "insertar url de foto de creatina");
const producto6 = new Producto("creatina2", 26.000, "insertar url de foto de creatina");
const producto7 = new Producto("barrasp1", 21.000, "insertar url de foto de barras");
const producto8 = new Producto("barrasp2", 21.000, "insertar url de foto de barras");
const producto9 = new Producto("barrasp3", 21.000, "insertar url de foto de barras");
const producto10 = new Producto("barrasp4", 21.000, "insertar url de foto de barras");

console.log(producto1);