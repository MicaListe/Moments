import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser, getCatering, deleteCatering, updateCatering, getEvents, updateEvent, deleteEvent, getDecoration, updateDecoration, deleteDecoration, updateLugar } from '../../Redux/actions';
import { Button, Form, Table, Modal } from 'react-bootstrap';
import {Link} from "react-router-dom"

export default function CrudComponent() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const catering = useSelector((state) => state.catering);
  const events = useSelector((state) => state.events);
  const lugares = events.flatMap(event=>event.Lugars)
  console.log("l", events)
  const decoration = useSelector((state) => state.decoration);
  
  const [currentUser, setCurrentUser] = useState(null);
  const [currentCatering, setCurrentCatering] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentDecoration, setCurrentDecoration] = useState(null);
  const [currentLugar, setCurrentLugar] = useState(null)
  
  const [showModal, setShowModal] = useState(false);
  const [editedName, setEditedName] = useState('');
  
  const [modalType, setModalType] = useState(''); // 'user', 'catering', 'event', or 'decoration'

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCatering());
    dispatch(getEvents());
    dispatch(getDecoration());
  }, [dispatch]);

  useEffect(() => {
    if (modalType === 'catering' && currentCatering) {
      setEditedName(currentCatering.description || '');
    } else if (modalType === 'event' && currentEvent) {
      setEditedName(currentEvent.name || '');
    } else if (modalType === "lugar" && currentLugar){
      setEditedName(currentLugar.description || " ")
    } else if (modalType === 'decoration' && currentDecoration) {
      setEditedName(currentDecoration.description || '');
    }
  }, [currentUser, currentCatering, currentEvent, currentDecoration, currentLugar, modalType]);

  const handleDeleteUser = (id) => {
    if (window.confirm("¿Estas seguro de eliminar este usuario?")) {
      dispatch(deleteUser(id));
    }
  };

  const handleDeleteCatering = (id) => {
    if (window.confirm("¿Estas seguro de eliminar este catering item?")) {
      dispatch(deleteCatering(id));
    }
  };

  const handleEditCatering = (cateringItem) => {
    setCurrentCatering(cateringItem);
    setModalType('catering');
    setShowModal(true);
  };

  const handleSaveCatering = () => {
    if (currentCatering && editedName.trim()) {
      dispatch(updateCatering(currentCatering.id, { ...currentCatering, description: editedName }));
      setShowModal(false);
      setCurrentCatering(null);
    }
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm("¿Estas seguro de eliminar este evento?")) {
      dispatch(deleteEvent(id));
    }
  };

  const handleEditEvent = (event) => {
    setCurrentEvent(event);
    setModalType('event');
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    if (currentEvent && editedName.trim()) {
      dispatch(updateEvent(currentEvent.id, { ...currentEvent, name: editedName }));
      setShowModal(false);
      setCurrentEvent(null);
    }
  };

  const handleEditLugar = (lugar) => {
    setCurrentLugar(lugar);
    setModalType('lugar');
    setShowModal(true);
  };

  const handleSaveLugar = () =>{
    if( currentLugar && editedName.trim()){
      console.log("Saving lugar:", currentLugar, editedName);
      dispatch(updateLugar(currentLugar.id,{...currentLugar, description:editedName}))
      setShowModal(false)
      setCurrentLugar(null)
    }
  }
  const handleDeleteDecoration = (id) => {
    if (window.confirm("¿Estas seguro de eliminar este decoración item?")) {
      dispatch(deleteDecoration(id));
    }
  };

  const handleEditDecoration = (decorationItem) => {
    setCurrentDecoration(decorationItem);
    setModalType('decoration');
    setShowModal(true);
  };

  const handleSaveDecoration = () => {
    if (currentDecoration && editedName.trim()) {
      dispatch(updateDecoration(currentDecoration.id, { ...currentDecoration, description: editedName }));
      setShowModal(false);
      setCurrentDecoration(null);
    }
  };
  
  return (
    <div className="container">
      <h1 className="mt-4 text-center">Panel Administrador</h1>

      {/* Users Tabla */}
      <h2 className="mt-4">Usuarios</h2>
      <Table striped bordered hover className="table-lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td className="text-center text-nowrap" style={{ width: '150px' }}>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteUser(user.id)}
                    size="sm"
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Catering Tabla */}
      <h2 className="mt-4">Catering</h2>
      <Table striped bordered hover className="table-lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th className="text-center">Acciones</th>
            <td colSpan="5" className="text-center">
              <Link to="/createCatering">
                <Button variant="success" size="sm">
                  Añadir
                </Button>
              </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {catering.length > 0 ? (
            catering.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td className="text-center text-nowrap" style={{ width: '150px' }}>
                  <Button
                    variant="warning"
                    onClick={() => handleEditCatering(item)}
                    className="me-1"
                    size="sm"
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteCatering(item.id)}
                    size="sm"
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No catering items found</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Events Tabla */}
      <h2 className="mt-4">Eventos</h2>
      <Table striped bordered hover className="table-lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Evento</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th className="text-center">Acciones</th>
            <td colSpan="5" className="text-center">
              <Link to="/createEvents">
                <Button variant="success" size="sm">
                  Añadir
                </Button>
              </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((event) => (
              lugares.map((lugar, lugarIndex) => (
                <tr key={`${event.id}-${lugar.id}-${lugarIndex}`}>
                  <td>{lugar.id}</td>
                  <td>{lugarIndex===0 ? event.name : ""}</td>
                  <td>{lugar.name}</td>
                  <td>{lugar.description}</td>
                  <td className="text-center text-nowrap" style={{ width: '150px' }}>
                    <Button
                      variant="warning"
                      onClick={() => handleEditLugar(lugar)}
                      className="me-1"
                      size="sm"
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteEvent(event.id)}
                      size="sm"
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay eventos disponibles</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Decoration Tabla */}
      <h2 className="mt-4">Decoraciones</h2>
      <Table striped bordered hover className="table-lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th className="text-center">Acciones</th>
            <td colSpan="5" className="text-center">
              <Link to="/createDecoration">
                <Button variant="success" size="sm">
                  Añadir
                </Button>
              </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {decoration.length > 0 ? (
            decoration.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td className="text-center text-nowrap" style={{ width: '150px' }}>
                  <Button
                    variant="warning"
                    onClick={() => handleEditDecoration(item)}
                    className="me-1"
                    size="sm"
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteDecoration(item.id)}
                    size="sm"
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No decorations found</td>
            </tr>
          )}
          
        </tbody>
      </Table>

      {/* Modal de Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'catering' && 'Edit Catering'}
            {modalType === 'event' && 'Edit Event'}
            {modalType === "lugar" && "Edit Lugar"}
            {modalType === 'decoration' && 'Edit Decoration'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (modalType === 'catering') {
                handleSaveCatering();
              } else if (modalType === 'event') {
                handleSaveEvent();
              } else if (modalType === 'decoration') {
                handleSaveDecoration();
              }else if (modalType === 'lugar'){
                handleSaveLugar()
              }
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

