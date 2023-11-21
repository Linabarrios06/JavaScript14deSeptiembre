//La funcion prompt cuyo valor por defecto es un tipo string, capture los nombres y la edad de la persona
var nombres=prompt("Ingresa tu nombre");

nacimiento = parseInt(prompt("Ingresa tu año de Nacimiento"))
const fecha = new Date();
const fechaActual = fecha.getFullYear();
let edad = fechaActual - nacimiento; //Aqui se resta la fecha actual con el año de nacimiento que dijite el usuario

//Para capturar un valor entero es necesario cambiarlo por eso se recomienda utilizar parseInt

//var Edad=parseInt(prompt("Ingresa la edad"));

//La funcion para mostrar en la pagina es document.write y concatenandolo con las variables

if(edad<=8){  //    Ponemos la condicion de si la edad es menor o igual a 8 lo va a saludar de (niño)
    document.write("Bienvenido (a)  "+nombres+" usted tiene "+edad+" años de edad y es un niño (a)")
}

else if(edad<=17){ //Ponemos la condicion de si es menor o igual a 17 lo va a salurdar de joven
    document.write("Bienvenido (a) joven "+nombres+" usted tiene "+edad+" años de edad y es menor de edad")
}

else{ // Y aqui que si no cumple con las 2 anteriores lo va a saludar con señor(a)
    document.write("Bienvenido señor(a) "+nombres+" usted tiene "+edad+" años de edad y es mayor de edad")
}
