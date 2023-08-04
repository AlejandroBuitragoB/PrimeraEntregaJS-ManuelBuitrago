/*Interfaz de bienvenida al portal personalziada */
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

let respuesta = prompt("¿Estás listo para empezar?");

while (respuesta === "") {
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
