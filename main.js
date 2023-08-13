/*Interfaz de bienvenida al portal personalizada. El usario podrá optar por una atención "guiada" al hacer click en el botón "empecemos" */
let boton = document.getElementById("boton");
boton.addEventListener("click", () => {

    let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
if (nombre != "" && apellido != "") {
    alert(`Hola ${nombre} ${apellido}`);
} else {
    alert(`Nombre y apellidos Requeridos`);
}

/*medidor de consumo diario de proteinas según el peso del usuario*/


let peso = parseInt(prompt("¿cúal es su peso (en números)?"));

function multip(peso, b = 1.2) {
    return peso * b;
}

const proteinanecesaria = multip(peso);

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

    
})



class Producto {
    constructor(nombre, precio, imagen, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }

    vender() {
        if (this.cantidad === 0) {
            alert(`no hay mas ${this.nombre} disponible`);
        } else {
            this.cantidad -= 1;
        }
    }
}

const producto1 = new Producto("proteina1", 22000, "insertar url de foto de proteina", 5);
const producto2 = new Producto("proteina2", 19000, "insertar url de foto de proteina", 5);
const producto3 = new Producto("proteina3", 18000, "insertar url de foto de proteina", 5);
const producto4 = new Producto("proteina4", 17000, "insertar url de foto de proteina", 5);
const producto5 = new Producto("creatina1", 25000, "insertar url de foto de creatina", 5);
const producto6 = new Producto("creatina2", 26000, "insertar url de foto de creatina", 5);
const producto7 = new Producto("barrasp1", 21000, "insertar url de foto de barras", 5);
const producto8 = new Producto("barrasp2", 21000, "insertar url de foto de barras", 5);
const producto9 = new Producto("barrasp3", 21000, "insertar url de foto de barras", 5);
const producto10 = new Producto("barrasp4", 21000, "insertar url de foto de barras", 5);

const productos = [];

productos.push(new Producto("proteina", 22000));
productos.push(new Producto("proteina", 19000));
productos.push(new Producto("proteina", 28000));
productos.push(new Producto("proteina", 27000));
productos.push(new Producto("creatina", 25000));
productos.push(new Producto("creatina", 26000));
productos.push(new Producto("barras", 5000));
productos.push(new Producto("barras", 5000));
productos.push(new Producto("barras", 6000));
productos.push(new Producto("barras", 4000));


let nombrep = prompt("Ingrese el nombre del producto a consultar");

while (nombrep != "SALIR") {
    let producto;

    for (const item of productos) {
        if (item.nombre === nombrep) {
            producto = item;
        }
    }

    if (producto) {
        let mensaje = `
    nombre: ${producto.nombre}
    precio: ${producto.precio}
    `;

        alert(mensaje);
    } else {
        alert("El producto no se encuentra disponible");
    }

    nombrep = prompt("Ingrese el nombre del producto a consultar. Escriba SALIR para busqueda manual");
}

let precio = parseInt(prompt("Ingrese el precio minimo"));
let filtrados = productos.filter((item) => item.precio > precio);

filtrados.forEach(item => {
    let mensaje = `
    nombre: ${item.nombre}
    precio: $${item.precio}`

    alert(mensaje)
})

