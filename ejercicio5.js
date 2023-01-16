const nota = parseInt( prompt("Ingrese un numero"))

if (nota<1|| nota>20){
    alert("Ingrese un valor valido")
}
else{
    if(nota>=1 && nota<=9){
        
        console.log("su nota es: E")
    }
    else{
        if(nota>=10 && nota<=12){
        
            console.log("su nota es: D")
        }
        else{
            if(nota>=13 && nota<=15){
        
                console.log("su nota es: C")
            }
            else{
                if(nota>=16 && nota<=18){
        
                    console.log("su nota es: B")
                }
                else{
                    if(nota>=19 && nota<=20){
        
                        console.log("su nota es:A")
                    }
                } 
            }
        }
    }

}