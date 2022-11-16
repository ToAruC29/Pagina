function respuestas(){

let res = document.getElementById('resultado');
let bar = document.getElementById('barra');
let respuesta1, respuesta2, respuesta3, calificacion = 0;


   color1.style.background = "none";
   color2.style.background = "none";
   color3.style.background = "none";
   respuesta1 = document.getElementById('id1').checked;
  if (respuesta1){

   color1.style.background = "#DC3545"
  }else{
     respuesta2 = document.getElementById('id2').checked;
    if(respuesta2){
      calificacion = 1;
      color2.style.background = "#28a745"
    }else{
      respuesta3 = document.getElementById('id3').checked;
      if(respuesta3){
      color3.style.background = "#DC3545"
      }
    }
  }

  color4.style.background = "none";
  color5.style.background = "none";
  color6.style.background = "none";
  respuesta1 = document.getElementById('id4').checked;
  if (respuesta1){
  calificacion += 1;
  color4.style.background = "#28a745"
  }else{
    respuesta2 = document.getElementById('id5').checked;
    if(respuesta2){
     color5.style.background = "#DC3545"
    }else{
      respuesta3 = document.getElementById('id6').checked;
      if(respuesta3){
       color6.style.background = "#DC3545"
      }
    }
  }


  color7.style.background = "none";
  color8.style.background = "none";
  color9.style.background = "none";
  respuesta1 = document.getElementById('id7').checked;
  if (respuesta1){
  color7.style.background = "#DC3545"
  }else{
    respuesta2 = document.getElementById('id8').checked;
    if(respuesta2){
    color8.style.background = "#DC3545"
    }else{
       respuesta3 = document.getElementById('id9').checked;
      if(respuesta3){
      calificacion += 1;
      color9.style.background = "#28a745"
      }
    }
  }

  if(calificacion == 3){
  res.innerHTML= " 100%";
  bar.value = "100";
  }else if (calificacion == 2){
  res.innerHTML= " 66.6%";
  bar.value = "66";
  }else if (calificacion == 1){
  res.innerHTML= " 33.3%";
  bar.value = "33";
  }else if (calificacion == 0){
  res.innerHTML= " 0%";
  bar.value = "0";
  }
}
