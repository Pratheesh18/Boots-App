import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Register.css';

const Register = ({ onRegsiter }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegsiter(formData);
  };

  return (
    <div className="containers">
      <div className="container-1">
        <Container style={{ marginTop: "70px" }}>
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            Registration
          </h2>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label> Username </Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Passoword</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </Form.Group>
            <Button
              style={{
                marginTop: "20px",
                backgroundColor: "blue",
                border: "none",
              }}
              type="submit"
            >
              {" "}
              Register{" "}
            </Button>
          </Form>
          <p style={{ marginTop: "20px" }}>
            Already Have An Account ?{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              {" "}
              Go to Login{" "}
            </Link>
          </p>
        </Container>
      </div>
      <div className="container-2"> Hello </div>
    </div>
  );
};

export default Register;
