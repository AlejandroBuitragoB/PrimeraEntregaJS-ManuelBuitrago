let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido"); 
    if (nombre != "" && apellido != ""){
        alert(`Hola ${nombre} ${apellido}`);
    }else{
        alert(`Nombre y apellidos Requeridos`);
    }

const dosis = 1.2;

let Peso = parseInt(prompt("¿cúal es su peso (en números)?"));

let ProteinaNecesaria = (Peso * dosis);
alert(`Debes consumir ${ProteinaNecesaria} gr de proteina al día`);

if (ProteinaNecesaria < 70) {
    alert("Echale un vistazo a nuestros ganadores de masa muscular");
} else if (ProteinaNecesaria < 100 && ProteinaNecesaria > 70){
    alert("Echale un vistazo a nuestras creatinas")
} else if (ProteinaNecesaria < 120 && ProteinaNecesaria > 100){
    alert("Aquí podrás encontrar el producto perfecto para ayudarte a definir")
} else {
    alert ("Nuestros profesionales pueden guiarte en este camino")
}





