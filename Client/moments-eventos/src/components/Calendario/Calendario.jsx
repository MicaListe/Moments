import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendario = () => {
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

