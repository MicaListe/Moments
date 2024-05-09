import React, { useState } from 'react';
import decoracionUno from "../../assets/decoracionUno.png";
import decoracionDos from "../../assets/decoracionDos.png";
import decoracionTres from "../../assets/decoracionTres.png";
import fondo from "../../assets/4.png"
export default function CarouselDecoration() {

    const [image, setImage]=useState(0);

    const previous = () => {
        if (image === 0) {
            setImage(2);
        } else {
            setImage(image - 1); 
        }
    };

    const next = () => {
        if (image === 2) {
            setImage(0);
        } else {
            setImage(image + 1);
        }
    };
   
    return (
        <div className="d-flex justify-content-center align-items-center mt-5-auto">
             <div className="card w-25 p-2 rounded-0" style={{height:"300px", left:'25px',backgroundImage:`url(${fondo})`, backgroundSize:"380px"}}>
                <div className="card-body aling-items-center mt-5">
                    <h2 className="card-title" style={{color:"#efc75e"}}>Iluminacion y Sonido</h2>
                    <p className="card-text" style={{color:"white"}} >Disfruta de una experiencia sonora y visual que te envolverá y te invitará a moverte al ritmo
                    de la música, acompañada de una iluminación espectacular que crea un ambiente vibrante lleno
                    de energía, haciendo que cada momento sea inolvidable</p>
                </div>
            </div>
            <div className="w-50 p-4">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {/* Si image es igual a 0, se añade la clase "active"; de lo contrario, se añade una cadena vacía, 
                        lo que significa que la clase "active" no se aplicará.*/}
                        <div className={"carousel-item" + (image === 0 ? " active" : "")}> 
                            <img className="d-block w-100" src={decoracionUno} alt="First slide"/>
                        </div>
                        <div className={"carousel-item" + (image === 1 ? " active" : "")}>
                            <img className="d-block w-100" src={decoracionDos} alt="Second slide"/>
                        </div>
                        <div className={"carousel-item" + (image === 2 ? " active" : "")}>
                            <img className="d-block w-100" src={decoracionTres} alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev"  role="button" data-slide="prev" onClick={previous}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" role="button" data-slide="next" onClick={next}>
                        <span className="carousel-control-next-icon" style={{color:"black"}} aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}