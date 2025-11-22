// AdminLayout.jsx

import { Outlet } from 'react-router-dom';

/**
 * Layout Específico para Administración.
 * Define la estructura visual separada para el área de gestión.
 * Utiliza <Outlet /> para renderizar las sub-rutas administrativas.
 * @returns {JSX.Element} Estructura del panel de admin.
 */
export default function AdminLayout() {
return (
<div className="max-w-7xl mx-auto p-4">
<h2 className="text-xl font-semibold">Panel de administración</h2>
<Outlet />
</div>
);
}