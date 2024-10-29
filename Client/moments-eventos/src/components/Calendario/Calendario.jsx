import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { useLocation } from 'react-router-dom';
import dinosaurio from "../../assets/dinosaurioError.png"

const Calendario = () => {

  useEffect(() => {
    const handleEventScheduled = (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Redirige a la URL externa
        window.location.href = 'https://moments-3oti.vercel.app/formulario';
      }
    };

    // Escucha los eventos de Calendly
    window.addEventListener('message', handleEventScheduled);

    return () => {
      // Limpia el listener al desmontar el componente
      window.removeEventListener('message', handleEventScheduled);
    };
  }, []);

  const location = useLocation();

    const isAuthorized = location.state && location.state.fromButton;
    if (!isAuthorized) {
      return <div className="alert alert-danger text-center" role="alert" style={{ marginTop: '20px', fontSize:"20px" }}>
        Error: No tienes permiso para acceder a esta página.
        <div>
          <img src={dinosaurio} alt="Dinosaurio" style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    }

  return (
    <div className="container mt-5">
      <InlineWidget
        url="https://calendly.com/momentsevents18/reunion-eventos"
        styles={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
};

export default Calendario;





