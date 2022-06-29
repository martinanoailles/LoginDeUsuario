let usuarioRegistrado: string = "Juan" ;
let claveRegistrada: string = "claveJuan" ;

let nombreUsuario: string | null = prompt("Ingrese su nombre de Usuario:") ;
let claveUsuario: string | null = prompt("Ingrese su clave:") ;

if (nombreUsuario === usuarioRegistrado && claveUsuario === claveRegistrada) {
  console.log("Usted ingreso correctamente")
} else {
  console.log("El usuario y/o contraseña son incorrectos")
}



