
import React from 'react';

/**
 * Página de error 404 simple.
 *
 * Mostrar esto cuando la ruta no exista.
 */
export default function ErrorPage() {
return (
<section className="max-w-7xl mx-auto p-4 text-center">
    <h2 className="text-2xl font-semibold mb-4">404 - Página no encontrada</h2>
    <p className="text-lg">Lo sentimos, la página que buscas no existe.</p>
    </section>
);
}