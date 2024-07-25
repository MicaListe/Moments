import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Calendario = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    const handleCalendlyEvent = (event) => {
      if (event.data.event === 'calendly.event_scheduled') {
        // Redirige a /formulario cuando el evento sea programado
        navigate('/formulario');
      }
    };

    // Agrega el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Escucha los eventos de Calendly
    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      // Limpia el script y el listener al desmontar el componente
      document.body.removeChild(script);
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [navigate]); // Dependencia de navigate

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


