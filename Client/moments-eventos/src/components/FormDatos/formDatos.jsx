import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCatering, getDecoration, getEvents } from '../../Redux/actions';


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

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate('/Calendario');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="mb-4 text-center">Formulario de Datos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="selector1" className="form-label">Tipo de evento:</label>
            <select id="selector1" name="selector1" className="form-select">
              {events.map(event => (
                <option key={event.id} value={event.id}>
                  {event.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="selector4" className="form-label">Lugar:</label>
            <select id="selector4" name="selector4" className="form-select">
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="selector5" className="form-label">Localidad:</label>
            <select id="selector5" name="selector5" className="form-select">
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="selector2" className="form-label">Catering:</label>
            <select id="selector2" name="selector2" className="form-select">
              {catering.map(cater => (
                <option key={cater.id} value={cater.id}>
                  {cater.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="selector3" className="form-label">Decoración:</label>
            <select id="selector3" name="selector3" className="form-select">
              {decoration.map(decor => (
                <option key={decor.id} value={decor.id}>
                  {decor.id}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
      </div>
    </div>
  );
}

