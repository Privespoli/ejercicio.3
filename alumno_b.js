// Melina

// Arreglo de canciones
const canciones = ["Code Night", "Async Love", "The Bug Blues", "Merge Conflict"];

// canciones (sin ciclos)
document.getElementById("tema1").innerText = canciones[0];
document.getElementById("tema2").innerText = canciones[1];
document.getElementById("tema3").innerText = canciones[2];

// color del estado 
const estadoGira = document.getElementById("enGira");

const colores = {
  "true": "#2ed573",
  "false": "#ff4757"
};

estadoGira.style.color = colores[estadoGira.innerText];