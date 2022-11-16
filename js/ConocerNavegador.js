function buscarDatosnavegador(){

  let datosNavegador = navigator.userAgent;
  let nombreNavegador = navigator.appName;
  let datos = document.getElementById('tipoNavegador');
  datos.innerHTML = "" +datosNavegador;
  let nombre = document.getElementById('nombre');
  nombre.innerHTML = "" +nombreNavegador;

}
var hilo = setInterval(buscarDatosnavegador);
