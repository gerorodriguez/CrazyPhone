import {Button, Modal} from "react-bootstrap";
import {useState} from "react";

const DeleteBrandModal = ({onDelete, id, isLoading}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const confirm = () => {
        onDelete(id)
        handleClose();
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Eliminar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Marca</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Seguro que quiere eliminar este registro?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirm} type="submit" disabled={isLoading}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteBrandModal;