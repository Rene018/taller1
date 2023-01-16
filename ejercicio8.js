let numero1 = parseInt(prompt("Ingrese un numero que este entre 1 y 10"))

if(numero1<1 || numero1>10){
    alert("Ingrese un numero valido")
}
else{
    let numero2 = parseInt(prompt("Ingrese un numero que este entre 1 y 10"))

    if(numero2<1 || numero2>10){
        alert("Ingrese un numero valido")
    }
    else{
        let numero3 = parseInt(prompt("Ingrese un numero que este entre 1 y 10"))

        if(numero3<1 || numero3>10){
            alert("Ingrese un numero valido")
        }
        else{
             let promedio = (numero1+numero2+numero3)/3
            (promedio > 5)? console.log("Promedio: " + promedio +". True") : console.log("Promedio: " + promedio +". False")
        }
    }
}