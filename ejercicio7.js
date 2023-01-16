const numero = parseInt(prompt("Ingrese un numero"))

if (numero<0) {
    console.log("El numero es negativo")
} else {
    if (numero==0) {
        console.log("El numero es cero")
    } else {
        console.log("El numero es positivo")
    }
}