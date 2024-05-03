import React, { useState } from 'react';
import cateringUno from "../../assets/cateringUno.png";
import cateringDos from "../../assets/cateringDos.png";
import cateringTres from "../../assets/cateringTres.png";

export default function CarouselCatering() {

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
            <div className="w-50 p-4">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {/* Si image es igual a 0, se añade la clase "active"; de lo contrario, se añade una cadena vacía, 
                        lo que significa que la clase "active" no se aplicará.*/}
                        <div className={"carousel-item" + (image === 0 ? " active" : "")}> 
                            <img className="d-block w-100" src={cateringUno} alt="First slide"/>
                        </div>
                        <div className={"carousel-item" + (image === 1 ? " active" : "")}>
                            <img className="d-block w-100" src={cateringDos} alt="Second slide"/>
                        </div>
                        <div className={"carousel-item" + (image === 2 ? " active" : "")}>
                            <img className="d-block w-100" src={cateringTres} alt="Third slide"/>
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
            <div className="w-25 p-2">
                <h2>Catering</h2>
                <p>Deléitate con las exquisitas creaciones culinarias preparadas por los más destacados chefs de la zona.
                    Sumérgete en una experiencia gastronómica inigualable que elevará tu evento a otro nivel de exquisitez</p>
            </div>

        </div>
    );
}
