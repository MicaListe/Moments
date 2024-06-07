import { useState } from "react"
import ModalImage from "../../BoxImage/Lightbox"

export default function Quintas({name, image, description, country, city}){

    const [modal, setModal]= useState(false)

    const handleClose = () => setModal(false)
    const handleOpen = () => setModal(true)

    return(
        <>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%"}}>
                <img src={image[0]} alt={name} style={{width: "100%", height: "250px", objectFit: "cover", borderRadius: "5px"}} onClick={handleOpen} />
                <p style={{fontSize:"17px", marginTop:"10px", textAlign:"center"}}>{name}</p>
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
        
    )
}