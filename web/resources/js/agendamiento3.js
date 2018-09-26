swal({
  title: 'Tercer paso: Deja un comentario acerca del problema en su consolas',
  html: $('<div>')
    .addClass('some-class')
    .text('> deja la marca de su consola y has un breve comentario.'),

  animation: false,
  customClass: 'animated tada'
})

function copiar(){
    swal({
  title: 'Su agendamiento de cita fue realizado exitosamente',
 type: 'success',
  html:
    'La informacion de su agendamiento sera enviado a su correo electronico.',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  showCancelButton: true,
  confirmButtonText:
    '<i class="fa fa-thumbs-down"><a href="../modulo mantenimiento/recibo.html">Ver recibo</a></i>',

  cancelButtonText:
  '<i class="fa fa-thumbs-down"><a href="../inicio.html">Aceptar</a></i>',
  cancelButtonAriaLabel: 'Thumbs down',
})
}
