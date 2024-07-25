import React, { useEffect } from 'react';

const Calendario = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    //Cuando se detecta el evento calendly.event_scheduled, se redirige al usuario a http://localhost:5173/formulario.
    const handleEventScheduled = (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        window.location.href = 'https://moments-3oti.vercel.app/formulario';
      }
    };

    window.addEventListener('message', handleEventScheduled);

    //Inicializar el widget de Calendly una vez que el script de Calendly se haya cargado correctamente
    script.onload = () => {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/momentsevents18/30min?primary_color=e8cd29',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    };
    //limpieza que se ejecuta cuando el componente de React se desmonta.
    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleEventScheduled);
    };
  }, []);

  return (
    <div className="container mt-5">
      <div
        className="calendly-inline-widget"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </div>
  );
};

export default Calendario;
