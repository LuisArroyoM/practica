function validar(){

var name = document.getElementById("nombre").value;


var expreg = /^[a-zA-Z]{1,20}\w[^0-9]$/;

if(expreg.test(name)==false){
	alert("No puede contener numeros o ser vacío");
	document.getElementById("firstname").value="";
	}


}
function validaremail(){
var email = document.getElementById("correo").value;

var expregemail = /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{1,4}$/;


if(expregemail.test(email)==false){
alert("El email debe seguir el formato nombre@example.com");
document.getElementById("email").value ="";

	}

}
function validarcodigo(){
var cod = document.getElementById("codigo").value;

var expreg = /^16[0-9]{8}$/;


if(expreg.test(cod)==false){
	alert("Introducir codigo válido ");
document.getElementById("cod").value ="";
}

}

function validarapellido(){
var lastname = document.getElementById("apellido").value;



var expreg = /^[a-zA-Z]{1,20}\w[^0-9]$/;

if(expreg.test(lastname)==false){
	alert("No puede contener numeros o estar vacío");
document.getElementById("lastname").value ="";
}

}
