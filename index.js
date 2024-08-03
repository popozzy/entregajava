function identificar() {
    let nombres = [];
    let nombre = prompt ("¿Cómo te llamás?");
    nombres.push(nombre);
    console.log(nombre)
    let decision = confirm ("Hola "+ nombre + ", ¿quéres guardar tus notas?")
        
                if (decision) {
                alert("Excelente") }

                else {
                alert("Lo vas a tener que hacer igual")}
}
identificar ();

function obtenerNotas(materia) {
    let notas = [];
    for (let i = 0; i < 3; i++) {
        let nota = Number(prompt("Ingresa la nota " + (i + 1) + " de " + materia + ":"));
        notas.push(nota);
    }
    console.log("Notas de " + materia + ":", notas);
    return notas;
}

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < 3; i++) {
        suma = suma + notas[i];
    }
    let promedio = suma / 3;
    return promedio;
}

function simulador() {
    let continuar = confirm("¿Deseas ingresar las notas de Historia y Matemática?");
    
    if (continuar) {

        let notasHistoria = obtenerNotas("Historia");

        let notasMatematica = obtenerNotas("Matemática");

        let promedioHistoria = calcularPromedio(notasHistoria);
        let promedioMatematica = calcularPromedio(notasMatematica);
        
        alert("El promedio de Historia es: " + promedioHistoria);
        alert("El promedio de Matemática es: " + promedioMatematica);
        
        console.log("Promedio de Historia: " + promedioHistoria);
        console.log("Promedio de Matemática: " + promedioMatematica);
    } else {
        alert("Inválido.");
    }}

simulador();

function otravez() {
    let volveraempezar = confirm("Desea otro alumno ingresar sus notas?");

    if (volveraempezar) {
        identificar();
        simulador();
    }

    else {
        alert("El proceso ha terminado")
    } }

otravez();