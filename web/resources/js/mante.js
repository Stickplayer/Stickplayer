function copiar(){
    swal({
  title: 'Para hacer una compra tiene que Iniciar sesión',
  type: 'info',
  html:
    '<a href="../IniciarSesion.html">Iniciar sesión</a> ' +
    '¿o aún no te has registrado?,'+
    '<a href="../formulario1/index.html">Registrate aqui</a> ',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<a href="../IniciarSesion.html"><i class="fa fa-thumbs-up"></i>Aceptar',
  confirmButtonAriaLabel: 'Thumbs up, great!',
})
}

