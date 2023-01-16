// 2.Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. Los 2 valores ingresados no pueden ser iguales, ademas el algoritmo
//  debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, si no lo son el algoritmo debe imprimir el valor de la
//  base multiplicado por 2 y sumarle 10.

let base = parseFloat(prompt('Ingrese el valor del cateto 1'))
let altura = parseFloat(prompt('Ingrese el valor del cateto 2'))
if(base<=0 || altura<=0){
    alert("los valores no pueden ser negativos")
}

else{
    if(base==altura){
        alert("la base no puede ser igual a la altura")
    }
    else{
        if(base<5 && altura<4){
            base=(base*2)+10
            console.log(base)
        }
        else{
            area=(base*altura)/2
            console.log(" ",area)
        }
    }
}