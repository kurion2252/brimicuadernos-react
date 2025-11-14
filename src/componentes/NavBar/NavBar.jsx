import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Brimi Cuadernos</Link>

      <ul className="menu">
        <li><Link to="/categoria/Agenda-adultos">Agendas para Adultos</Link></li>
        <li><Link to="/categoria/Agenda-infantil">Agendas Infantiles</Link></li>
        <li><Link to="/categoria/escolar">Escolar</Link></li>
      </ul>

      {/* ← Icono del carrito */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
