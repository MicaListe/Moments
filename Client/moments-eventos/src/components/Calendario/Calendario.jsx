import React, { useEffect } from 'react';

const Calendario = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Verifica si Calendly está disponible
      if (window.Calendly) {
        // Verifica si el contenedor está presente en el DOM
        const widgetContainer = document.querySelector('.calendly-inline-widget');
        if (widgetContainer) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/momentsevents18/30min?primary_color=e8cd29',
            parentElement: widgetContainer,
            prefill: {},
            utm: {}
          });
          console.log('Calendly widget initialized');
        } else {
          console.error('No se encontró el contenedor del widget de Calendly.');
        }
      } else {
        console.error('El objeto Calendly no está disponible.');
      }
    };

    script.onerror = () => {
      console.error('Error loading Calendly script');
    };

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


