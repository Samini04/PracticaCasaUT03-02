import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';

/**
 * Encabezado Global .
 * * Contiene Logo de mi interfaz y el menú de navegación principal.
 * Implementa el rol "banner" para cumplir con los hitos de accesibilidad.
 * * @returns {JSX.Element} Barra superior de navegación.
 */
export default function Header() {
  return (
    <header 
      role="banner" 
      className="bg-teal-700 shadow-md w-full p-4 text-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Título */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-white flex items-center gap-2 hover:text-teal-100"
          aria-label="Inicio - TerraBloom"
        >
          {/* Nombre de la web */}
          <span>TerraBloom</span>
        </Link>
        
        <Nav />
      </div>
    </header>
  );
}