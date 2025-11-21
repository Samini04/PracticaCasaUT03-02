import { Link } from 'react-router-dom';

/**
 * Para List
 *
 * Este grid sirve para mostrar cualquier tipo de elementos (películas, intérpretes, etc.).
 *
 * - Si el padre envía `renderItem`, dejo que él decida cómo dibujar cada item.
 * - Si no envía nada, uso mi tarjeta estándar de película.
 *
 * Así el componente es flexible y no repito código.
 */
export default function List({ items = [], renderItem }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4" role="list">
      {items.map(item => (
        <li key={item.id}>
            {/* Si existe renderItem lo uso, si no, pinto la tarjeta por defecto */}
          {renderItem ? renderItem(item) : (
            <article className="bg-white rounded shadow hover:shadow-md transition p-3">
              
              <img 
                src={item.cartelera} 
                alt={`Cartel ${item.nombre}`} 
                className="w-full h-64 object-cover rounded"
              />
              
              <h3 className="mt-2 font-semibold">{item.nombre}</h3>
              
            
              <Link to={`/pelicula/${item.id}`} className="inline-block mt-2 text-blue-600">
                Ver detalle
              </Link>
            </article>
          )}
        </li>
      ))}
    </ul>
  );
}