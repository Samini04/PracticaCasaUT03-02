import peliculas from '../data/peliculas';
import List from '../components/List';

/**
 * Simplemente le paso el array de peliculas al componente List,
 * que mostrará la tarjeta por defecto para cada película.
 */
export default function PeliculasPage() {
  return (
    
    <section> 
      <h2 className="text-2xl font-semibold mb-4 text-center">Listado de películas</h2>
      <List items={peliculas} />
    </section>
  );
}