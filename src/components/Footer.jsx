import React from 'react';

export default function Footer() {
  return (
    <footer 
      role="contentinfo" 
      className="bg-gray-800 text-white text-center p-4 w-full mt-auto"
    >
      <div className="container mx-auto">
        <p>{new Date().getFullYear()} Mis Peliculas. Todos los derechos reservados.</p>
        <p>Actividad de Desarrollo de Interfaces - AbdelMoghit Samini</p>
      </div>
    </footer>
  );
}