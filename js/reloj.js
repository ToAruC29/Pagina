function ajustarHora() {
    var hoy = new Date();
    var hr = hoy.getHours();
    var min = hoy.getMinutes();
    var seg =hoy.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = comprobar(hr);
    min = comprobar(min);
    seg = comprobar(seg);
    document.getElementById("hora").innerHTML = hr + ":" + min + ":" + seg + " " + ap;

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    var semdi = dias[hoy.getDay()];
    var diaho = hoy.getDate();
    var mes = meses[hoy.getMonth()];
    var anio = hoy.getFullYear();
    var fecha = semdi+" "+diaho+" "+mes+" "+anio;
    document.getElementById("fecha").innerHTML = fecha;

    var tiempo = setTimeout(function(){ ajustarHora() }, 500);
}
function comprobar(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
