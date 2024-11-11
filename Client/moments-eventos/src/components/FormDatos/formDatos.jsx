import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCatering, getDecoration, getEvents } from '../../Redux/actions';
import rama from "../../assets/ramaDorada.png"
import emailjs from "emailjs-com"
import { useLocation } from 'react-router-dom';
import dinosaurio from "../../assets/dinosaurioError.png"

export default function Formulario({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  emailjs.init("YS_6kkHcsMmTXyA_w")

  const events = useSelector((state) => state.events);
  const catering = useSelector((state) => state.catering);
  const decoration = useSelector((state) => state.decoration);
 

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getCatering());
    dispatch(getDecoration());
  }, [dispatch]);


  const location = useLocation();

    const isAuthorized = location.state && location.state.fromButton;
    console.log(isAuthorized,"a")
    if (!isAuthorized) {
      return <div className="alert alert-danger text-center" role="alert" style={{ marginTop: '20px', fontSize:"20px" }}>
        Error: No tienes permiso para acceder a esta página.
        <div>
          <img src={dinosaurio} alt="Dinosaurio" style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    }

  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [filteredType, setFilteredType] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);

  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user); // Convertir el string a objeto
      setUserEmail(parsedUser.mail); // Establecer el correo en el estado
    }
  }, []);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate('/Calendario');
  };


  useEffect(() => {
    if (selectedEvent) {
      const event = events.find(e => e.name === selectedEvent);
      if (event && event.Lugars) {
        const types = Array.from(new Set(event.Lugars.map(place => place.type)));
        setFilteredType(types);
      }
    }
    setSelectedType('');
    setSelectedCity('');
    setFilteredCity([]);
  }, [selectedEvent, events]);

  useEffect(() => {
    if (selectedType) {
      const event = events.find(e => e.name === selectedEvent);
      if (event && event.Lugars) {
        const cities = Array.from(new Set(event.Lugars.filter(place => place.type === selectedType).map(place => place.name)));
        setFilteredCity(cities);
      }
    } else {
      setFilteredCity([]);
    }
    setSelectedCity('');
  }, [selectedType, selectedEvent, events]);

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };


  // Para decoración:

  const [selectedCatering, setSelectedCatering] = useState("")
  const [selectedCake, setSelectedCake] = useState("")

  const [filteredMenu, setFilteredMenu] = useState([])
  const [filteredCake, setFilteredCake] = useState([])

  const handleCateringChange = (e) =>{
    setSelectedCatering(e.target.value)
  }

  const handleCakeChange= (e) => {
    setSelectedCake(e.target.value)
  }

  useEffect(()=>{
    const menus = catering.filter(menu => menu.type === "Menu")
    setFilteredMenu(menus)
  },[ catering])

  useEffect(()=>{
    const tortas = catering.filter(torta => torta.type === "Torta")
    setFilteredCake(tortas)
  },[ catering])


  //Para decoracion 
  const [selectedDecorationType, setSelectedDecorationType] = useState("")

  const [selectedDecorationId, setSelectedDecorationId] = useState("")


  const [filteredDecoType, setFilteredDecoType] = useState([])
  const [filteredDecoId, setFilteredDecoId] = useState([])

  useEffect(() => {
    if (decoration.length > 0) {
      const tipos = Array.from(new Set(decoration.map(dec => dec.type)));
      setFilteredDecoType(tipos);
    }
  }, [decoration]);

  const handleDecoTypeChange = (e) => {
    const selectedType = e.target.value;
    setSelectedDecorationType(selectedType);

    if (selectedType) {
      const decoIds = decoration.filter(deco => deco.type === selectedType);
      setFilteredDecoId(decoIds);
    } else {
      setFilteredDecoId([]);
    }
    setSelectedDecorationId('');
  };

  const handleDecoIdChange = (e) => {
    setSelectedDecorationId(e.target.value);
  };


  //SUBMIT PARA ENVIAR EL FORMULARIO
  const sendEmial = (e) => {
    e.preventDefault();
    
    if(!selectedEvent || !selectedType || !selectedCity || !selectedCatering || !selectedCake || !selectedDecorationType || !selectedDecorationId){
      window.alert("Por favor complete todos los campos")
      return
    }

    emailjs.sendForm("service_oqepc5k", "template_a6xe5ys", e.target, "YS_6kkHcsMmTXyA_w")
      .then((result) => {
        console.log("Resultado de EmailJS:", result);
        alert("Formulario enviado exitosamente");
        navigate("/")
      }, (error) => {
        console.log("Error de EmailJS:", error);
        alert("Hubo un error al enviar el formulario");
      }
    );
    
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mt-5">
      <img src={rama} style={{ width: '100px', position: 'absolute', left: '0px', top: '200px' }} />
      <img src={rama} style={{ width: '100px', transform: 'rotate(180deg)', position: 'absolute', left: '1410px', top: '115px' }} />
      <img src={rama} style={{ width: '90px', transform: 'rotate(200deg)', position: 'absolute', left: '1420px', top: '700px' }} />
      <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="mb-4 text-center">Formulario de Datos</h2>
        <form onSubmit={sendEmial}>
        <input type="hidden" name="user_email" value={userEmail} />
          <div className="mb-3">
            <label htmlFor="selector1" className="form-label">Tipo de evento:</label>
            <select id="selector1" name="Evento" className="form-select" onChange={handleEventChange} value={selectedEvent}>
              <option value="" disabled selected>Selecciona una opción</option>
              {events.map(event => (
                <option key={event.id} value={event.name}>
                  {event.name}
                </option>
              ))}
            </select>
          </div>
          {selectedEvent && (
            <div className="mb-3">
              <label htmlFor="selector2" className="form-label">Tipo de lugar:</label>
              <select id="selector2" name="Tipo de Lugar" className="form-select" onChange={handleTypeChange} value={selectedType}>
                <option value="" disabled selected>Selecciona una opción</option>
                {filteredType.map((type, index) => (
                  <option value={type} key={index}>{type}</option>
                ))}
              </select>
            </div>
          )}
          {selectedType && (
            <div className="mb-3">
              <label htmlFor="selector3" className="form-label">Lugar:</label>
              <select id="selector3" name="Lugar" className="form-select" onChange={handleCityChange} value={selectedCity}>
              <option value="" disabled selected>Selecciona una opción</option>
                {filteredCity.map((name, index) => (
                  <option value={name} key={index}>{name}</option>
                ))}
              </select>
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="selector4" className="form-label">Catering:</label>
            <select id="selector4" name="Catering" className="form-select" onChange={handleCateringChange} value={selectedCatering}>
              <option value="" disabled selected>Selecciona una opción</option>
              {filteredMenu.map(cater => (
                <option key={cater.id} value={cater.name}>
                  {cater.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="selector5" className="form-label">Tortas:</label>
            <select id="selector5" name="Tortas" className="form-select" onChange={handleCakeChange} value={selectedCake}>
              <option value="" disabled selected>Selecciona una opción</option>
              <option value="A eleccion">A elección</option>
              {filteredCake.map(cater => (
                <option key={cater.id} value={cater.name}>
                  {cater.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="selector6" className="form-label">Tipo de decoración:</label>
            <select id="selector6" name="Tipo de Decoracion" className="form-select" onChange={handleDecoTypeChange} value={selectedDecorationType}>
              <option value="" disabled selected>Selecciona una opción</option>
              {filteredDecoType.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {selectedDecorationType && (
            <div className="mb-3">
              <label htmlFor="selector7" className="form-label">Decoración:</label>
              <select id="selector7" name="Decoracion" className="form-select" onChange={handleDecoIdChange} value={selectedDecorationId}>
                <option value="" disabled selected>Selecciona una opción</option>
                <option value="A eleccion">A elección</option>
                {filteredDecoId.map(decor => (
                  <option key={decor.id} value={decor.id}>
                    {decor.id}
                  </option>
                ))}
              </select>
            </div>
          )}
          
          <button type="submit" className="btn w-100" style={{backgroundColor: "black", color: "white"}}>Enviar</button>
          
        </form>
      </div>
    </div>
  );
}

