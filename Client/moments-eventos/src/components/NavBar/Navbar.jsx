import React from "react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const openDropdown = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <a className="navbar-brand" href="/">Logo</a>
      <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" onClick={openDropdown} aria-haspopup="true" aria-expanded={open ? "true" : "false"} >
              Eventos
            </a>
            <div className={`dropdown-menu ${open ? 'show' : ''}`} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/bodas">Bodas</a>
              <a className="dropdown-item" href="/fiestas de xv">Fiestas de XV</a>
              <a className="dropdown-item" href="/fiestas corporativas">Fiestas Corporativas</a>
              <a className="dropdown-item" href="/fiestas de egresados">Fiestas de Egresados</a>
              <a className="dropdown-item" href="/bautismos">Baustimos</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/catering">Catering</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/decoracion">Decoración</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="sobre nosotros">Sobre Nosotros</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



