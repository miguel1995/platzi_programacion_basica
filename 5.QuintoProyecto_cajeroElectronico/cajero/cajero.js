class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;

        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
        this.imagen.width = 50;

    }
}

function entregarDinero() {

    var t = document.getElementById("dinero");
    entregado = [];
    resultado.innerHTML = "";
    dinero = parseInt(t.value);


    for (var bi of caja) {

        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);

            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }


    if (dinero > 0) {
        resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
    } else {
        var h = 0;
        for (var e of entregado) {
            if (e.cantidad > 0) {
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + ' <img src='+e.imagen.src+' width=50 />' + "<br\>";
                h += (e.valor * e.cantidad);

                descontarValorCaja(e);

            }
        }


        historial.innerHTML += "$" + h + "<br>";


    }

    mostrarCaja();

}

function descontarValorCaja(element) {

    for (var index in caja) {

        if (element.valor == caja[index].valor) {
            caja[index].cantidad = caja[index].cantidad - element.cantidad;
            break;
        }
    }
}


function mostrarCaja() {
    var valor = 0;
    for (var bill of caja) {
        valor += (bill.valor * bill.cantidad);
    }
    montoDisponible.innerHTML = "$" + valor;
}


var caja = [];
var entregado = [];
var registroRetiros = [];
var imagenes = [];
imagenes[100]="100.png"
imagenes[50]="50.png"
imagenes[20]="20.png"
imagenes[10]="10.png"
imagenes[5]="5.png"

caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var montoDisponible = document.getElementById("valor_disponible");
var historial = document.getElementById("historial");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

mostrarCaja();

