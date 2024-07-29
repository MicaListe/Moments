import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser, updateUser, getCatering, deleteCatering, updateCatering, getEvents, updateEvent, deleteEvent, getDecoration, updateDecoration, deleteDecoration } from '../../Redux/actions';
import { Button, Form, Table, Modal } from 'react-bootstrap';

export default function CrudComponent() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const catering = useSelector((state) => state.catering);
  const events = useSelector((state) => state.events);
  const decoration = useSelector((state) => state.decoration);
  
  const [currentUser, setCurrentUser] = useState(null);
  const [currentCatering, setCurrentCatering] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentDecoration, setCurrentDecoration] = useState(null);
  
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
    if (modalType === 'user' && currentUser) {
      setEditedName(currentUser.name || '');
    } else if (modalType === 'catering' && currentCatering) {
      setEditedName(currentCatering.name || '');
    } else if (modalType === 'event' && currentEvent) {
      setEditedName(currentEvent.name || '');
    } else if (modalType === 'decoration' && currentDecoration) {
      setEditedName(currentDecoration.name || '');
    }
  }, [currentUser, currentCatering, currentEvent, currentDecoration, modalType]);

  const handleDeleteUser = (id) => {
    if (window.confirm("¿Estas seguro de eliminar este usuario?")) {
      dispatch(deleteUser(id));
    }
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setModalType('user');
    setShowModal(true);
  };

  const handleSaveUser = () => {
    if (currentUser && editedName.trim()) {
      dispatch(updateUser(currentUser.id, { ...currentUser, name: editedName }));
      setShowModal(false);
      setCurrentUser(null);
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
      dispatch(updateCatering(currentCatering.id, { ...currentCatering, name: editedName }));
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
      dispatch(updateDecoration(currentDecoration.id, { ...currentDecoration, name: editedName }));
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
            <th>Nro</th>
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
                    variant="warning"
                    onClick={() => handleEditUser(user)}
                    className="me-1"
                    size="sm"
                  >
                    Editar
                  </Button>
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
            <th>Nro</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {catering.length > 0 ? (
            catering.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
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
            <th>Nro</th>
            <th>ID</th>
            <th>Nombre</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map((event, index) => (
              <tr key={event.id}>
                <td>{index + 1}</td>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td className="text-center text-nowrap" style={{ width: '150px' }}>
                  <Button
                    variant="warning"
                    onClick={() => handleEditEvent(event)}
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
          ) : (
            <tr>
              <td colSpan="4">No events found</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Decoration Tabla */}
      <h2 className="mt-4">Decoraciones</h2>
      <Table striped bordered hover className="table-lg">
        <thead>
          <tr>
            <th>Nro</th>
            <th>ID</th>
            <th>Descripción</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {decoration.length > 0 ? (
            decoration.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
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
            {modalType === 'user' && 'Edit User'}
            {modalType === 'catering' && 'Edit Catering'}
            {modalType === 'event' && 'Edit Event'}
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
              if (modalType === 'user') {
                handleSaveUser();
              } else if (modalType === 'catering') {
                handleSaveCatering();
              } else if (modalType === 'event') {
                handleSaveEvent();
              } else if (modalType === 'decoration') {
                handleSaveDecoration();
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

