import React from 'react';
import { useParams, Link } from 'react-router-dom';
import peliculas from '../data/peliculas';


/**
 * Página de detalle de una película.
 *
 * - Lee el parámetro "id" de la URL con useParams.
 * - Busca la película en el array "peliculas".
 * - Si no existe muestra un mensaje de "no encontrada" con enlace de vuelta.
 * - Si existe, muestra cartel, titulo etc.
 */
export default function DetailPage() {

  const { id } = useParams();
  
  // Buscar por id
  const pelicula = peliculas.find(p => p.id == id);

  // Sino encuentra la película
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

  // Si encuentra la película, renderiza detalle enriquecido
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
      <div className="md:flex">
        
    
        <div className="md:flex-shrink-0">
          <img 
          
            src={pelicula.cartelera} 
            alt={`Cartel de ${pelicula.nombre}`} 
            className="w-full h-96 object-cover md:w-64"
          />
        </div>
        
      
        <div className="p-8">
         
          <h1 className="text-3xl font-bold mb-2">
            {pelicula.nombre}
          </h1>
          
          <div className="text-lg text-gray-700 mb-4">
        
            <span className="font-semibold">Puntuación:</span> {pelicula.nota} / 10
          </div>
          
          <h2 className="text-xl font-semibold mb-2">Detalles</h2>
        
          <p className="text-gray-600 mb-6">{pelicula.resumen}</p>
          
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