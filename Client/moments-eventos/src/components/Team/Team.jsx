import React from "react";


function Team () {
    return(
        <div className="mt-5 mx-3 pb-5">
            <h1 className="display-3 mb-3 text-center">
                Nosotros
            </h1>

            <div className="d-flex flex-column align-items-center mb-4"> 
                <div className="card border-light rounded-3 d-flex flex-row p-3 justify-content-between w-50 shadow-lg mb-4">
                    <div className="d-flex flex-column me-3">
                        <h1 className="text-center display-6"> 
                            Micaela Liste
                        </h1>
                        <h2 className="text-center h4"> 
                            Full Stack
                        </h2>
                    </div>
                    <img src="https://github.com/micaliste.png" alt="perfil MicaJS" className="img-thumbnail" style={{ width: "8rem", height: "8rem" }} />
                </div>
            </div>

            <div className="d-flex flex-column align-items-center"> 
                <div className="card border-light rounded-3 d-flex flex-row p-3 justify-content-between w-50 shadow-lg">
                    <div className="d-flex flex-column me-3">
                        <h1 className="text-center display-6"> 
                            Santiago Dietrich
                        </h1>
                        <h2 className="text-center h4"> 
                            Full Stack
                        </h2>
                    </div>
                    <img src="https://github.com/santiagodietrich.png" alt="perfil SantiJS" className="img-thumbnail" style={{ width: "8rem", height: "8rem" }} />
                </div>
            </div>
        </div>
    );
}

export default Team;

