import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';

const CreateBrandModal = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    brandName: '',
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const save = () => {
    onSubmit(formValues);
    setFormValues({ brandName: '' });
    handleClose();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Crear Marca
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Marca</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                name="brandName"
                type="text"
                placeholder="Nueva Marca"
                autoFocus
                onChange={handleChange}
                value={formValues.brandName}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={save}
            type="submit"
            disabled={formValues.brandName.length < 0}
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateBrandModal;
