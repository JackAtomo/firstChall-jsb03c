'use strict'

class Person{
    constructor(nombre , genero, edad){
this.nombre = document.getElementById("name").value;
this.genero = document.getElementById("genero").value;
this.genero = document.getElementById("edad").value;
    }
    }

class Profesor extends Person{
    constructor(nombre, genero, edad, asignatura , listaEstudiantes) {
        super(nombre, genero, edad);
        this.asignatura = document.getElementById("asignatura").value;
        this.listaEstudiantes = document.getElementById("listaEstudiantes").value;
      }

}

class Estudiantes extends Person{
    constructor(nombre, genero , edad,  curso, grupo){
        super(nombre, genero, edad);
        this.curso = document.getElementById("curso").value;
        this.grupo = document.getElementById("grupo").value;
    }

}

function añadirUsuarios(person){
let tipo= document.getElementById("tipo").value;
 
if (tipo === 'profesor') {
 new Profesor(0,0,0);
}else if (tipo === 'alumno'){
    new Estudiantes(0,0,0);
}

document.getElementById("demo").innerHTML =  ;

}

let persona = 0