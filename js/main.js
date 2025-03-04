//FUNCION QUE REALIZA UNA SUMA

function suma(){
    let n1=0;
    let n2=0;
    let suma=0;
    alert("ESTE PROGRAMA REALIZA UNA SUMA ENTRE 2 NUMEROS INGRESADOS POR EL USUARIO")

    n1=parseInt(prompt("Ingrese el primer valor a sumar"))
    n2=parseInt(prompt("Ingrese el segundo valor a sumar"))

    suma=n1+n2

    alert("El resultado de la suma es: "+suma)
}

function opBasicas(){
    let n1=0;   let r=0;    
    let n2=0;   let m=0;
    let s=0;    let d=0;

    alert("ESTE PROGRAMA REALIZA LA SUMA, RESTA, MULTIPLICACION Y DIVISION DE 2 NUMEROS INGRESADOS POR EL USUARIO")

    n1=parseInt(prompt("Ingrese el primer valor"))
    n2=parseInt(prompt("Ingrese el segundo valor"))

    s=n1+n2
    r=n1-n2
    m=n1*n2
    d=n1/n2

    alert("El resultado de la suma es: "+s)
    alert("El resultado de la resta es: "+r)
    alert("El resultado de la multiplicación es: "+m)
    alert("El resultado de la division es: "+d)
}
function cuadrado(){
    let n1=0
    let c=0

    alert("ESTE PROGRAMA REALIZA EL CUADRADO DE 1 NUMERO INGRESDO POR EL USUARIO")

    n1=parseInt(prompt("Ingrese el valor a sacar el cuadrado"))

    c=n1*n1

    alert("El resultado del cuadrado es: "+c)
}   
function conUnidades(){
    let m=0
    let cm=0
    let p=0

    alert("ESTE PROGRAMA MUESTRA LA CONVERSION DE CM Y PULGADAS DE UN VALOR EN METROS INGRESADOS POR EL USUARIO")

    m=parseInt(prompt("Ingrese el valor del metro"))

    cm=m*100
    p=m*39.37

    alert("La conversion a cm de " + m + " metros es de: "+cm+" cm")
    alert("La conversion en pulagadas de " + m + " metros es de: "+p+" pulgadas")

}
function areaTriangulo(){
    alert("ESTE PROGRAMA MUESTRA EL AREA DE UN TRIANGULO ATRAVEZ D LA BASE Y LA ALTURA INGRESADOS POR EL USUARIO")

    let a=0
    let b=0
    let al=0

    b=parseInt(prompt("Ingrese el valor de la base del triangulo"))
    al=parseInt(prompt("Ingrese el valor de la altura del triangulo"))

    a=(b*al)/2

    alert("El area del triangulo es de: "+a)
}
function invCapital(){
    alert("ESTE PROGRAMA MUESTRA LA GANANCIA DE UNA INVERSION DE CAPITAL DE UN USUARIO DESPUES DE CIERTO TIEMPO DE AÑOS QUE EL USUARIO DESEE INVERTIR, POR CADA MES SE GANA UN 1.7% DEL CAPITAL INVERTIDO")

    let c=0
    let a=0
    let g=0
    let co=0

    c=parseInt(prompt("¿Cuanto capital desea invertir?"))
    a=parseInt(prompt("¿Cuantos años desea invertir?"))

    g=(c*0.017)*12*a

    alert("Su ganancia es de: "+g+" $")

    co=g+c

    alert("Su capital total en "+a+" años es de: "+co+" $")
}
function numMayor(){
    alert("ESTE PROGRAMA MUESTRA EL NUMERO MAYOR ENTRE 2 NUMEROS INGRESADOS POR EL USUARIO")

    let n1=0
    let n2=0
    let nm=0

    n1=parseInt(prompt("Ingrese el primer numero"))
    n2=parseInt(prompt("Ingrese el segundo numero"))

    if(n1>n2){
        alert("El numero mayor es: "+n1)
    }else if(n1<n2){
        alert("El numero mayor es: "+n2)
    }else{
        alert("Los numeros son iguales")
    }
}
function numMenor(){
    alert("ESTE PROGRAMA MUESTRA EL NUMERO MENOR DE 3 NUMEROS INGRESADOS POR EL USUARIO")

    let n1=0
    let n2=0
    let n3=0
    let nm=0

    n1=parseInt(prompt("Ingrese el primero numero"))
    n2=parseInt(prompt("Ingrese el segundo numero"))
    n3=parseInt(prompt("Ingrese el tercer valor"))

    if(n1==n2 && n2==n3){
        alert("Los numeros son iguales") 
    }else if(n1<n2&&n1<n3){
        alert(n1+" es el numero menor")
    }else if(n2<n1&&n2<n3){
        alert(n2+" es el numero menor")
    }else{
        alert(n3+" es el numero menor")
    }
      
}
function parImpar(){
    alert("ESTE PROGRAMA MUESTRA SI UN NUMERO ES PAR O IMPAR DEPENDIENDO EL NUMERO INGRESADO POR EL USUARIO")

    let n=0

    n=parseInt(prompt("Ingrese el numero"))

    if(n%2==0){
        alert("El numero es par")
    }else{
        alert("El numero es impar")
    }
}
function promedio(){
    alert("ESTE PROGRAMA MUESTRA EL PROMEDIO DE UN ESTUDIANTE QUE TIENE N NOTAS EN UNA MATERIA ")

   let materia=""
   let estudiante=""
   let nNotas=0
   let calificacion=0
   let sumaNotas=0
   let promedio=0
   let iteracion=0

    materia=prompt("Ingrese la materia que imparte")
    estudiante=prompt("Ingrese el nombre del estudiante")
    nNotas=parseInt(prompt("Ingrese el numero de notas"))

    while(iteracion<nNotas){

        calificacion=parseFloat(prompt("Ingrese la calificacion"))
        sumaNotas=sumaNotas+calificacion 
        iteracion=iteracion+1
    }
    promedio=sumaNotas/nNotas

    if(promedio>=3){
        alert("El estudiante "+estudiante+" aprobo la materia de "+materia+" con un promedio de: "+promedio)
    }else{
        alert("El estudiante "+estudiante+" reprobo la materia de "+materia+" con un promedio de: "+promedio)
    }



}
function fruteria(){
    alert("ESTE PROGRAMA MUESTRA EL TOTAL A PAGAR DE LA COMPRA DE KILOS DE MANZANA Y DEPENDIENDO CUANTOS KILOS SE COMPREN SE APLICAN CIERTOS PORCENTAJES(EL KILO DE MANZANA ES DE 4500, SI SE COMPRA ENTRE 0-2 KILOS HAY 0% DE DESCUENTO,3-5 10% DE DESCUENTO,6-10 15% DE DESCUENTO, 10 O MAS 20% DE DESCUENTO")

    let k=0
    let v=0

    k=parseInt(prompt("Ingrese el numero de kilos de manzanas compradas"))

    v=k*4500

    if(k<=2){
        alert("El valor a pagar es de: "+v+"$")
    }else if(k<=5){
        v=k*4500-(k*4500*0.10)
        alert("El total a pagar es de: "+v+"$")
    }else if(k<=10){
        v=k*4500-(k*4500*0.15)
        alert("El valor a pagar es de: "+v+"$")
    }else{
        v=k*4500-(k*4500*0.20)
        alert("El total a pagar es de: "+v+"$")
    }
}
function horExtras(){
    alert("ESTE PROGRAMA MUESTRA LA GANANCIA SEMANAL DE UN OBRERO(SE LE PAGA 10000 POR HORA, TRABAJA 40 HORAS POR SEMANA Y SI TRABAJA MAS DE 40 HORAS LA HORA EXTRA LE VALE 20000)")

    let h=0
    let t=0

    h=parseInt(prompt("Ingrese el valor de horas trabajadas en la semana"))

    if(h<=40){
        t=h*10000
        alert("El total a pagar de la semana es de: "+t+"$")
    }else{
        t=(h-40)*20000+400000
        alert("El total a pagar de la semana es de :"+t+"$")
    }
}
function sumaNumerosHasta0(){

    alert("ESTE PROGRAMA SUMA LOS NUMEROS INGREADOS POR EL USUARIO HASTA QUE SE INGRESE EL NUMERO CERO")

    let n=1
    let s=0

    

    while(n!=0){
        
        n=parseInt(prompt("Ingrese los numeros a sumar"))
        s=s+n
    }
    alert("El resultado de la suma es: "+s)
}
function impDe1a10(){
    alert("ESTE ALGORITMO MUESTRA EN PANTALLA LOS NUMEROS DEL 1 HASTA EL 10")
    let n=0
    while(n<10){
        n=n+1
            alert(n)
        
    }
}
function impDe100a0(){
    alert("ESTE PROGRAMA MUESTRA LOS NUMEROS EN PANTALLA DE 100 A 0")

  for(let i=100;i>=0;i=i-10){
    alert(i)
  }
}
function tablaDeMultiplicar() {

    alert("ESTE PROGRAMA MUESTRA LA TABAL DE MULTIPLICAR HASTA 10 DEPENDIENDO EL NUMERO QUE EL USUARIO INGRESE")
    let m = 0
    let n = 0
    let r = 0
    
    n = parseInt(prompt("Ingrese el numero que deseas multiplicar"))
    
    while (m < 10) {
        m = m + 1
        r = m * n
        
        alert(n+"x"+m+"="+r)
    }    
}
function cajeroElectronico() {
    alert("ESTE PROGRAMA MUESTRA LA SIMULACION DE UN CAJERO ELECTRONICO, SE INICIA CON 1000000")

    let c = 0
    let r = 0
    c=parseInt(prompt("¿Cuanto es tu saldo inicial?"))


    while (c > 0) {
        r=parseInt(prompt("¿Cuanto deseas retirar?"))
        if (r > c) {
            alert("No tiene saldo suficiente, tu saldo es de "+c)
        } else{
            c=c-r
            alert("Su saldo es de: "+c+"$")
        }
    } 
    alert("Ya retiro todo su dinero")
} function numHasta1000() {
    alert("ESTE PROGRAMA MUESTRA EN PANTALLA LOS NUMEROS DE 1 HASTA 10000")

   for(let i=0;i<=1000;i+=50){
    console.log(i)
   }
}