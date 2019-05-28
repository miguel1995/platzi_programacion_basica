var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
}


document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorcito = "green";
    var movimiento = 1;

    switch (evento.keyCode) {
        case teclas.UP:
            console.log("arriba");
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            console.log("abajo");
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            console.log("izquierda");
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            console.log("derecha");
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break;
        default:
            console.log("");
            break;

    }

}

function dibujarMouse(evento) {
    console.log(evento);
    var nuevoX = evento.x;
    var nuevoY = evento.y;
    var colorcito = "black";
    dibujarLinea(colorcito, x, y, nuevoX, nuevoY, papel);
    x = nuevoX;
    y = nuevoY;

}