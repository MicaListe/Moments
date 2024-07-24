import { Modal, Carousel } from 'react-bootstrap';

export default function ModalImage({modal, image, name, description, country, city, handleClose, title}) {
    return (
        <Modal show={modal} onHide={handleClose}>
            <Modal.Header closeButton> {/* Encabezado */}
                <Modal.Title>{title}</Modal.Title> {/* Titulo */}
            </Modal.Header>
            <Modal.Body> {/* Cuerpo*/}
                <Carousel>
                    {image.map((img, index) => (
                        <Carousel.Item key={index} style={{height:"300px"}}>
                            <img src={img} className=" w-100" alt={`Imagen ${index + 1}`} style={{ objectFit: "cover", height:"300px"}}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <p className='mt-4'>{description}</p>
            </Modal.Body>
        </Modal>
    );
}
