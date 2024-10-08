document.addEventListener("DOMContentLoaded", function() {
    Swal.fire({
        title: "¡Bienvenido!",
        text: "Aquí podrás ingresar tus notas",
        imageUrl: "imagenes/logo.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    });
});

document.getElementById("guardarNombre").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    document.getElementById("saludo").innerText = "Hola " + nombre + ", ¿querés guardar tus notas?";
    document.getElementById("identificar").style.display = "none";
    document.getElementById("decision").style.display = "block";
});

document.getElementById("guardarNotas").addEventListener("click", function() {
    document.getElementById("decision").style.display = "none";
    document.getElementById("notas").style.display = "block";
});

document.getElementById("calcularPromedios").addEventListener("click", function() {
    let notasHistoria = [
        Number(document.getElementById("notaHistoria1").value),
        Number(document.getElementById("notaHistoria2").value),
        Number(document.getElementById("notaHistoria3").value)
    ];

    let notasMatematica = [
        Number(document.getElementById("notaMatematica1").value),
        Number(document.getElementById("notaMatematica2").value),
        Number(document.getElementById("notaMatematica3").value)
    ];

    let promedioHistoria = calcularPromedio(notasHistoria);
    let promedioMatematica = calcularPromedio(notasMatematica);

    document.getElementById("promedioHistoria").innerText = "El promedio de Historia es: " + promedioHistoria;
    document.getElementById("promedioMatematica").innerText = "El promedio de Matemática es: " + promedioMatematica;

    document.getElementById("notas").style.display = "none";
    document.getElementById("resultados").style.display = "block";
    document.getElementById("otraVez").style.display = "block";

    let nombre = document.getElementById("nombre").value;
    let nuevoAlumno = {
        nombre: nombre,
        historia: notasHistoria,
        matematica: notasMatematica,
        promedioHistoria: promedioHistoria,
        promedioMatematica: promedioMatematica
    };

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoAlumno)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Datos guardados:', data);
        Swal.fire('¡Notas guardadas!', 'Las notas se han guardado correctamente.', 'success');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

document.getElementById("reiniciar").addEventListener("click", function() {
    document.getElementById("nombre").value = "";
    document.getElementById("notaHistoria1").value = "";
    document.getElementById("notaHistoria2").value = "";
    document.getElementById("notaHistoria3").value = "";
    document.getElementById("notaMatematica1").value = "";
    document.getElementById("notaMatematica2").value = "";
    document.getElementById("notaMatematica3").value = "";

    document.getElementById("identificar").style.display = "block";
    document.getElementById("decision").style.display = "none";
    document.getElementById("notas").style.display = "none";
    document.getElementById("resultados").style.display = "none";
    document.getElementById("otraVez").style.display = "none";
});

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}
