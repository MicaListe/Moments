import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importa los íconos de FontAwesome
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import dinosaurio from "../../assets/dinosaurioError.png";


export default function Team() {

    const location = useLocation();
    const [isAuthorized, setIsAuthorized] = useState(false);


    useEffect(() => {
        if (location.state && location.state.fromButton) {
            setIsAuthorized(true); // Acceso permitido solo si es desde el botón
        }
    }, [location.state]);

    if (!isAuthorized) {
        return <div className="alert alert-danger text-center" role="alert" style={{ marginTop: '20px', fontSize:"20px" }}>
            Error: No tienes permiso para acceder a esta página.
            <div>
              <img src={dinosaurio} alt="Dinosaurio" style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
    }

    return (
        <div className="bg-light py-3 py-md-5 py-xl-8">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 className="mb-4 display-5 text-center">Nuestro Equipo</h2>
                        <p className="text-secondary mb-5 text-center lead fs-4">
                        Somos dos desarrolladores juniors apasionados, llenos de energía y entusiasmo por aprender
                         y crecer en el mundo de la tecnología. Nuestra pasión y determinación nos permitirán aportar
                          nuevas perspectivas y soluciones innovadoras
                        </p>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>
            </div>

            <div className="container overflow-hidden">
                <div className="row gy-4 gy-lg-0 gx-xxl-5 justify-content-center align-items-center">
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="card border-0 border-bottom border-primary shadow-sm">
                            <div className="card-body p-0">
                                <figure className="m-0 p-0">
                                    <img className="img-fluid" loading="lazy" src="https://github.com/micaliste.png" alt="Flora Nyra" />
                                    <figcaption className="m-0 p-4">
                                        <h4 className="mb-1">Micaela Liste</h4>
                                        <p className="text-secondary mb-0">Full Stack</p>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a href="https://github.com/MicaListe" className="text-decoration-none text-dark me-3" target="_blank">
                                                <FaGithub size={24} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/micaela-liste-b98b61251/" className="text-decoration-none text-dark" target="_blank">
                                                <FaLinkedin size={24} />
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                            <div className="card-body p-0">
                                <figure className="m-0 p-0">
                                    <img className="img-fluid" loading="lazy" src="https://github.com/santiagodietrich.png" alt="Evander Mac" />
                                    <figcaption className="m-0 p-4">
                                        <h4 className="mb-1">Santiago Dietrich</h4>
                                        <p className="text-secondary mb-0">Full Stack</p>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a href="https://github.com/Santiagodietrich" className="text-decoration-none text-dark me-3" target="_blank">
                                                <FaGithub size={24} />
                                            </a>
                                            <a href="https://www.linkedin.com/in/santiago-dietrich-288413272/" className="text-decoration-none text-dark" target="_blank">
                                                <FaLinkedin size={24} />
                                            </a>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}