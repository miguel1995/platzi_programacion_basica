var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado){
    resultado.send("Este es el <strong>home</srong> genial!!");
}

function cursos(peticion, resultado){
    resultado.send("Estos son los <strong>cursos</srong>");
}

aplicacion.listen(8989, function(){
    console.log("Ejecutando en el puerto 8989");
    
});