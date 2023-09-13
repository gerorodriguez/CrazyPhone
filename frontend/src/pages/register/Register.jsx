import { useState } from "react";
import { Form, Button, Container, Col, Card } from "react-bootstrap";
import { formFields } from "./FormFields";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
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
  
  
    if (form.fullName.trim() === "") {
      newErrors.fullName = "Name is required";
    }

    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (form.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (form.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (form.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

  
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = validateForm(); 
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", form);
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
              <Col md="6">
                <Form>
                  <Form.Label className="d-flex justify-content-center align-items-center">
                    <h3>Registro</h3>
                  </Form.Label>

                  <Form.Group>
                    {formFields.map((field) => (
                      <div key={field.name} className="mb-2 ">
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          pattern={field.pattern}
                          minLength={field.minLength}
                          maxLength={field.maxLength}
                          onChange={handleChange}
                          className={errors[field.name] ? "is-invalid" : ""}
                        />
                        {errors[field.name] && (
                          <Form.Control.Feedback type="invalid">
                            {errors[field.name]}
                          </Form.Control.Feedback>
                        )}
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
