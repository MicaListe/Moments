import { useState } from "react";
import ModalImage from "../BoxImage/Lightbox";

export default function DecoParty({type, image, description, id }) {
    const [modal, setModal] = useState(false);

    const handleClose = () => setModal(false);
    const handleOpen = () => setModal(true);
    const title = `Decoración de ${type}  N° ${id}`
    return (
        <>
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        height: "100%",
                        alignItems: "center",
                        cursor: "pointer",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        // e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                    }}
                    onClick={handleOpen}
                >
                    <img
                        src={image[0]}
                        alt="Imagen no encontrada"
                        style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                            borderRadius: "5px",
                        }}
                    />
                </div>
            </div>
            <ModalImage
                modal={modal}
                handleClose={handleClose}
                image={image}
                description={description}
                title={title}
            />
        </>
    );
}