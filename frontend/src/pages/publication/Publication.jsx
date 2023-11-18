import { Button, Form, Container } from 'react-bootstrap';

const Publication = () => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="titulo" className="mb-3">
          <Form.Label>Título de la publicación</Form.Label>
          <Form.Control type="text" placeholder="Ingrese un título" />
        </Form.Group>
        <Form.Group controlId="marca" className="mb-3">
          <Form.Label>Marca</Form.Label>
          <Form.Select>
            <option value="">Seleccione una marca</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Oppo">Oppo</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="precio" className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Ingrese un precio" />
        </Form.Group>
        <Form.Group controlId="capacidad" className="mb-3">
          <Form.Label>Capacidad</Form.Label>
          <Form.Control type="number" placeholder="Ingrese una capacidad" />
        </Form.Group>
        <Form.Group controlId="instagram" className="mb-3">
          <Form.Label>Instagram</Form.Label>
          <Form.Control type="text" placeholder="@instagram" />
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
          <div>
            <Button
              className="mb-3"
              onClick={() => this.addImage()}
              type="button"
              variant="primary"
            >
              Agregar imagen
            </Button>
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Publicar
        </Button>
      </Form>
    </Container>
  );
};

export default Publication;
