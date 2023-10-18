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
let servicio = "Manicura";
let duracion1 = 60;
let boton1 = document.getElementsByClassName("btn btn-primary 1");

const servicio1 = { servicio: "Manicura", duracion: 60, boton: document.getElementsByClassName("btn btn-primary 1") }

console.log(servicio1)

let esmaltado1 = "Esmaltado Permanente";
let duracion2 = 120;
let boton2 = document.getElementsByClassName("btn btn-primary 2");

const servicio2 = { servicio: "Esmaltado Permanente", duracion: 120, boton: document.getElementsByClassName("btn btn-primary 2") }

console.log(servicio2)

let retiro = "Retiro";
let duracion3 = 60;
let boton3 = document.getElementsByClassName("btn btn-primary 3");

const servicio3 = { servicio: "Retiro", duracion: 60, boton: document.getElementsByClassName("btn btn-primary 3") }
console.log(servicio3)

const agenda = []

agenda.push(servicio)
agenda.push(esmaltado1)
agenda.push(retiro)
alert("Agregaste " + agenda)
agenda.map((p) => {
    console.log(p)
}
)

const servicios = [servicio1, servicio2, servicio3]

console.log(servicios.length)


let listado = [
    { id: servicio3 },
    { id: servicio2 },
    { id: servicio1 }
]


function minutos(servicio2, servicio3) {
    return servicio2 + servicio3
}
console.log(minutos(120, 60))

const boton = document.getElementsByClassName("btn btn-primary 1")

console.log(boton)

