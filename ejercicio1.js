// 1.Desarrolle un algoritmo que permita leer 3 números enteros. El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
// Ademas ninguno de los 3 numeros ingresados pueden ser iguales. En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.

const numero1 = parseInt( prompt("Ingrese el numero el primer numero"))
const numero2 = parseInt( prompt("Ingrese el numero el segundo numero"))

if(numero1==numero2) {
    alert("ingrese numeros diferentes")
}
else{
    numero3 = parseInt( prompt("Ingrese el numero el tercer numero"))
    if(numero1==numero3||numero2==numero3 ) {
        alert("ingrese numeros diferentes")
    }

    else{
        if(numero1>numero2 && numero1>numero3) {
            if(numero2>numero3) {
                console.log("El numero mayor es: ", numero1)
                console.log("El segundo mayor es: ", numero2)
                console.log("El menor es: ", numero3)
            }
            else {
                console.log("El numero mayor es: ", numero1)
                console.log("El segundo mayor es: ", numero3)
                console.log("El menor es: ", numero2)
            }
        }
        else {
            if(numero2>numero3){
                if(numero1>numero3) {
                    console.log("El numero mayor es: ", numero2)
                    console.log("El segundo mayor es: ", numero1)
                    console.log("El menor es: ", numero3)
                }
                else{
                    console.log("El numero mayor es: ", numero2)
                    console.log("El segundo mayor es: ", numero3)
                    console.log("El menor es: ", numero1)
                }
            
            }
            else{
                if(numero1>numero2){
                    console.log("El numero mayor es: ", numero3)
                    console.log("El segundo mayor es: ", numero1)
                    console.log("El menor es: ", numero2)
                }
                else{
                    console.log("El numero mayor es: ", numero3)
                    console.log("El segundo mayor es: ", numero2)
                    console.log("El menor es: ", numero1)
                }
            }
        }
    }
}
