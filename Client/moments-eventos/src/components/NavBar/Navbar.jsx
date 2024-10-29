import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/logo.png";
import avatar2 from "../../assets/avatar2.png";
import "../NavBar/dropdown.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [logueado, setLogueado] = useState(false);
  const [isOpenDropdownImage, setisOpenDropdownImage] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const imageDropDownRef = useRef(null);

  const openDropdown = () => {
    setOpen(!open);
  };

  const openImage = () => {
    setisOpenDropdownImage(!isOpenDropdownImage);
  };

  const profileImages = [
    "https://i.pinimg.com/564x/d0/0d/51/d00d5149e54757861fa03191da352f1f.jpg",
    "https://i.pinimg.com/564x/bd/42/8e/bd428e6bb156d90045700dbf3e967c3e.jpg",
    "https://i.pinimg.com/564x/a9/75/93/a975934bb378afc4ca8c133df451f56e.jpg",
    "https://i.pinimg.com/564x/52/61/bd/5261bd492ef52666d60258a067239007.jpg",
    "https://i.pinimg.com/564x/48/71/a3/4871a366e396e7d11dc7cc3552e892b1.jpg",
    "https://i.pinimg.com/564x/39/35/18/3935185aa714e129a146b96e9c14453f.jpg",
    "https://i.pinimg.com/564x/7f/b1/c8/7fb1c8775f2cffad991ca8060b653bc8.jpg",
    "https://i.pinimg.com/564x/30/6f/d0/306fd0fb64f67ff40f81d8e37f8bf674.jpg"
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLogueado(true);
      let storedImage = localStorage.getItem("profileImage");
      if (!storedImage) {
        const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];
        localStorage.setItem("profileImage", randomImage);
        storedImage = randomImage;
      }
      setProfileImage(storedImage);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
      if (imageDropDownRef.current && !imageDropDownRef.current.contains(event.target)) {
        setisOpenDropdownImage(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleOpenCorp = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    navigate("/FiestasCorp", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
  };

  const handleOpenXv = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    navigate("/fiestasXv", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
  };

  const handleOpenEgres = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    navigate("/FiestasEgre", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
  };


  const handleOpenLogin = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    navigate("/login", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
  };

  const handleOpenCatering = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    navigate("/catering", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
  };

  const handleOpenDecoration = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    navigate("/decoracion", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
  };

  const handleOpenCrud = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    navigate("/crud", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
  };



  const handleLogOut = () => {
    setLogueado(false);
    localStorage.removeItem("user");
    localStorage.removeItem("profileImage");
    navigate("/");
  };

  const loggedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "black" }}>
      <a href="/">
        <img className="navbar-brand" src={logo} style={{ width: "90px", marginLeft: "30px" }} alt="Logo" />
      </a>

      <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="navbarSupportedContent" style={{ left: "900px", position: "absolute" }}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link nav-button" href="/" style={{ color: "white" }}>Home</a>
          </li>
          <li className="nav-item dropdown" ref={dropdownRef}>
            <a className="nav-link dropdown-toggle nav-button" id="navbarDropdown" role="button" onClick={openDropdown} aria-haspopup="true" aria-expanded={open ? "true" : "false"} style={{ color: "white" }}>
              Eventos
            </a>
            <div className={`dropdown-menu ${open ? "show" : ""}`} aria-labelledby="navbarDropdown" style={{ backgroundColor: "black" }}>
              <a className="dropdown-item" href="/bodas" style={{ color: "white" }}>Bodas</a>
              <a className="dropdown-item" onClick={handleOpenXv} style={{ color: "white" }}>Fiestas de XV</a>
              <a className="dropdown-item" onClick={handleOpenCorp} style={{ color: "white" }}>Fiestas Corporativas</a>
              <a className="dropdown-item" onClick={handleOpenEgres} style={{ color: "white" }}>Fiestas de Egresados</a>
              <a className="dropdown-item" href="/bautismos" style={{ color: "white" }}>Bautismos</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-button" onClick={handleOpenCatering} style={{ color: "white" }}>Catering</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-button" onClick={handleOpenDecoration} style={{ color: "white" }}>Decoración</a>
          </li>
        </ul>
      </div>

      <div ref={imageDropDownRef}>
        <img
          className="avatar-image position-absolute"
          onClick={openImage}
          src={logueado ? profileImage : avatar2}
          style={{ width: "42px", left: "1370px", top: "35px", cursor: "pointer", borderRadius:"20px" }}
          alt="Avatar"
        />
        <div className={`dropdown-menu ${isOpenDropdownImage ? "show" : ""}`}  style={{ position: "absolute", top: "70px", left: "1340px", backgroundColor: "black", zIndex: "1000" }}>
          {logueado ? (
            <>
              {loggedUser && loggedUser.roleId === 1 && (
                <Link to="" onClick={handleOpenCrud} className="dropdown-item" style={{ color: "white" }}>
                  Admin
                </Link>
              )}
              <a className="dropdown-item" onClick={handleLogOut} style={{ cursor: "pointer", color: "white" }}>
                Log-out
              </a>
            </>
          ) : (
            <>
              <Link to="" onClick={handleOpenLogin} className="dropdown-item" style={{ color: "white" }}>
                Log-in
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;






