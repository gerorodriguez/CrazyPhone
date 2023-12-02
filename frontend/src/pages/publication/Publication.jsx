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
    Apple: [
    'iPhone 5',
    'iPhone 5s',
    'iPhone 5c',
    'iPhone 6',
    'iPhone 6 Plus',
    'iPhone 6s',
    'iPhone 6s Plus',
    'iPhone SE (primera generación)',
    'iPhone 7',
    'iPhone 7 Plus',
    'iPhone 8',
    'iPhone 8 Plus',
    'iPhone X',
    'iPhone XS',
    'iPhone XS Max',
    'iPhone XR',
    'iPhone 11',
    'iPhone 11 Pro',
    'iPhone 11 Pro Max',
    'iPhone SE (segunda generación)',
    'iPhone 12 mini',
    'iPhone 12',
    'iPhone 12 Pro',
    'iPhone 12 Pro Max',
    'iPhone 13 mini',
    'iPhone 13',
    'iPhone 13 Pro',
    'iPhone 13 Pro Max',
    'Iphone 14',
    'Iphone 14 Plus',
    'Iphone 14 Pro',  
    'Iphone 14 Pro Max',
    'Iphone 15',
    'Iphone 15 Plus',
    'Iphone 15 Pro',
    'Iphone 15 Pro Max',
    ],
    Samsung: [
      'Samsung Galaxy S4 (2013)',
      'Samsung Galaxy Note 3 (2013)',
      'Samsung Galaxy S5 (2014)',
      'Samsung Galaxy Note 4 (2014)',
      'Samsung Galaxy S6 (2015)',
      'Samsung Galaxy S6 Edge (2015)',
      'Samsung Galaxy Note 5 (2015)',
      'Samsung Galaxy S7 (2016)',
      'Samsung Galaxy S7 Edge (2016)',
      'Samsung Galaxy Note 7 (2016)',
      'Samsung Galaxy S8 (2017)',
      'Samsung Galaxy S8+ (2017)',
      'Samsung Galaxy Note 8 (2017)',
      'Samsung Galaxy S9 (2018)',
      'Samsung Galaxy S9+ (2018)',
      'Samsung Galaxy Note 9 (2018)',
      'Samsung Galaxy S10e (2019)',
      'Samsung Galaxy S10 (2019)',
      'Samsung Galaxy S10+ (2019)',
      'Samsung Galaxy Note 10 (2019)',
      'Samsung Galaxy Note 10+ (2019)',
      'Samsung Galaxy S20 (2020)',
      'Samsung Galaxy S20+ (2020)',
      'Samsung Galaxy S20 Ultra (2020)',
      'Samsung Galaxy Note 20 (2020)',
      'Samsung Galaxy Note 20 Ultra (2020)',
      'Samsung Galaxy S21 (2021)',
      'Samsung Galaxy S21+ (2021)',
      'Samsung Galaxy S21 Ultra (2021)',
      'Samsung Galaxy Z Fold 2 (2020)',
      'Samsung Galaxy Z Flip (2020)',
      'Samsung Galaxy Z Fold 3 (2021)',
    ],
    Xiaomi: ['Mi 11', 'Mi 10', 'Redmi Note 10'],
    Oppo: ['Oppo Find X3', 'Oppo Reno 6', 'Oppo A94'],
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    setFormErrors({ ...formErrors, [id]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

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
    // Agregar logica
    console.log('Adding image...');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formValues);
    } else {
      console.log('Form validation failed.');
    }
  };

  const [imagenes, setImagenes] = useState([]);

  const handleFileChange = (event) => {
    const archivos = event.target.files;
    const nuevasImagenes = Array.from(archivos).map((archivo) => ({
      src: URL.createObjectURL(archivo),
      id: Math.random().toString(36).substr(2, 9), // Generar un ID único para la imagen
    }));
    setImagenes((prevImagenes) => [...prevImagenes, ...nuevasImagenes]);
  };

  const handleEliminarImagen = (id) => {
    // Filtrar las imágenes para mantener solo las que no tienen el ID dado
    setImagenes((prevImagenes) => prevImagenes.filter((imagen) => imagen.id !== id));
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <Row>
        <Col md={6}>
          <Form.Group controlId="titulo" className="mb-3">
            <Form.Label>Título de la publicación</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese un título"
              onChange={handleInputChange}
            />
            <Form.Text className="text-danger">{formErrors.titulo}</Form.Text>
          </Form.Group>
        </Col>
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
            <Form.Text className="text-danger">{formErrors.marca}</Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="precio" className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese un precio"
              onChange={handleInputChange}
            />
            <Form.Text className="text-danger">{formErrors.precio}</Form.Text>
          </Form.Group>
        </Col>
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
            <Form.Text className="text-danger">{formErrors.modelo}</Form.Text>
          </Form.Group>
        </Col>
        </Row>
     	<Row>
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
            <Form.Text className="text-danger">
              {formErrors.capacidad}
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="instagram" className="mb-3">
            <Form.Label>Instagram</Form.Label>
            <Form.Control
              type="text"
              placeholder="@instagram"
              onChange={handleInputChange}
            />
            <Form.Text className="text-danger">
              {formErrors.instagram}
            </Form.Text>
          </Form.Group>
        </Col>
      	</Row>
      	<Row>
        <Col md={6}>
          <Form.Group controlId="descripcion" className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese una descripción"
              onChange={handleInputChange}
            />
            <Form.Text className="text-danger">
              {formErrors.descripcion}
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="telefono" className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ingrese un número de teléfono"
              onChange={handleInputChange}
            />
            <Form.Text className="text-danger">{formErrors.telefono}</Form.Text>
          </Form.Group>
        </Col>
      	</Row>
      	{/* Cuadrado para agregar imágenes */}
      	{imagenes.length === 0 && (
        <Col md={6}>
          <Form.Group controlId="imagenes" className="mb-3">
            <Form.Label>Imágenes</Form.Label>
            <Row className="mb-2">
              <Col md={6}>
                <label htmlFor="file" style={{ width: '171px', height: '180px' }}>
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      border: '2px dashed #ccc',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      style={{ fontSize: '24px', marginBottom: '8px' }}
                      onClick={() => document.getElementById('file').click()}
                    >
                      +
                    </span>
                    <span>Agregar Imágenes</span>
                  </div>
                </label>
                <input
                  type="file"
                  id="file"
                  accept="image/png, image/jpeg"
                  multiple
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </Col>
            </Row>
          </Form.Group>
        </Col>
      )}



      {/* Visualizar imágenes con opción de eliminar */}
      {imagenes.map((imagen) => (
        <Col key={imagen.id} md={2}>
          <div style={{ position: 'relative', marginBottom: '10px' }}>
            <span
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                cursor: 'pointer',
                fontSize: '18px',
                color: 'red',
              }}
              onClick={() => handleEliminarImagen(imagen.id)}
            >
              X
            </span>
            <img
              src={imagen.src}
              alt={`Imagen ${imagen.id}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Col>
      ))}
        
    </Form>
  );
};

export default Publication;
