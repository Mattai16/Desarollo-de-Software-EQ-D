import React from 'react';

function ProgramPage() {
  return (
    <div>
      <h1>PROGRAMAS</h1>
      <p>LISTA DE PROGRAMAS "RADIO PANDA"</p>
      <button>Agregar</button>
    </div>
   );
}

// Creamos un objeto con cada una de las opciones del menú
var menu = {
  opcion1: "Inicio",
  opcion2: "Acerca de nosotros",
  opcion3: "Productos",
  opcion4: "Contacto"
};

// Recorremos el objeto para mostrar cada opción del menú
for (var opcion in menu) {
  document.write("<a href='#'>" + menu[opcion] + "</a> ");
}

export default ProgramPage;
