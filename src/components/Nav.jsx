import { useState } from "react";
import { NavLink } from 'react-router-dom';

/**
 * Componente Nav: menú de navegación responsive.
 *
 * - Muestra un botón tipo "hamburger" en móvil para abrir/cerrar el menú.
 * - Usa NavLink para aplicar estilos cuando la ruta está activa.
 * - Al hacer click en un enlace en móvil, cierra el menú (setOpen(false)).
 *
 * @returns {JSX.Element}
 */
const activeClass = ({ isActive }) => 
  isActive 
    ? 'text-blue-600 font-semibold' // estilo cuando la ruta es activa
    : 'text-gray-700 hover:text-blue-500'; // estilo por defecto

export default function Nav() {
  // // Controla si el menú en móvil está abierto o cerrado
  const [open, setOpen] = useState(false);
  const menuId = "main-navigation-menu";

  return (
    <>
      {/* Botón visible solo en pantallas pequeñas (md:hidden).
          aria-expanded indica si el menú está abierto y aria-controls referencia el id del nav */}
      <button
        aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
        className="text-gray-700 text-2xl p-2 md:hidden focus:outline-none focus:ring"
      >
        {/* Se cambia el icono dependiendo del estado */}
        {open ? '✕' : '☰'}
      </button>

      {/*  Menú de Navegación */}
      <nav 
        aria-label="Menú principal"
        id={menuId}
      
        className={`${open ? 'block' : 'hidden'} md:flex`}
      >
        {/*
          En móvil: la lista es vertical por defecto si la pones en 'block'.
          En desktop: usamos flex y gap para la disposición horizontal.
        */}
        <ul className="flex flex-col md:flex-row gap-4 items-center">
        
          {/* Los NavLink llaman a setOpen(false) para cerrar el menú en móvil */}
          
          <li>
            <NavLink to="/" className={activeClass} end onClick={() => setOpen(false)}>
              Inicio
            </NavLink>
          </li>
      
          <li>
            <NavLink to="/peliculas" className={activeClass} onClick={() => setOpen(false)}>
              Películas
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/interpretes" className={activeClass} onClick={() => setOpen(false)}>
              Intérpretes
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/admin" className={activeClass} onClick={() => setOpen(false)}>
              Admin
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </>
  );
}