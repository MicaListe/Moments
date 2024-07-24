import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCatering, getDecoration, getEvents } from '../../Redux/actions';
import rama from "../../assets/ramaDorada.png"

export default function Formulario({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const events = useSelector((state) => state.events);
  const catering = useSelector((state) => state.catering);
  const decoration = useSelector((state) => state.decoration);

  useEffect(() => {
    dispatch(getEvents());
    dispatch(getCatering());
    dispatch(getDecoration());
  }, [dispatch]);

  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [filteredType, setFilteredType] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);

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
  
  const [filteredMenu, setFilteredMenu] = useState([])
  const [filteredCake, setFilteredCake] = useState([])

  const handleCateringChange = (e) =>{
    setSelectedCatering(e.target.value)
  }

  useEffect(()=>{
    const menus = catering.filter(menu => menu.type === "Menu")
    setFilteredMenu(menus)
  },[selectedCatering, catering])

  useEffect(()=>{
    const tortas = catering.filter(torta => torta.type === "Torta")
    setFilteredCake(tortas)
  },[selectedCatering, catering])


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
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mt-5">
      <img src={rama} style={{ width: '100px', position: 'absolute', left: '0px', top: '200px' }} />
      <img src={rama} style={{ width: '100px', transform: 'rotate(180deg)', position: 'absolute', left: '1410px', top: '115px' }} />
      <img src={rama} style={{ width: '90px', transform: 'rotate(200deg)', position: 'absolute', left: '1420px', top: '700px' }} />
      <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="mb-4 text-center">Formulario de Datos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="selector1" className="form-label">Tipo de evento:</label>
            <select id="selector1" name="selector1" className="form-select" onChange={handleEventChange} value={selectedEvent}>
              <option value="">Seleccione un evento</option>
              {events.map(event => (
                <option key={event.id} value={event.name}>
                  {event.name}
                </option>
              ))}
            </select>
          </div>
          {selectedEvent && (
            <div className="mb-3">
              <label htmlFor="selector4" className="form-label">Tipo de lugar:</label>
              <select id="selector4" name="selector4" className="form-select" onChange={handleTypeChange} value={selectedType}>
                <option value="">Seleccione un tipo de lugar</option>
                {filteredType.map((type, index) => (
                  <option value={type} key={index}>{type}</option>
                ))}
              </select>
            </div>
          )}
          {selectedType && (
            <div className="mb-3">
              <label htmlFor="selector5" className="form-label">Lugar:</label>
              <select id="selector5" name="selector5" className="form-select" onChange={handleCityChange} value={selectedCity}>
                <option value="">Seleccione un lugar</option>
                {filteredCity.map((name, index) => (
                  <option value={name} key={index}>{name}</option>
                ))}
              </select>
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="selector2" className="form-label">Catering:</label>
            <select id="selector2" name="selector2" className="form-select" onChange={handleCateringChange} value={selectedCatering}>
              <option value="">Seleccione un menú</option>
              {filteredMenu.map(cater => (
                <option key={cater.id} value={cater.id}>
                  {cater.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="selector2" className="form-label">Tortas:</label>
            <select id="selector2" name="selector2" className="form-select" onChange={handleCateringChange} value={selectedCatering}>
              <option value="">A elección</option>
              {filteredCake.map(cater => (
                <option key={cater.id} value={cater.id}>
                  {cater.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="selector3" className="form-label">Tipo de decoración:</label>
            <select id="selector3" name="selector3" className="form-select" onChange={handleDecoTypeChange} value={selectedDecorationType}>
              <option value="">Seleccione un tipo de decoración</option>
              {filteredDecoType.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {selectedDecorationType && (
            <div className="mb-3">
              <label htmlFor="selector4" className="form-label">Decoración:</label>
              <select id="selector4" name="selector4" className="form-select" onChange={handleDecoIdChange} value={selectedDecorationId}>
                <option value="">A elección</option>
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

