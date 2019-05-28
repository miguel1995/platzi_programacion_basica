cerdoX = 100;
cerdoY = 100;

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
}
document.addEventListener("keydown", dibujarTeclado);

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");


var fondo = {
    url: "tile.png",
    cargaOk: false
}

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
}

var pollo = {
    url: "pollo.png",
    cargaOk: false
}

var vaca = {
    url: "vaca.png",
    cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOk = true;
}

function cargarPollos() {
    pollo.cargaOk = true;
}

function cargarCerdos() {
    cerdo.cargaOk = true;
}

var cantidad = aleatorio(1, 30);
function dibujar() {

    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOk) {
        console.log(cantidad);

        for (let v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;

            papel.drawImage(vaca.imagen, x, y);
        }
    }

    if (pollo.cargaOk) {
        console.log(cantidad);

        for (let v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;

            papel.drawImage(pollo.imagen, x, y);
        }
    }

    if (cerdo.cargaOk) {
        dibujarCerdo(cerdoX, cerdoY);
    }
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

function dibujarTeclado(evento) {
    var movimiento = 10;


    switch (evento.keyCode) {
        case teclas.UP:
            console.log("arriba");
            dibujarCerdo(cerdoX, cerdoY - movimiento);
            cerdoY = cerdoY - movimiento;
            break;
        case teclas.DOWN:
            console.log("abajo");
            dibujarCerdo(cerdoX, cerdoY + movimiento);
            cerdoY = cerdoY + movimiento;
            break;
        case teclas.LEFT:
            console.log("izquierda");
            dibujarCerdo(cerdoX - movimiento, cerdoY);
            cerdoX = cerdoX - movimiento;
            break;
        case teclas.RIGHT:
            console.log("derecha");
            dibujarCerdo(cerdoX + movimiento, cerdoY);
            cerdoX = cerdoX + movimiento;
            break;
        default:
            console.log("");
            break;
    }
}

function dibujarCerdo(x, y) {
    papel.drawImage(cerdo.imagen, x, y);
}