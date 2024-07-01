import React, { useEffect } from 'react';

const Calendario = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="calendly-inline-widget" 
           data-url="https://calendly.com/momentsevents18/30min?primary_color=e8cd29" 
           style={{ minWidth: '320px', height: '700px' }}>
      </div>
    </div>
  );
};

export default Calendario;

