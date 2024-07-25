import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';


const Calendario = () => {


  useEffect(() => {
    const handleEventScheduled = (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        window.location.href = 'https://moments-3oti.vercel.app/formulario';
      }
    };

    window.addEventListener('message', handleEventScheduled);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleEventScheduled);
    };
  }, []);

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





