

let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = parseInt(prompt("Ingrese el numero de intentos con los que desea jugar")) ;
let numeroMaximo = parseInt(prompt("Ingrese el rango máximo para adivinar"))
let numeroSecreto = Math.floor(Math.random() * numeroMaximo)+1 ;


while(numeroUsuario != numeroSecreto){
    
    numeroUsuario = parseInt(prompt(`Ingrese un numero entre 1 y ${numeroMaximo}`));

    if(numeroSecreto == numeroUsuario){
        alert(`Acertaste el numero es: ${numeroSecreto}. Usaste ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    }else{
        if (numeroUsuario > numeroSecreto){
            alert("El numero es menor.");
        }else {
            alert("El numero es mayor.");
        }
        intentos++;
        
    };

    if (intentos > maximosIntentos){
        alert(`Perdiste. Usaste los ${maximosIntentos} intentos. El número secreto es: ${numeroSecreto}`);
        break;
    }
}


