import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productos from '../data/productos';

/**
 * Página de Detalle de Producto.
 * Muestra la interfaz visual estática basada en el mi diseño de interfaz 
 * en Figma.
 */
export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();   

  // 1. Buscar producto
  const producto = productos.find(p => p.id === Number(id));

  if (!producto) {
    return (
      <section className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Producto no encontrado</h2>
        <button onClick={() => navigate(-1)} className="text-teal-600 underline hover:text-teal-800">
          Volver al catálogo
        </button>
      </section>
    );
  }

  return (
    <article className="container mx-auto py-10 px-4 max-w-6xl">
      
      {/* Botón Volver */}
      <button
            onClick={() => navigate(-1)}
            className="mb-6 text-gray-500 hover:text-teal-700 flex items-center gap-2 transition-colors"
      >
         ← Volver a la tienda
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden md:flex gap-8 p-6 md:p-10">
        
        {/* COLUMNA IMAGEN */}
        <div className="md:w-1/2 bg-gray-50 rounded-xl flex items-center justify-center p-8 min-h-[400px]">
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="max-w-full max-h-[400px] object-contain drop-shadow-lg mix-blend-multiply"
          />
        </div>
        
        {/* COLUMNA INFO */}
        <div className="md:w-1/2 flex flex-col justify-start">
          
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">Fresco y Natural</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{producto.nombre}</h1>
          
          {/* PRECIOS */}
          <div className="mb-6">
            <div className="flex items-end gap-3 mb-1">
                <span className="text-4xl font-bold text-gray-900">{producto.precio}€</span>
            </div>
            <div className="flex items-center gap-3">
                {/* Precio tachado estático */}
                <span className="text-red-300 line-through text-lg font-semibold">3.50€</span>
                <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">-20%</span>
            </div>
          </div>
          
          {/* DESCRIPCIÓN */}
          <div className="text-gray-600 mb-8 leading-relaxed text-sm border-b border-gray-100 pb-6">
             <p>{producto.descripcion}</p>
             <p className="mt-2">Origen seleccionado de los mejores cultivos. Calidad garantizada.</p>
          </div>

          {/* SELECTOR CANTIDAD  */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Cantidad</h3>
            <div className="flex gap-3 flex-wrap">
                <button className="px-4 py-2 rounded border border-blue-600 text-blue-600 bg-blue-50 text-sm font-medium">
                    500g
                </button>
                <button className="px-4 py-2 rounded border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 text-sm font-medium">
                    1kgL
                </button>
                <button className="px-4 py-2 rounded border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 text-sm font-medium">
                    A granel
                </button>
            </div>
          </div>

          {/* SELECTOR TAMAÑO */}
          <div className="mb-8">
            <h3 className="font-bold text-gray-900 mb-3">Tamaño</h3>
            <div className="flex gap-3">
                <button className="px-4 py-2 rounded border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 text-sm font-medium">
                    Pequeño
                </button>
                <button className="px-4 py-2 rounded border border-blue-600 text-blue-600 bg-blue-50 text-sm font-medium">
                    Mediano
                </button>
                <button className="px-4 py-2 rounded border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100 text-sm font-medium">
                    Grande
                </button>
            </div>
          </div>

          {/* AÑADIR CANTIDADES  */}
          <div className="flex items-center gap-6 mb-8">
             <span className="font-bold text-gray-900">Unidad</span>
             <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center text-xl hover:bg-gray-100 transition">
                    −
                </button>
                <div className="w-12 h-10 bg-blue-100 text-blue-900 font-bold flex items-center justify-center rounded text-xl">
                    1
                </div>
                <button className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center text-xl hover:bg-gray-100 transition">
                    +
                </button>
             </div>
          </div>

          {/* BOTONES DE ACCIÓN */}
          <div className="flex items-center gap-4 mt-auto">
             
             {/* FOTO DEL ICONO DE ME GUSTA PARA FAVORTIOS */}
             <button aria-label="Favoritos" className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition border border-gray-200">
                <img 
                    src="/imagenes/corazon.png" 
                    alt="Icono Corazón" 
                    width="40"
                />
             </button>

             <button className="flex-1 bg-gray-900 text-white font-medium py-3 px-4 rounded-lg hover:bg-black transition-colors">
                Añadir al carrito
             </button>

             <button className="flex-1 bg-teal-700 text-white font-medium py-3 px-4 rounded-lg hover:bg-teal-800 transition-colors shadow-lg shadow-teal-100">
                Comprar ahora
             </button>
          </div>

        </div>
      </div>
    </article>
  );
}