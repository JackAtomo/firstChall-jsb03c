    'use strict'
    function juegoDado () {
        let suma = 0;
        let gameOver = false;
        let aleatorio = 0;
        while (suma <= 50 ) {
        aleatorio = Math.round(Math.random() * 5 + 1);
        suma = suma + aleatorio
        console.log(aleatorio);
        console.log(`La variable de gameOver es: ${gameOver}`);
        }
        gameOver = true;
        console.log ('gameOver El numero final a sido', suma );
        }


        juegoDado();


