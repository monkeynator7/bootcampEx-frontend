function mostrarFormularioContacto() {
  var mediaQuery = window.matchMedia("(max-width: 991px)");
  if (mediaQuery.matches) {
    document.getElementById("fcontacto").style.display = "block";
    document.getElementById("freserva").style.display = "none";
  }
}
function mostrarFormularioReserva() {
  var mediaQuery = window.matchMedia("(max-width: 991px)");
  if (mediaQuery.matches) {
    document.getElementById("freserva").style.display = "block";
    document.getElementById("fcontacto").style.display = "none";
  }
}

function validarFormulario() {
  const ingresoNombre = document.getElementById('ingresoNombre').value;
  const nombrePatron = /^[a-zA-Z]+$/;
  const ingresoEmail = document.getElementById("ingresoEmail").value;
  const patronEmail = /^[^@]+@[^@]+\.[a-z]{2,}$/;
  const ingresoTelefono = document.getElementById("ingresoTelefono").value;
  const patronTelefono = /^([1-9]{1})([0-9]{8})$/;

  if (!ingresoNombre) {
    alert("El campo 'Nombre' es obligatorio.");
    return false;
  } else if (!nombrePatron.test(ingresoNombre)) {
    alert("El campo 'Nombre' solo acepta letras.");
    return false;
  }
  if (!ingresoEmail) {
    alert("El campo 'Correo' es obligatorio.");
    return false;
  } else if (!patronEmail.test(ingresoEmail)) {
    alert("Favor seguir el formato de email requerido.");
    return false;
  }
  if (!ingresoTelefono) {
    alert("El campo 'Telefono' es obligatorio.");
    return false;
  } else if (!patronTelefono.test(ingresoTelefono)) {
    alert("Favor entregar un numero de telefono valido.");
    return false;
  }
  alert("Muchas gracias " + ingresoNombre + " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo: " + ingresoEmail + ".")
  location.reload();
  return true;
}

$(document).ready(function () {
  $("#freserva").submit(function (e) {
    e.preventDefault();

    var nReserva = $("#nombreReserva").val();
    // const nombrePatronReserva = /^[a-zA-Z]+$/;
    var eReserva = $("#emailReserva").val();
    // const patronEmailReserva = /^[^@]+@[^@]+\.[a-z]{2,}$/;
    var tReserva = $("#telefonoReserva").val();
    // const patronTelefonoReserva = /^([1-9]{1})([0-9]{8})$/;
    var fReserva = $("#fechaReserva").val();
    var horaReserva = $("#horaReserva").val();
    var numReserva = $("#numReserva").val();
    // const patronNumReserva = /^([1-9]|10)$/;

    if (!nReserva) {
      alert("El campo 'Nombre' es obligatorio para su reserva.");
      return;
    }
    var ePatRe = /^[^@]+@[^@]+\.[a-z]{2,}$/;
    if (!ePatRe.test(eReserva)) {
      alert("Favor seguir el formato presentado para email.");
      return;
    }
    var tPatRe = /^([1-9]{1})([0-9]{8})$/;
    if (!tReserva) {
      alert("Favor ingresar un número de telefono valido para reserva.");
      return;
    } else if (!tPatRe.test(tReserva)) {
      alert("Favor ingresar un número de telefono valido para reserva.")
      return;
    }
    if (!fReserva) {
      alert("Favor ingresar una fecha para su reserva.");
      return;
    }
    if (!horaReserva) {
      alert("Favor ingresar una hora valida para su reserva.");
      return;
    }
    var pNumRes = /^([1-9]|10)$/;
    if (!numReserva) {
      alert("Debe ingresar un numero de personas para la reserva.")
      return;
    } else if (!pNumRes.test(numReserva)) {
      alert("El número máximo de personas por reserva es de 10. En el caso de requerir más espacio o coordinar un evento especial, favor rellenar formulario de contacto.");
      return;
    }

    alert("Estimad(a): " + nReserva + " agradecemos por reservar con nosotros. Hemos registrado " + numReserva + " asistentes. Se ha enviado el código de confirmación al correo: " + eReserva + ".\nGracias por preferirnos.")
    window.location.href = "index.html";



  });

  $("#botonAbrirGaseosa").click(function () {
    $("#flotanteGaseosa").show();

  });
  $("#botonCerrarGaseosas").click(function () {
    $("#flotanteGaseosa").hide();

  });
  $("#botonAbrirTabla").click(function () {
    $("#flotanteTabla").show();

  });
  $("#botonCerrarTabla").click(function () {
    $("#flotanteTabla").hide();

  });
  $("#botonAbrirCerveza").click(function () {
    $("#flotanteCerveza").show();

  });
  $("#botonCerrarCerveza").click(function () {
    $("#flotanteCerveza").hide();

  });

  $("#botonSobreNosotros").click(function () {
    $("#abrirCarrusel").show();

  });
  $("#botonCerrarCarrusel").click(function () {
    $("#abrirCarrusel").hide();

  });


})
