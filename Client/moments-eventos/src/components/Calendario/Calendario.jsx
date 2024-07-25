import React, { useEffect } from 'react'

const Calendario = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  
    script.onload = () => {
      console.log("Script loaded successfully");
      setTimeout(() => {
        if (window.Calendly) {
          console.log("Calendly object is available");
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/momentsevents18/reunion-eventos',
            parentElement: document.querySelector('.calendly-inline-widget'),
            prefill: {},
            utm: {}
          });
          console.log("Calendly widget initialized");
        } else {
          console.error('Calendly object is not available');
        }
      }, 1000); // Espera 1 segundo
    };
  
    script.onerror = () => {
      console.error("Error loading Calendly script");
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
