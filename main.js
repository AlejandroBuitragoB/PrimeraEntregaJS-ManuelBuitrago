let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
if (nombre != "" && apellido != "") {
    alert(`Hola ${nombre} ${apellido}`);
} else {
    alert(`Nombre y apellidos Requeridos`);
}

const dosis = 1.2;

let Peso = parseInt(prompt("¿cúal es su peso (en números)?"));

let ProteinaNecesaria = (Peso * dosis);
alert(`Debes consumir ${ProteinaNecesaria} gr de proteina al día`);

if (ProteinaNecesaria < 70) {
    alert("Echale un vistazo a nuestros ganadores de masa muscular");
} else if (ProteinaNecesaria < 100 && ProteinaNecesaria > 70) {
    alert("Echale un vistazo a nuestras creatinas")
} else if (ProteinaNecesaria < 120 && ProteinaNecesaria > 100) {
    alert("Aquí podrás encontrar el producto perfecto para ayudarte a definir")
} else {
    alert("Nuestros profesionales pueden guiarte en este camino")
}

let respuesta = prompt("¿Estás listo para empezar?");

while (respuesta != "si") {
    alert("¡animos!");
    respuesta = prompt("¿Estás listo para empezar?");
}

alert("¡VAMOS!");


let meta = prompt(`Entonces ${nombre}, ¿cuál es tu nivel de fitness: bajo, medio o alto?`);

while (meta != "ESC") {
    switch (meta) {
        case "bajo":
            alert("Puedes asesorarte con nuestros expertos");
            break;

        case "medio":
            alert("Estamos aquí si tienes alguna duda");
            break;

        case "alto":
            alert("Seguro prefieres manejarte solo");
            break;

        default:
            alert("si no tienes idea, puedes consultar en el chatbot")
            break;
    }

    meta = prompt(`Entonces ${nombre}, ¿cuál es tu nivel de fitness: bajo, medio o alto?`);
}
