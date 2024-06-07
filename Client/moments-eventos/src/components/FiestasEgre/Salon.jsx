import { useState } from "react";
import ModalImage from "../BoxImage/Lightbox"

export default function Salon({ name, image, description, country, city }) {

    const [modal, setModal] = useState(false)

    const handleClose = () => setModal(false)
    const handleOpen = () => setModal(true)
    return (

        <>
            <div>
                <div style={{display:"flex", justifyContent:"center", flexDirection:"column", height:"100%", alignItems:"center" }}>
                    <img src={image[0]} alt="Imagen no encontrada" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "5px"}} onClick={handleOpen}/>
                    <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
                </div>
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
