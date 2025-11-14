import React from 'react';
import { useParams, Link } from 'react-router-dom';
import peliculas from '../data/peliculas'; // Importamos los datos

/**
 * Página de Detalle de Película
 * Muestra la información detallada de una película específica.
 */
export default function DetailPage() {
  // 1. Obtenemos el 'id' de la URL (ej. /pelicula/3)
  const { id } = useParams();
  
  // 2. Buscamos la película en nuestros datos
  // Usamos '==' en lugar de '===' porque el ID de la URL es un string
  // y el ID en nuestros datos es un número.
  const pelicula = peliculas.find(p => p.id == id);

  // 3. Si no encontramos la película, mostramos un mensaje
  if (!pelicula) {
    return (
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Película no encontrada</h2>
        <Link to="/peliculas" className="text-blue-600">
          Volver al listado
        </Link>
      </section>
    );
  }

  // 4. Si la encontramos, mostramos sus detalles
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
      <div className="md:flex">
        {/* Póster */}
        <div className="md:flex-shrink-0">
          <img 
            src={pelicula.poster} 
            alt={`Cartel de ${pelicula.nombre}`} 
            className="w-full h-96 object-cover md:w-64"
          />
        </div>
        
        {/* Información */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2">{pelicula.nombre} ({pelicula.year})</h1>
          
          <div className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Rating:</span> {pelicula.rating} / 10
          </div>
          
          <h2 className="text-xl font-semibold mb-2">Sinopsis</h2>
          <p className="text-gray-600 mb-6">{pelicula.sinopsis}</p>
          
          <Link 
            to="/peliculas" 
            className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            &larr; Volver al listado
          </Link>
        </div>
      </div>
    </article>
  );
}