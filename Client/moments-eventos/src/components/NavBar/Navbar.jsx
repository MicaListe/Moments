import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.png"
import avatar2 from "../../assets/avatar2.png"
import "../NavBar/dropdown.css"

function Navbar() {
  const [open, setOpen] = useState(false);

  const openDropdown = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black'}} >
      <a href="/"><img className="navbar-brand" src={logo} style={{ width: '90px', marginLeft:'30px'}} alt="Logo"/></a>
      <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarSupportedContent"  style={{marginLeft:"40rem"}}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown" style={{padding: '0 10px'}}>
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" onClick={openDropdown} aria-haspopup="true" aria-expanded={open ? "true" : "false"} style={{color:'white'}} >
              Eventos
            </a>
            <div className={`dropdown-menu ${open ? 'show' : ''}`} aria-labelledby="navbarDropdown" style={{backgroundColor: 'black'}}>
              <a className="dropdown-item" href="/bodas" style={{color:'white'}}>Bodas</a>
              <a className="dropdown-item" href="/fiestasXv" style={{color:'white'}}>Fiestas de XV</a>
              <a className="dropdown-item" href="/FiestasCorp" style={{color:'white'}}>Fiestas Corporativas</a>
              <a className="dropdown-item" href="/fiestasEgresados" style={{color:'white'}}>Fiestas de Egresados</a>
              <a className="dropdown-item" href="/bautismos" style={{color:'white'}}>Baustimos</a>
            </div>
          </li>
          <li className="nav-item" style={{padding: '0 10px'}}>
            <a className="nav-link disabled" href="/catering" style={{color:'white'}}>Catering</a>
          </li>
          <li className="nav-item" style={{padding: '0 10px'}}>
            <a className="nav-link disabled" href="/decoracion" style={{color:'white'}}>Decoración</a>
          </li>
          <li className="nav-item" style={{padding: '0 10px'}}>
            <a className="nav-link disabled" href="/sobre nosotros" style={{color:'white'}}>Sobre Nosotros</a>
          </li>
        </ul>
        
      </div>
      <img src={avatar2} style={{width:'40px', marginRight:"70px"}}/>
    </nav>
  );
}

export default Navbar;





