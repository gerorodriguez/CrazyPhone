import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsFillTrash3Fill } from 'react-icons/bs';

function DeleteModal({ deletePublication, id, setselectedId }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async () => {
    setselectedId(id);
    await deletePublication(id);
    setShow(false);
  };

  return (
    <>
      <BsFillTrash3Fill onClick={handleShow} />

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>ADVERTENCIA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Estas seguro que quieres eliminar esta publicacion?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
