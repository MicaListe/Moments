import React, { useEffect } from 'react';

const Calendario = () => {
  useEffect(() => {
    const initCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/momentsevents18/reunion-eventos',
          parentElement: document.querySelector('.calendly-inline-widget'),
          prefill: {},
          utm: {}
        });
      } else {
        console.error('Calendly object is not available');
      }
    };

    // Verifica si el script de Calendly está cargado y llama a la función de inicialización
    const checkCalendlyScript = () => {
      if (window.Calendly) {
        initCalendly();
      } else {
        setTimeout(checkCalendlyScript, 100); // Reintenta después de 100ms
      }
    };

    checkCalendlyScript(); // Inicia el proceso de verificación

    // No es necesario limpiar nada aquí porque el script ya está en el HTML
  }, []);

  return (
    <div className="container mt-5">
      <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }}></div>
    </div>
  );
};

export default Calendario;

