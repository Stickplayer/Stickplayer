$(document).ready(function(){

  $(document).on('click','.delete', function(){
    var row = $(this);

    swal({
      title:"¿está seguro de eliminar ese dato?",
      text: "Si se elimina este dato, se eliminara permanentemente",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        row.parent().parent().remove();
        swal("Eliminado", "El dato fue eliminado exitosamente.", "success");
      } else {
        swal("Cancelado", "El dato no fue eliminado", "error");
      }
    });
  });

  $(document).on('click', '.clone', function(){

    var tbody = $('#tbody');
    var row = $(this);

    swal({
      title: "¿esta seguro de copiar ese dato?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Si copiar",
      cancelButtonText: "No copiar",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        row.parent().parent().clone().appendTo(tbody);
        swal("Copiar", "Su dato fue copiado.", "success");

      } else {
        swal("Cancelado", "Su dato no fue copiado", "error");
      }
    });
  });

  $(document).on('click', '.add', function(){
    var tbody = $('#tbody');

    tbody.append(
      "<tr>"+
      "<td><input type='text'/></td>"+
      "<td><input type='text'/></td>"+
      "<td><input type='text'/></td>"+
      "<td><input type='text'/></td>"+
      "<td><input type='text'/></td>"+
      "<td><button class=\"btn btn-xs btn-success save\"><i class=\"material-icons\">save</i></button></td>"+
      "</tr>");

    });

    $(document).on('click', '.save', function(){
      var parent = $(this).parent().parent();
      var tdName = parent.children("td:nth-child(1)");
      var tdPhone = parent.children("td:nth-child(2)");
      var tdEmail = parent.children("td:nth-child(3)");
      var tdButtons = parent.children("td:nth-child(4)");
      tdName.html(tdName.children("input[type=text]").val());
      tdPhone.html(tdPhone.children("input[type=text]").val());
      tdEmail.html(tdEmail.children("input[type=text]").val());
      tdButtons.html(
        "<button class=\"btn btn-xs btn-danger delete\"><i class=\"material-icons\">delete_forever</i></button>" + " " +
        // "<button class=\"btn btn-xs btn-info edit\"><i class=\"material-icons\">mode_edit</i></button>"+ " " +
        "<button class=\"btn btn-xs btn-warning clone\"><i class=\"material-icons\">content_copy</i></button>" + " " +
        "<button class=\"btn btn-xs btn-success add\"><i class=\"material-icons\">note_add</i></button>"
      );
    });

    $(document).on('click', '.edit', function(){
      var par = $(this).parent().parent(); //trAKDAKLDJ
      var tdName = par.children("td:nth-child(1)");
      var tdPhone = par.children("td:nth-child(2)");
      var tdEmail = par.children("td:nth-child(3)");
      var tdButtons = par.children("td:nth-child(4)");

      tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
      tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
      tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
      tdButtons.html("<button class=\"btn btn-xs btn-success save\"><i class=\"material-icons\">save</i></button></td>");
    })
  });