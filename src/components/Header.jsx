import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';


export default function Header() {
  return (
    <header 
      role="banner" 
      className="bg-white shadow-md w-full p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Título/Logo enlazado a la raíz */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-blue-700 hover:text-blue-900"
          aria-label="Inicio - Mi Videoclub"
        >
          Peliculas
        </Link>
        
        {/* Componente de Navegación */}
        <Nav />
      </div>
    </header>
  );
}