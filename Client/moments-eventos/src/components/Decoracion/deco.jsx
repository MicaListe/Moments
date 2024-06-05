import { useState } from "react"
import ModalImage from "../BoxImage/Lightbox"
export default function DecoParty({image, description}){

    const [modal, setModal] = useState(false)

    const handleClose = () => setModal(false)
    const handleOpen = () => setModal(true)

    return(
        <>
            <div style={{flexDirection:"column", height:"100%", alignItems:"center", justifyContent:"center", display:"flex"}}>
                <img src={image[0]} alt="Imagen no encontrada" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "5px"}} onClick={handleOpen} />
            </div>

            <ModalImage
               modal={modal}
               handleClose={handleClose}
               image={image}
               description={description} 
            />
        </>
        
    )
}