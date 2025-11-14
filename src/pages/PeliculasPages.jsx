import peliculas from '../data/peliculas';
import List from '../components/List';

/**
 * Página del Listado de Películas
 * Muestra la cuadrícula de películas disponibles.
 */
export default function PeliculasPage() {
  return (
    // Quitamos el max-w-7xl y mx-auto porque ya lo tiene el Contenedor
    <section> 
      <h2 className="text-2xl font-semibold mb-4 text-center">Listado de películas</h2>
      <List items={peliculas} />
    </section>
  );
}