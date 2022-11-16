function movimiento(){
  coordenadaX = window.event.clientX;
  coordenadaY = window.event.clientY;
  img.style.left = coordenadaX+"px";
  img.style.top = coordenadaY+"px";
}
