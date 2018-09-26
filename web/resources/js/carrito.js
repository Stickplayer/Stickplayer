function copiar(){
    swal({
  title: '¿Desea eliminar este producto del carrito de compras?',
  type: 'warning',
  html:
    '',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  showCancelButton: true,
  confirmButtonText:
    '<i class="fa fa-thumbs-down"></i> cancelar',

  cancelButtonText:
  '<i class="fa fa-thumbs-down"><a href="../inicio.html">Aceptar</a></i>',
  cancelButtonAriaLabel: 'Thumbs down',
})
}

function comprar(){
    swal({
  title: 'Su compra fue realizada con exito',
  type: 'success',
  html:
    'La informacion de su compra sera enviada a su correo',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  showCancelButton: true,
  confirmButtonText:
    '<i class="fa fa-thumbs-down"><a href="recibo.html">Ver recibo</a></i>',

  cancelButtonText:
  '<i class="fa fa-thumbs-down"><a href="../inicio.html">Volver al inicio</a></i>',
  cancelButtonAriaLabel: 'Thumbs down',
})
}

