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
      <a href="/">
        <img className="navbar-brand" src={logo} style={{ width: '90px', marginLeft:'30px'}} alt="Logo"/>
      </a>
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
              <a className="dropdown-item" href="/FiestasEgre" style={{color:'white'}}>Fiestas de Egresados</a>
              <a className="dropdown-item" href="/bautismos" style={{color:'white'}}>Baustimos</a>
            </div>
          </li>
          <li className="nav-item" style={{padding: '0 10px'}}>
            <a className="" href="/catering" style={{color:'white'}}>Catering</a>
          </li>
          <li className="nav-item" style={{padding: '0 10px'}}>
            <a className="nav-link disabled" href="/decoracion" style={{color:'white'}}>Decoración</a>
          </li>
          <li className="nav-item" style={{padding: '0 10px'}}>
            <a className="nav-link disabled" href="/sobre nosotros" style={{color:'white'}}>Sobre Nosotros</a>
          </li>
        </ul>
        
      </div>
      <img className="avatar-image" src={avatar2} style={{width:'30px'}}/>
      <button className="navbar-toggle" onClick={openDropdown} aria-label="Toggle navigation">
        <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: "white"}}>
          <path fillRule="evenodd" clipRule="evenodd" d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z" fill="currentColor"/>
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;





