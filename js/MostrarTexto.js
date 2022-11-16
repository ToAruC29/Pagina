function Animar(){

  document.getElementById("muestra").innerHTML = document.getElementById("texto").value;

  const Ventana1 = document.querySelector('.caja1');
  Ventana1.style.marginTop = "-30%";


}

function Desanimar(){

  const Ventana1 = document.querySelector('.caja1');
  Ventana1.style.marginTop = "0%";


}
