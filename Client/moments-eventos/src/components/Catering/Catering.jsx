import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCatering } from "../../Redux/actions";
import caterin from '../../assets/caterintres.jpg';
import video from "../../assets/video catering.mp4"
import Dorado from "../ramaDorada/rama";
import Comidas from "../Catering/comidas";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FilterCatering from "../FiltroCatering/Filtros";
import dinosaurio from "../../assets/dinosaurioError.png"


export default function Catering() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getCatering());
    }, [dispatch]);


    const location = useLocation();

    // Comprobar si el usuario tiene autorización
    const isAuthorized = location.state && location.state.fromButton;
        if (!isAuthorized) {
            return <div className="alert alert-danger text-center" role="alert" style={{ marginTop: '20px', fontSize:"20px" }}>
            Error: No tienes permiso para acceder a esta página. Necesitas estar logueado.
            <div>
              <img src={dinosaurio} alt="Dinosaurio" style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        }

    const catering = useSelector((state) => state.catering);

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * 6;
        const endIndex = startIndex + 6;
        return catering.slice(startIndex, endIndex);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Dorado />
            <div className="row">
                <div className="  d-flex justify-content-center align-items-center">
                    <video src={video} loop autoPlay style={{width:"700px", marginTop:"100px"}}></video> 
                </div>
            </div>
            <FilterCatering/>
            <div className="row mb-5" style={{ marginLeft: "200px", marginTop: "100px" }}>
                {getCurrentPageItems().map((element) => (
                    <div className="card p-3 me-3 mb-4" style={{ boxShadow: "1px 1px 2px black", width: "350px", height: "350px" }} key={element.id}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <Comidas
                                name={element.name}
                                image={element.image}
                                description={element.description}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={() => handlePageChange(currentPage - 1)} className={`btn ${currentPage === 1 ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === 1}><FaArrowLeft /></button>
                {[...Array(Math.ceil(catering.length / 6)).keys()].map((page) => (
                    <button key={page + 1} onClick={() => handlePageChange(page + 1)} className={`btn ${currentPage === page + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}>{page + 1}</button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} className={`btn ${currentPage === Math.ceil(catering.length / 6) ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === Math.ceil(catering.length / 6)}><FaArrowRight /></button>
            </div>
        </div>
    );
}
