import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const Publication = () => {
  const [formValues, setFormValues] = useState({
    titulo: '',
    marca: '',
    modelo: '',
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
    modelo: '',
    precio: '',
    capacidad: '',
    instagram: '',
    descripcion: '',
    telefono: '',
    provincia: '',
  });

  const availableModels = {
    Apple: ['Iphone 13', 'Iphone 12', 'Iphone X'],
    Samsung: [
      'Samsung Galaxy S21',
      'Samsung Galaxy S20',
      'Samsung Galaxy Note 20',
    ],
    Xiaomi: ['Mi 11', 'Mi 10', 'Redmi Note 10'],
    Oppo: ['Oppo Find X3', 'Oppo Reno 6', 'Oppo A94'],
  };

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
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group controlId="titulo" className="mb-3">
        <Form.Label>Título de la publicación</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese un título"
          onChange={handleInputChange}
        />
        <Form.Text className="text-danger">{formErrors.titulo}</Form.Text>
      </Form.Group>
      <Row>
        <Col md={6}>
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
        </Col>
        <Col md={6}>
          <Form.Group controlId="precio" className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese un precio"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="modelo" className="mb-3">
            <Form.Label>Modelo</Form.Label>
            <Form.Select
              onChange={handleInputChange}
              disabled={!formValues.marca}
            >
              {availableModels[formValues.marca]?.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="capacidad" className="mb-3">
            <Form.Label>Capacidad</Form.Label>
            <Form.Select onChange={handleInputChange}>
              <option value="">Seleccione su capacidad</option>
              <option value="32">32GB</option>
              <option value="64">64GB</option>
              <option value="128">128GB</option>
              <option value="256">256GB</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="instagram" className="mb-3">
            <Form.Label>Instagram</Form.Label>
            <Form.Control
              type="text"
              placeholder="@instagram"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="descripcion" className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Ingrese una descripción"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
      <Col md={6}>
      <Form.Group controlId="telefono" className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="tel" placeholder="Ingrese un número de teléfono" />
      </Form.Group>
      </Col>
      <Col md={6}>
      <Form.Group controlId="provincia" className="mb-3 ">
        <Form.Label>Provincia</Form.Label>
        <Form.Select>
          <option value="">Seleccione una provincia</option>
          <option value="Santa Fe">Santa Fe</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Córdoba">Córdoba</option>
          <option value="Mendoza">Mendoza</option>
        </Form.Select>
      </Form.Group>
      </Col>
      </Row>
      <Form.Group controlId="imagenes">
        <Form.Label>Imágenes</Form.Label>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button onClick={() => addImage()} type="button" variant="secondary">
            Agregar imagen
          </Button>
          <div>
            <Button variant="danger" type="submit" className="mx-2">
              Cancelar
            </Button>
            <Button variant="secondary" type="submit">
              Publicar
            </Button>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
};

export default Publication;
