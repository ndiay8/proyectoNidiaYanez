// solicitud de ingreso
let nombreUsuario = prompt("Hola! Ingresa tu nombre")
switch (nombreUsuario) {
    case "":
        alert("Por favor, ingresa tu nombre")
        prompt("ingresa tu nombre")
        console.log("ingreso fallido")
        break
    case nombreUsuario:
        alert("Hola " + nombreUsuario + "! Estamos muy felices de que te contactes con nosotros")
        console.log(nombreUsuario + " ingreso")
        break
    default:
        alert("Lo siento, no he podido entender tu nombre")
}
let edad = prompt("ingresa tu edad") // igreso de edad 
while (edad <= 16) {
    { console.log("ingreso fallido") }
    alert("lo siento " + nombreUsuario + ", no cumples con la edad requerida")
    edad = prompt("presiona S para salir")
}

