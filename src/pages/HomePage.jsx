import React from 'react';
import { Link } from 'react-router-dom';


/**
 * Página de Inicio.
 * Ofrece accesos directos a las secciones principales (Productos, Ofertas).
 * * @returns {JSX.Element} Vista de bienvenida.
 */
export default function HomePage() {
  return (
    <section className="text-center py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-teal-900 mb-6">Frescura Natural en tu Hogar</h1>
        <p className="text-xl text-gray-600 mb-10">
          Descubre nuestra selección de frutas y verduras de temporada, directamente del campo a tu mesa.
        </p>
        <div className="flex justify-center gap-4">
            <Link 
                to="/productos" 
                className="bg-teal-700 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-teal-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                Ver Productos
            </Link>
            
        </div>
      </div>
    </section>
  );
}