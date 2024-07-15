import React from "react";
import {Modal} from "react-bootstrap"

export default function ConfirmationLogin({show, handleClose}){
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>¡Bienvenido!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Has iniciado sesión exitosamente</p>
            </Modal.Body>
        </Modal>
    )
}