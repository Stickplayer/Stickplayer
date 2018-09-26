function enviarUsuario(){ 
    var usuario = $("#usuario").val(); 
    var password = $("#password").val();


    console.log(usuario);
    console.log(password);


    if (usuario == "ximena_eo@hotmail.com" && password == "1234") {     

        alert('Bienvenida administradora');
        windows.location.href =('../carrito.html');

    }else if(usuario == "lxmerchan@misena.edu.co" && password == "1234"){
        alert('Bienvenido cliente');
        windows.location.href =('../carrito.html');

    }else{
        alert('Error: verifique que su correo y contraseña sea correcta');

    }
}
;