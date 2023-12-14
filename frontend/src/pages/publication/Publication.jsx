import { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { addPublication } from '../../services/publicationService';
import { APIContext } from '../../services/ApiContext';

const Publication = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    brand: '',
    model: '',
    price: '',
    storage: '',
    instagramAccount: '',
    description: '',
    phoneNumber: '',
    state: '',
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    brand: '',
    model: '',
    price: '',
    storage: '',
    instagramAccount: '',
    description: '',
    phoneNumber: '',
    state: '',
  });

  const [publicationErrors, setPublicationErrors] = useState();
  const [imagePreview, setImagePreview] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const { isLoading } = useContext(APIContext);

  const availableModels = {
    Apple: [
      'Iphone 15 Pro Max',
      'Iphone 15 Pro',
      'Iphone 15 Plus',
      'Iphone 15',
      'Iphone 14 Pro Max',
      'Iphone 14 Pro',
      'Iphone 14 Plus',
      'Iphone 14',
      'iPhone 13 Pro Max',
      'iPhone 13 Pro',
      'iPhone 13',
      'iPhone 13 mini',
      'iPhone 12 Pro Max',
      'iPhone 12 Pro',
      'iPhone 12',
      'iPhone 12 mini',
      'iPhone SE (segunda generación)',
      'iPhone 11 Pro Max',
      'iPhone 11 Pro',
      'iPhone 11',
      'iPhone XR',
      'iPhone XS Max',
      'iPhone XS',
      'iPhone X',
      'iPhone 8 Plus',
      'iPhone 8',
      'iPhone 7 Plus',
      'iPhone 7',
      'iPhone SE (primera generación)',
      'iPhone 6s Plus',
      'iPhone 6s',
      'iPhone 6 Plus',
      'iPhone 6',
      'iPhone 5c',
      'iPhone 5s',
      'iPhone 5',
    ],
    Samsung: [
      'Samsung Galaxy Z Fold 3',
      'Samsung Galaxy Z Flip',
      'Samsung Galaxy Z Fold 2',
      'Samsung Galaxy S21 Ultra',
      'Samsung Galaxy S21+',
      'Samsung Galaxy S21',
      'Samsung Galaxy Note 20 Ultra',
      'Samsung Galaxy Note 20',
      'Samsung Galaxy S20 Ultra',
      'Samsung Galaxy S20+',
      'Samsung Galaxy S20',
      'Samsung Galaxy Note 10+',
      'Samsung Galaxy Note 10',
      'Samsung Galaxy S10+',
      'Samsung Galaxy S10',
      'Samsung Galaxy S10e',
      'Samsung Galaxy Note 9',
      'Samsung Galaxy S9+',
      'Samsung Galaxy S9',
      'Samsung Galaxy Note 8',
      'Samsung Galaxy S8+',
      'Samsung Galaxy S8',
      'Samsung Galaxy Note 7',
    ],
    Xiaomi: ['Mi 11', 'Mi 10', 'Redmi Note 10'],
    Oppo: ['Oppo Find X3', 'Oppo Reno 6', 'Oppo A94'],
  };

  const handleImageRemove = (index) => {
    const newSelectedImages = [...selectedImages];
    const newImagePreview = [...imagePreview];

    newSelectedImages.splice(index, 1);
    newImagePreview.splice(index, 1);

    setSelectedImages(newSelectedImages);
    setImagePreview(newImagePreview);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;

    // Create an array of objects URL for image preview
    const previewImages = Array.from(files).map((file) =>
      URL.createObjectURL(file),
    );

    // Update the state with both selected and preview images
    setSelectedImages((prevSelectedImages) => [
      ...prevSelectedImages,
      ...files,
    ]);
    setImagePreview((prevPreviewImages) => [
      ...prevPreviewImages,
      ...previewImages,
    ]);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formValues);
      registerNewPublication(formValues);
    } else {
      console.log('Form validation failed.');
    }
  };

  const registerNewPublication = async (newPublication) => {
    try {
      const savedPublication = await addPublication(
          newPublication,
          selectedImages,
      );
      console.log('Publication saved:', savedPublication);
    } catch (error) {
      setPublicationErrors(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      {!isLoading ? (
      <>
      <Row>
        <Col md={6}>
          <Form.Group controlId="title" className="mb-3">
            <Form.Label>Título de la publicación</Form.Label>
            <Form.Control
              controlId="titulo"
              type="text"
              placeholder="Ingrese un título"
              onChange={handleInputChange}
            />
            <Form.Text className="text-danger">{formErrors.title}</Form.Text>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="price" className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese un precio"
              onChange={handleInputChange}
            />
            <Form.Text className="text-danger">{formErrors.price}</Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="brand" className="mb-3">
            <Form.Label>Marca</Form.Label>
            <Form.Select onChange={handleInputChange}>
              <option value="">Seleccione una marca</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Oppo">Oppo</option>
            </Form.Select>
            <Form.Text className="text-danger">{formErrors.brand}</Form.Text>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="model" className="mb-3">
            <Form.Label>Modelo</Form.Label>
            <Form.Select
              onChange={handleInputChange}
              disabled={!formValues.brand}
            >
              {availableModels[formValues.brand]?.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </Form.Select>
            <Form.Text className="text-danger">{formErrors.model}</Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="storage" className="mb-3">
            <Form.Label>Capacidad</Form.Label>
            <Form.Select onChange={handleInputChange}>
              <option value="">Seleccione su capacidad</option>
              <option value="32">32GB</option>
              <option value="64">64GB</option>
              <option value="128">128GB</option>
              <option value="256">256GB</option>
            </Form.Select>
            <Form.Text className="text-danger">{formErrors.storage}</Form.Text>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="instagramAccount" className="mb-3">
            <Form.Label>Instagram</Form.Label>
            <Form.Control
              type="text"
              placeholder="@instagram"
              onChange={handleInputChange}
            />
            <Form.Text className="text-danger">
              {formErrors.instagramAccount}
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="description" className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese una descripción"
              onChange={handleInputChange}
            />
            <Form.Text className="text-danger">
              {formErrors.description}
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="phoneNumber" className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ingrese un número de teléfono"
              onChange={handleInputChange}
            />
            <Form.Text className="text-danger">
              {formErrors.phoneNumber}
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group
            controlId="state"
            className="mb-3 "
            onChange={handleInputChange}
          >
            <Form.Label>Provincia</Form.Label>
            <Form.Select>
              <option value="">Seleccione una provincia</option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Mendoza">Mendoza</option>
            </Form.Select>
            <Form.Text className="text-danger">{formErrors.state}</Form.Text>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="imagenes" className="mb-3">
            <Form.Label>Imágenes</Form.Label>
            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  type="file"
                  id="file"
                  accept="image/png, image/jpeg"
                  multiple
                  onChange={handleFileChange}
                />
              </Col>
            </Row>
            {imagePreview.length > 0 && (
              <Row>
                {imagePreview.map((previewUrl, index) => (
                  <Col key={index} md={3}>
                    <div style={{ position: 'relative' }}>
                      <img
                        src={previewUrl}
                        alt={`Preview ${index}`}
                        style={{ width: '100%' }}
                      />
                      <Button
                        variant="danger"
                        size="sm"
                        style={{
                          position: 'absolute',
                          top: '0',
                          right: '0',
                        }}
                        onClick={() => handleImageRemove(index)}
                      >
                        X
                      </Button>
                    </div>
                  </Col>
                ))}
              </Row>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end mb-3">
        <Col xs="auto">
          <Button variant="danger" href="/" className="mx-3">
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            Publicar
          </Button>
        </Col>
      </Row>
      </>
      ) : (
        <div>hola</div>
      )}
    </Form>
  );
};

export default Publication;
