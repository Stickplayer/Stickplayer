swal({
  title: 'Segundo paso: Aparta la hora que desees escojer.',
  html: $('<div>')
    .addClass('some-class')
    .text('> Las horas que no estan disponibles no apareceran boton de apartar cita e mantenimiento'),

  animation: false,
  customClass: 'animated tada'
})
