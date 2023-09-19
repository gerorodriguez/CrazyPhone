import { useState } from 'react';
import { Button, Card, Col, Container, Form } from 'react-bootstrap';
import { formFields } from './FormFields.js';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (form.fullName.trim() === '') {
      newErrors.fullName = 'Por favor, ingrese su nombre';
    }

    if (form.email.trim() === '') {
      newErrors.email = 'Email invalido';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Email invalido';
    }

    if (form.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Ingrese su número de teléfono';
    }

    if (form.password.trim() === '') {
      newErrors.password = 'Por favor, ingrese su contraseña';
    }

    if (form.confirmPassword.trim() === '') {
      newErrors.confirmPassword = 'Por favor, repita su contraseña';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'La contraseña no coincide';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
     e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted', form);
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100 bg-primary"
    >
      <Col md="4">
        <Card>
          <Card.Body>
            <Container
              fluid
              className="d-flex justify-content-center align-items-center"
              direction="vertical"
              boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
              zIndex="100"
            >
              <Col md="9">
                <Form  onSubmit={handleSubmit}>
                  <Form.Label className="d-flex justify-content-center align-items-center">
                    <h3>Registrarse</h3>
                  </Form.Label>

                  <Form.Group style={{ position: 'relative' }}>
                    {formFields.map((field) => (
                      <div key={field.name} className="mb-4">
                        <Form.Label className="mb-0">{field.label}</Form.Label>
                        <Form.Control
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          pattern={field.pattern}
                          minLength={field.minLength}
                          maxLength={field.maxLength}
                          onChange={handleChange}
                          onInput={() => {
                            const updatedErrors = { ...errors };
                            delete updatedErrors[field.name];
                            setErrors(updatedErrors);
                          }}
                          className={errors[field.name] ? 'is-invalid' : ''}
                        />
                        {errors[field.name] && (
                          <Form.Control.Feedback
                            className="mb-3 mt-0"
                            style={{ position: 'absolute' }}
                            type="invalid"
                          >
                            {errors[field.name]}
                          </Form.Control.Feedback>
                        )}
                      </div>
                    ))}
                  </Form.Group>

                  <div className="mt-3">
                    <Button
                      variant="primary"
                      type='submit'
                      className="mb-4 w-100 mt-3"
                    >
                      Entrar
                    </Button>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <span>¿Ya tienes una cuenta?</span>
                    <a href="/login">Iniciar sesión</a>
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

export default Register;
