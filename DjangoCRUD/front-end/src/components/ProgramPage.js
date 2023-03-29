import React from 'react';

function ProgramPage() {
  return (
    <div>
      <h1>Programa</h1>
      <p>Esta Pagina Mostrara el Programa</p>
      <button>Programa</button>
    </div>
  );
}

// Creamos un array con las opciones del menú
var menu = ["Inicio", "Productos", "Servicios", "Contacto"];

// Creamos una función para mostrar el menú en pantalla
function mostrarMenu() {
  for (var i = 0; i < menu.length; i++) {
    console.log((i + 1) + ". " + menu[i]);
  }
}

// Llamamos a la función mostrarMenu() para mostrar el menú en pantalla
mostrarMenu();

export default ProgramPage;
