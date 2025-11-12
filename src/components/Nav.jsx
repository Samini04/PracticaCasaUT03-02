import React from "react";
import { NavLink } from "react-router-dom";
const activeClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

export default function Nav() {
    return (
        <nav className="w-full bg-(--colorprimary) p-4">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <ul className="flex gap-4">
                    <li><NavLink to="/" className={activeClass}>Inicio</NavLink></li>
                    <li><NavLink to="/" className={activeClass}>Inicio</NavLink></li>
                </ul>