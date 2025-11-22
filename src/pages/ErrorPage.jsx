
import React from 'react';

/**
 * Página de Error 404.
 * * Se muestra cuando el usuario intenta acceder a una ruta no definida.
 * Proporciona feedback claro al usuario sobre el estado de la navegación.
 * * @returns {JSX.Element} Mensaje de página no encontrada.
 */
export default function ErrorPage() {
return (
<section className="max-w-7xl mx-auto p-4 text-center">
    <h2 className="text-2xl font-semibold mb-4">404 - Página no encontrada</h2>
    <p className="text-lg">Lo sentimos, la página que buscas no existe.</p>
    </section>
);
}