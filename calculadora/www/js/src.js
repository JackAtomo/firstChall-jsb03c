'use strict'
function sumar(){
    
    let n1 = parseInt(document.getElementById("n1").value,10);
    let n2 = parseInt(document.getElementById("n2").value,10); 
    let n3 = n1 + n2;
    document.getElementById("n3").value = n3;

}

function restar(){
    let n1 = parseInt(document.getElementById("n1").value,10);
    let n2 = parseInt(document.getElementById("n2").value,10); 
    let n3= n1 - n2;
    document.getElementById("n3").value = n3;
}

function multiplicar(){
    let n1 = parseInt(document.getElementById("n1").value,10);
    let n2 = parseInt(document.getElementById("n2").value,10); 
    let n3= n1 * n2;
     document.getElementById("n3").value = n3;

}
function dividir(){
    let n1 = parseInt(document.getElementById("n1").value,10);
    let n2 = parseInt(document.getElementById("n2").value,10); 
    let n3= n1 / n2;
     document.getElementById("n3").value = n3;
}
function elevar(){
    let n1 = parseInt(document.getElementById("n1").value,10);
    let n2 = parseInt(document.getElementById("n2").value,10); 
    let n3 = Math.pow(n1, n2)
    document.getElementById("n3").value = n3;
    
}
