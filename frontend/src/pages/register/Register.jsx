import { useState } from "react";
import { Form, Button, Container, Col, Card } from "react-bootstrap";
import { formFields } from "./FormFields";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
              <Col md="6">
                <Form>
                  <Form.Label className="d-flex justify-content-center align-items-center">
                    Register
                  </Form.Label>

                  <Form.Group>
                    {formFields.map((field) => (
                      <div key={field.name}>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          pattern={field.pattern}
                          minLength={field.minLength}
                          maxLength={field.maxLength}
                          onChange={handleChange}
                        />
                      </div>
                    ))}
                  </Form.Group>

                  <div className="mt-3">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                      className="mb-4 w-100 "
                    >
                      Submit
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
