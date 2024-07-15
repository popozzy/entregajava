var pregunta = confirm("¿Querés ver tu promedio?")

if (pregunta == true) {
    let nota1 = Number(prompt("Ingrese la nota de su primer evaluación"))

let nota2 = Number(prompt("Ingrese la nota de su segunda evaluación"))

let nota3 = Number(prompt("Ingrese la nota de su tercer evaluación"));

let promedio = ((nota1 + nota2 + nota3) /3);

if (promedio < 7 >= 1) {
    alert("¡Usted ha desaprobado!");
}

else if (promedio >= 7 <= 10) {
    alert("¡Usted ha aprobado!");
}

let array = [promedio];
for(let i=1;i<=10;i++){
    array.push(i);
}

console.log(array);
}

else if (pregunta != true) {
    alert("Usted se lo pierde ah")
}

