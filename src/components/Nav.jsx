import { NavLink } from 'react-router-dom';

// Añadimos 'hover:text-blue-500' para mejor usabilidad
const activeClass = ({ isActive }) => 
  isActive 
    ? 'text-blue-600 font-semibold' 
    : 'text-gray-700 hover:text-blue-500';

export default function Nav() {
  return (
    <nav aria-label="Menú principal">
      <ul className="flex gap-4 items-center">
      
        <li><NavLink to="/" className={activeClass} end>Inicio</NavLink></li>
    
        <li><NavLink to="/peliculas" className={activeClass}>Películas</NavLink></li>
        <li><NavLink to="/interpretes" className={activeClass}>Intérpretes</NavLink></li>
        <li><NavLink to="/login" className={activeClass}>Login</NavLink></li>
        <li><NavLink to="/admin" className={activeClass}>Admin</NavLink></li>
      </ul>
    </nav>
  );
}