const numero1 = parseInt(prompt('Ingrese el numero 1'))
const numero2 = parseInt(prompt('Ingrese el numero 2'))

if(numero1<=0 || numero2<=0){
    alert("ingrese un valor valido")
}
else{
    if(numero1>numero2){
        if(numero1%numero2==0){
            console.log("Los numeros son multiplos")
        }
        else{
            console.log("Los numeros no son multiplos")
        }
    }
    else{
        if(numero2%numero1==0){
            console.log("Los numeros son multiplos")
        }
        else{
            console.log("Los numeros no son multiplos")
        }
    }
}