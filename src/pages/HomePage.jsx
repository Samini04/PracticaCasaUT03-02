import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Página de Inicio (Bienvenida)
 * Muestra un mensaje de bienvenida y un enlace al listado.
 */
export default function HomePage() {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold mb-4">¡Bienvenido a Mis Peliculas!</h2>
      <p className="text-lg mb-6">
        Explora nuestro catálogo completo de películas.
      </p>
      <Link 
        to="/peliculas" 
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Ver catálogo
      </Link>
    </section>
  );
}