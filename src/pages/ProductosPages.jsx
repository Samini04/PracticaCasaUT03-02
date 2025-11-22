import productos from '../data/productos';
import List from '../components/List';

/**
 * Página del Catálogo de Productos.
 * * Actúa como controlador que obtiene los datos estáticos productos.js
 * y los pasa al componente de presentación List.
 * Muestra un resumen de la cantidad de productos disponibles.
 * * @returns {JSX.Element} Vista completa del listado de productos.
 */
export default function ProductosPage() {
  return (
    <section className="container mx-auto py-8"> 
      <div className="flex justify-between items-center mb-6 px-4">
         <h2 className="text-3xl font-bold text-gray-800">Nuestros Productos</h2>
         <span className="text-gray-500">{productos.length} productos encontrados</span>
      </div>
      <List items={productos} />
    </section>
  );
}