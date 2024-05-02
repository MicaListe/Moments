import React from 'react';
import playa from "../../assets/playa.png";
import quinta from "../../assets/quinta.png";
import salon from "../../assets/salon.png";

export default function Home() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="w-25 p-2">
                <h2>Eventos</h2>
                <p>Experimenta la belleza incomparable de celebrar tu fiesta en los lugares más espectaculares y soñados.
                    Sumérgete en una experiencia inolvidable que te transportará a un mundo de encanto y alegría.</p>
            </div>
            <div className="w-50 p-4">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={quinta} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={salon} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={playa} alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}


