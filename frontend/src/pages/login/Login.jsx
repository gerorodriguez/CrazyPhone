import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Spinner } from 'react-bootstrap';
import { authenticate } from '../../services/AuthService.js';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.jsx';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { getAccount } from '../../services/AccountService.js';
import styled from 'styled-components';
import { APIContext } from '../../services/ApiContext.jsx';

const Login = () => {
  const navigate = useNavigate();
  const { login, saveAuthorities } = useAuthContext();
  const { theme } = useContext(ThemeContext);
  const { isLoading, toggleLoading } = useContext(APIContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState(false);

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

    toggleLoading(true);

    try {
      const token = await authenticate(form);

      login(token);

      const account = await getAccount();

      saveAuthorities(account.authorities);

      toggleLoading(false);

      navigate('/');

    } catch (error) {
      console.error('Error durante la autenticación');
      setAuthError(true);
    }
  };

  return (
    <Container
      data-bs-theme={theme}
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      {!isLoading ? (
      <>
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
                    {authError && !errors.email && !errors.password && (
                      <ErrorStyled>
                        Email y/o contraseña incorrectos
                      </ErrorStyled>
                    )}
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

                  <div className="mt-5">
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
      </>
      ) : (
      <Spinner style={{position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, margin: "auto"}}/>
      )}
    </Container>
  );
};

export default Login;

const ErrorStyled = styled.span`
  position: absolute;
  top: 170px;
  white-space: nowrap;
  color: #dc3545;
  font-size: 14px;
  width: 100%;
  text-align: center;
`;
