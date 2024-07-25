import React, { useEffect } from 'react';

const Calendario = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
  
    script.onload = () => {
      console.log("Calendly script loaded");
      console.log("Calendly object:", window.Calendly);
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/momentsevents18/reunion-eventos',
          parentElement: document.querySelector('.calendly-inline-widget'),
          prefill: {},
          utm: {}
        });
      } else {
        console.error("Calendly object is not available");
      }
    };
  
    script.onerror = () => {
      console.error("Error loading Calendly script");
    };
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
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