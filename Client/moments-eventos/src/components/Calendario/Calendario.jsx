import React, { useEffect } from 'react';

const Calendario = () => {
  useEffect(() => {
    // Crear el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Inicializar el widget cuando el script se haya cargado
    script.onload = () => {
      if (window.Calendly) {
        const widgetContainer = document.querySelector('.calendly-inline-widget');
        if (widgetContainer) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/momentsevents18/30min',
            parentElement: widgetContainer,
            prefill: {},
            utm: {}
          });
        } else {
          console.error('No se encontró el contenedor del widget de Calendly.');
        }
      } else {
        console.error('El objeto Calendly no está disponible.');
      }
    };

    // Limpiar cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="calendly-inline-widget" 
           style={{ minWidth: '320px', height: '700px' }}>
      </div>
    </div>
  );
};

export default Calendario;



