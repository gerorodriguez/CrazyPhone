import { APIContext } from '../../services/ApiContext';
import { useContext, useEffect, useState } from 'react';
import { Button, Form, Row, Col, Alert, Spinner } from 'react-bootstrap';
import {
  addPublication,
  getPublicationById,
  updatePublication,
} from '../../services/publicationService';
import { useNavigate, useParams } from 'react-router-dom';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { getBrands } from '../../services/BrandService';
import PublicationDetail from '../publicationDetail/PublicationDetail';

const Publication = () => {
  const { theme } = useContext(ThemeContext);

  const { id } = useParams();

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

  const [imagePreview, setImagePreview] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const { isLoading, toggleLoading } = useContext(APIContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [publicationErrors, setPublicationErrors] = useState('');
  const [brands, setBrands] = useState([]);

  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brands = await getBrands();
        console.log('Brands:', brands);
        setBrands(brands);
      } catch (error) {
        console.error('Error al obtener las marcas:', error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    // Si hay un ID en los parámetros, cargar los detalles de la publicación existente
    if (id) {
      const fetchPublicationDetails = async () => {
        try {
          const publicationDetails = await getPublicationById(id);
          setFormValues({
            ...publicationDetails,
            brand: publicationDetails.brand.brandName,
          });
        } catch (error) {
          console.error('Error al obtener detalles de la publicación:', error);
        }
      };

      fetchPublicationDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formValues);
      const data = {
        ...formValues,
        brand: {
          id: brands.find((b) => b.brandName === formValues.brand)?.id,
          brandName: formValues.brand,
        },
      };
      console.log(brands.find((b) => b.name === formValues.brand));
      try {
        toggleLoading(true);
        if (id) {
          await updatePublication(id, data);
          setSuccessMessage('Publicación actualizada con éxito.');
          navigate('/myPublications');
        } else {
          await registerNewPublication(data);
          setSuccessMessage('Nueva publicación creada con éxito.');
          navigate('/');
        }
      } catch (error) {
        console.error('Error al actualizar/crear la publicación:', error);
      }
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
      toggleLoading(false);
      console.log('Publication saved:', savedPublication);
    } catch (error) {
      setPublicationErrors(error.message);
      toggleLoading(false);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className={`p-3 ${
        theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'
      }`}
    >
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
                  value={formValues.title}
                />
                <Form.Text className="text-danger">
                  {formErrors.title}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="price" className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese un precio"
                  onChange={handleInputChange}
                  value={formValues.price}
                />
                <Form.Text className="text-danger">
                  {formErrors.price}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="brand" className="mb-3">
                <Form.Label>Marca</Form.Label>
                <Form.Select
                  value={formValues.brand}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccione una marca</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.brandName}>
                      {brand.brandName}
                    </option>
                  ))}
                </Form.Select>
                <Form.Text className="text-danger">
                  {formErrors.brand}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="model" className="mb-3">
                <Form.Label>Modelo</Form.Label>
                <Form.Select
                  value={formValues.model}
                  onChange={handleInputChange}
                  disabled={!formValues.brand}
                >
                  <option value="">Seleccione un modelo</option>
                  {formValues.brand &&
                    brands
                      .find((brand) => brand.brandName === formValues.brand)
                      ?.models.map((model) => (
                        <option key={model.id} value={model.modelName}>
                          {model.modelName}
                        </option>
                      ))}
                </Form.Select>
                <Form.Text className="text-danger">
                  {formErrors.model}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="storage" className="mb-3">
                <Form.Label>Capacidad</Form.Label>
                <Form.Select
                  value={formValues.storage}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccione su capacidad</option>
                  <option value="64">64GB</option>
                  <option value="128">128GB</option>
                  <option value="256">256GB</option>
                  <option value="512">512GB</option>
                </Form.Select>
                <Form.Text className="text-danger">
                  {formErrors.storage}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="instagramAccount" className="mb-3">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="@instagram"
                  onChange={handleInputChange}
                  value={formValues.instagramAccount}
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
                  value={formValues.description}
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
                  value={formValues.phoneNumber}
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
                <Form.Select value={formValues.state}>
                  <option value="">Seleccione una provincia</option>
                  <option value="Santa Fe">Santa Fe</option>
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Mendoza">Mendoza</option>
                </Form.Select>
                <Form.Text className="text-danger">
                  {formErrors.state}
                </Form.Text>
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
                {id ? 'Actualizar' : 'Publicar'}
              </Button>
            </Col>
          </Row>
          {successMessage && (
            <Alert variant="success" className="mb-3">
              {successMessage}
            </Alert>
          )}
        </>
      ) : (
        <Spinner
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            margin: 'auto',
          }}
        />
      )}
    </Form>
  );
};

export default Publication;
