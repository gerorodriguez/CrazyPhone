import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import { authenticate } from '../../services/AuthService.js';
import { getAccount } from '../../services/AccountService.js';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!form.email.trim()) {
      errors.email = true;
    }
    if (!form.password.trim()) {
      errors.password = true;
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const token = await authenticate(form);

    const role = await getAccount();

    login(token, role);

    navigate('/home');
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 bg-primary"
    >
      <Col md="4">
        <Card>
          <Card.Body className="my-4">
            <Container
              fluid
              className="d-flex justify-content-center align-items-center"
              direction="vertical"
              boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
              zIndex="100"
            >
              <Col md="9">
                <Form>
                  <Form.Label className="d-flex justify-content-center align-items-center">
                    <h3>Iniciar sesión</h3>
                  </Form.Label>

                  <Form.Group
                    style={{ position: 'relative' }}
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="mb-0">Correo electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Ingrese su correo electrónico"
                      value={form.email}
                      onChange={handleInputChange}
                      isInvalid={errors.email}
                    />
                    <Form.Control.Feedback
                      className="mb-3 mt-0"
                      style={{ position: 'absolute' }}
                      type="invalid"
                    >
                      Por favor, ingrese su correo electrónico.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    style={{ position: 'relative' }}
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="mb-0 mt-4">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Ingrese su contraseña"
                      value={form.password}
                      onChange={handleInputChange}
                      isInvalid={errors.password}
                    />
                    <Form.Control.Feedback
                      className="mb-3 mt-0"
                      style={{ position: 'absolute' }}
                      type="invalid"
                    >
                      Por favor, ingrese su contraseña.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="mt-3">
                    <Button
                      variant="primary"
                      type="submit"
                      className="mb-4 w-100 mt-3"
                      onClick={handleSubmit}
                    >
                      Entrar
                    </Button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <span>¿No tienes una cuenta?</span>
                    <Button variant="link" href="/register">
                      Registrarse
                    </Button>
                  </div>
                </Form>
              </Col>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default Login;
