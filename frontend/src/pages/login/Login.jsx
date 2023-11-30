import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import ToggleTheme from '../../components/toggleTheme/ToggleTheme';
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme/theme.context";


const Login = () => {
  const { theme } = useContext(ThemeContext);

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

  const handleSubmit = (e) => {
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
    } else {
      console.log('Formulario válido', form);
    }
  };

  useEffect(() => {
    console.log(theme, "soy el use effect")
  }, [theme]);

  useEffect(() => {
    console.log("re render")
  }, []);

  return (
  
    <Container
      data-bs-theme={theme}
      fluid
      className={`d-flex justify-content-center align-items-center vh-100 ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
    >
      <ToggleTheme />

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
