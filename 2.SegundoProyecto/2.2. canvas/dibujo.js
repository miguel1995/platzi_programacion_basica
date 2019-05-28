var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", bibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function bibujoPorClick() {
    var xxx = parseInt(texto.value);

    var lineas = xxx;
    var l = 0;
    var yi, xf;
    var colorcito = "#FAF";
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
    }

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, yi, 0, 300, xf);
    }
    
  
    
    dibujarLinea(colorcito, 1, 1, 1, ancho-1);
    dibujarLinea(colorcito, 1, ancho-1, ancho-1, ancho-1);
    
}