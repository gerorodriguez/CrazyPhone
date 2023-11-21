import { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

// ... (importaciones y useState)

const Publication = () => {
  const [formValues, setFormValues] = useState({
    titulo: '',
    marca: '',
    precio: '',
    capacidad: '',
    instagram: '',
    descripcion: '',
    telefono: '',
    provincia: '',
  });

  const [formErrors, setFormErrors] = useState({
    titulo: '',
    marca: '',
    precio: '',
    capacidad: '',
    instagram: '',
    descripcion: '',
    telefono: '',
    provincia: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    // Clear the corresponding error when the user starts typing
    setFormErrors({ ...formErrors, [id]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Perform your validation logic here
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        newFormErrors[key] = 'Este campo es obligatorio';
        isValid = false;
      }
    });

    setFormErrors(newFormErrors);
    return isValid;
  };

  const addImage = () => {
    // Implement the logic for adding an image
    console.log('Adding image...');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform the submit action here
      console.log('Form submitted:', formValues);
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="titulo" className="mb-3">
          <Form.Label>Título de la publicación</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un título"
            onChange={handleInputChange}
          />
          <Form.Text className="text-danger">{formErrors.titulo}</Form.Text>
        </Form.Group>
        <Form.Group controlId="marca" className="mb-3">
          <Form.Label>Marca</Form.Label>
          <Form.Select onChange={handleInputChange}>
            <option value="">Seleccione una marca</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Oppo">Oppo</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="precio" className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Ingrese un precio" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="capacidad" className="mb-3">
          <Form.Label>Capacidad</Form.Label>
          <Form.Control type="number" placeholder="Ingrese una capacidad" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="instagram" className="mb-3">
          <Form.Label>Instagram</Form.Label>
          <Form.Control type="text" placeholder="@instagram" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group controlId="descripcion" className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control type="textarea" placeholder="Ingrese una descripción" />
        </Form.Group>
        <Form.Group controlId="telefono" className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="tel" placeholder="Ingrese un teléfono" />
        </Form.Group>
        <Form.Group controlId="provincia" className="mb-3">
          <Form.Label>Provincia</Form.Label>
          <Form.Select>
            <option value="">Seleccione una provincia</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Mendoza">Mendoza</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="imagenes">
          <Form.Label>Imágenes</Form.Label>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button
              onClick={() => addImage()}
              type="button"
              variant="secondary"
            >
              Agregar imagen
            </Button>
            <Button variant="secondary" type="submit">
              Publicar
            </Button>
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Publication;

