import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/logo.png"
import avatar2 from "../../assets/avatar2.png"
import "../NavBar/dropdown.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [logueado, setLogueado] = useState(false)
  const [isOpenDropdownImage, setisOpenDropdownImage] = useState(false)
  const navigate = useNavigate()

  const openDropdown = () => {
    setOpen(!open);
  };

  const openImage = () =>{
    setisOpenDropdownImage(!isOpenDropdownImage)
  }

  useEffect(()=>{
    setLogueado(true)
  },[])

  const handleLogOut = () =>{
    setLogueado(false)
    navigate("/")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black' }}>
    <a href="/">
        <img className="navbar-brand" src={logo} style={{ width: '90px', marginLeft: '30px' }} alt="Logo" />
    </a>

    {/* Dropdown de Eventos */}
    <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarSupportedContent" style={{ left: '900px', position: 'absolute' }}>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown" style={{ padding: '0 10px' }}>
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" onClick={openDropdown} aria-haspopup="true" aria-expanded={open ? 'true' : 'false'} style={{ color: 'white' }}>
                    Eventos
                </a>
                <div className={`dropdown-menu ${open ? 'show' : ''}`} aria-labelledby="navbarDropdown" style={{ backgroundColor: 'black' }}>
                    <a className="dropdown-item" href="/bodas" style={{ color: 'white' }}>Bodas</a>
                    <a className="dropdown-item" href="/fiestasXv" style={{ color: 'white' }}>Fiestas de XV</a>
                    <a className="dropdown-item" href="/FiestasCorp" style={{ color: 'white' }}>Fiestas Corporativas</a>
                    <a className="dropdown-item" href="/FiestasEgre" style={{ color: 'white' }}>Fiestas de Egresados</a>
                    <a className="dropdown-item" href="/bautismos" style={{ color: 'white' }}>Bautismos</a>
                </div>
            </li>
            <li className="nav-item" style={{ padding: '0 10px' }}>
                <a className="nav-link" href="/catering" style={{ color: 'white' }}>Catering</a>
            </li>
            <li className="nav-item" style={{ padding: '0 10px' }}>
                <a className="nav-link" href="/decoracion" style={{ color: 'white' }}>Decoración</a>
            </li>
        </ul>
    </div>

    {/* Dropdown del Avatar */}
    <div>
      <img className="avatar-image position-absolute" onClick={openImage} src={avatar2} style={{ width: '30px', left: '1320px', top: '35px', cursor: 'pointer' }} alt="Avatar" />
      <div
                className={`dropdown-menu ${isOpenDropdownImage ? 'show' : ''}`}
                style={{ position: 'absolute', top: '70px', left: '1340px', backgroundColor: 'black', zIndex: '1000' }}
            >
                {/* Renderizado condicional del enlace de log-in/log-out */}
                {logueado ? (
                    <a className="dropdown-item" onClick={handleLogOut} style={{ cursor: 'pointer', color: 'white' }}>
                        Log-out
                    </a>
                ) : (
                    <Link to="/login" className="dropdown-item" style={{ color: 'white' }}>
                        Log-in
                    </Link>
                )}
            </div>
    </div>
      
      {/* <button className="navbar-toggle" onClick={openDropdown} aria-label="Toggle navigation">
        <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: "white"}}>
          <path fillRule="evenodd" clipRule="evenodd" d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z" fill="currentColor"/>
        </svg>
      </button> */}
    </nav>
  );
}

export default Navbar;





