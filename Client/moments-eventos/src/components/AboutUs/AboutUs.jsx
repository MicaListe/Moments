import React from 'react';
import sobreNosotros from '../../assets/sobreNosotros.jpg'

function AboutUs () {
  return (
    <div className='container-fluid my-5'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xs-12 col-md-4 text-center">
            <div className="rounded-circle about-us-image-container">
              <img
                src={sobreNosotros}
                alt="Company Image"
                className="img-fluid"
                style={{ maxWidth: '550px', marginTop:"90px"}}
              />
            </div>
          </div>
          <div className="col-xs-12 col-md-8 px-4 mb-4">
            <h2 className="mb-4 " style={{marginLeft:"370px", fontSize:"40px" ,marginTop:"80px"}} >Sobre Nosotros</h2>
            <p style={{marginLeft:"200px"}} >
              Somos una empresa fundamental en la organización 
              de eventos a nivel nacional e internacional, con más de 5 años de experiencia. 
              Contamos con sucursales en Brasil, Estados Unidos y España, lo que nos permite ofrecer 
              servicios integrales en múltiples ubicaciones. Nuestro equipo altamente capacitado se especializa
              en la planificación, coordinación y ejecución de una amplia variedad de eventos, desde conferencias 
              corporativas hasta bodas y festivales. Nos comprometemos con la excelencia y la satisfacción del 
              cliente en cada proyecto, manteniendo altos estándares de calidad y atención personalizada. 
              Somos una empresa en expansión y nuestra visión es seguir siendo líderes en el sector, ofreciendo 
              experiencias únicas y significativas para nuestros clientes en todo el mundo.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;
