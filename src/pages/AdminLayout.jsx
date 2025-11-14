// AdminLayout.jsx

import { Outlet } from 'react-router-dom';


export default function AdminLayout() {
return (
<div className="max-w-7xl mx-auto p-4">
<h2 className="text-xl font-semibold">Panel de administración</h2>
<Outlet />
</div>
);
}