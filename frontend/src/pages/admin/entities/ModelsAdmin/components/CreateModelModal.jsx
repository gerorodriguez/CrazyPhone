import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

const CreateModelModal = ({onSubmit, isLoading, brands}) => {

    const [formValues, setFormValues] = useState({
        modelName: '',
        brandId: '',
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const save = () => {
        onSubmit({
            modelName: formValues.modelName,
            brand: {
                id: formValues.brandId,
                brandName: brands.filter(b => b.id.toString() === formValues.brandId).map(b => b.brandName)[0]
            }
        });
        setFormValues({brandId: '', modelName: ''});
        handleClose();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({...formValues, [name]: value});
    }

    const handleSelectChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues({...formValues, [name]: value});    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Crear Modelo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Modelo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre Modelo</Form.Label>
                            <Form.Control
                                name="modelName"
                                type="text"
                                placeholder="Nueva Modelo"
                                autoFocus
                                onChange={handleChange}
                                value={formValues.modelName}
                            />
                        </Form.Group>
                        <Form.Group controlId="brand" className="mb-3">
                            <Form.Label>Marca del Modelo</Form.Label>
                            <Form.Select
                                name="brandId"
                                value={formValues.brandId}
                                onChange={handleSelectChange}
                            >
                                <option value="">Seleccione una marca</option>
                                {brands.map((brand) => (
                                    <option key={brand.id} value={brand.id}>
                                        {brand.brandName}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={save} type="submit" disabled={isLoading || (formValues.modelName.length < 0 && formValues.brandId)}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModelModal;