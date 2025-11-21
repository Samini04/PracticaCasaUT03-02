import React from 'react';


/**
 * Footer global.
 *
 * role="contentinfo" marca el pie de página para tecnologías asistivas.
 * mt-auto asegura que si el contenido principal es corto, el footer quede abajo.
 *
 */
export default function Footer() {
  return (
    <footer 
      role="contentinfo" 
      className="bg-gray-800 text-white text-center p-4 w-full mt-auto"
    >
      <div className="container mx-auto">
        <p>Mis Peliculas. AbdelMoghit Samini</p>
      </div>
    </footer>
  );
}