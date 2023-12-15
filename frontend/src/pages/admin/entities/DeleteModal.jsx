import {useState} from "react";
import {Button, Modal} from "react-bootstrap";

const DeleteModal = ({onDelete, onDeletionSuccess, id, name, setSelectedId}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = async () => {
        setSelectedId(id)
        await onDelete(id);
        setShow(false);
        onDeletionSuccess();
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Eliminar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Esta seguro de eliminar el registro?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
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