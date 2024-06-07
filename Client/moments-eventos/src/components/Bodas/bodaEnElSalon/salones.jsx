import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import ModalImage from '../../BoxImage/Lightbox';
export default function Salones({ image, name, description, country, city }) {
    
    const [modal, setModal] = useState(false);
    

    const handleClose = () => setModal(false);
    const handleOpen = () => {setModal(true), console.log("abierto")};

    return (
        <>
            <div style={{ flexDirection: "column", height: "100%", alignItems: "center", justifyContent: "center", display: "flex" }}>
                <img src={image[0]} alt="Imagen no encontrada" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "5px", cursor: "pointer" }} onClick={handleOpen} />
                <p style={{ fontSize: "17px", marginTop: "10px", textAlign: "center" }}>{name}</p>
            </div>

            <ModalImage
                modal={modal}
                handleClose={handleClose}
                name={name}
                image={image}
                description={description}
                country={country}
                city={city}
            />
        </>
    );
}

