function validacion(){
	var correo = $("#correo").val();
	var password = $("#pass").val();

console.log(correo);
console.log(password);

if (correo == "administrador@gmail.com" && password == "1234") {
	alert('Bienvenido administrador');
	// window.location.href = 'admistradorEjercicio2.html';
	window.open("Administrador/Inicio_Administrador.html")

   }else if (correo == "mantenimiento@gmail.com" && password == "1234"){
    alert('Bienvenido cliente');
	window.open("modulo mantenimiento/CalendarioDic.html")
	}else if (correo == "cliente@gmail.com" && password == "1234"){
    alert('Bienvenido cliente');
	window.open("Ventas/carrito.html")
   }else {
   	alert(' error: veriicar su correo y/o contraseña')
   }
}