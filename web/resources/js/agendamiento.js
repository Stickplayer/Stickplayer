swal({
  title: 'Bienvenido al agendamiento de citas de mantenimeinto de consolas',
  html: $('<div>')
    .addClass('some-class')
    .text('Primer paso: Tienes que elegir el día que quiere ser atendido.'),

  animation: false,
  customClass: 'animated tada'
})

function copiar(){
    swal({
  title: 'Horas disponibles:',
  type: 'info',
  html:
    '9:00am a 10:00am' + 
    ' ||| 10:01am a 11:00am' + 
    ' ||| 11:01am a 12:00pm',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  showCancelButton: true,
  confirmButtonText:
    '<i class="fa fa-thumbs-down"><a href="../modulo mantenimiento/semana.html">Apartar</a></i>',

  cancelButtonText:
  '<i class="fa fa-thumbs-down"></i> No apartar',
  cancelButtonAriaLabel: 'Thumbs down',
})
}