// see SignupForm.js for comments

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <>
    <Container>
        <Row className="justify-content-md-center mt-250">
     <Col xs={12} md={5}>
    <Card className="mt-5">
     <Card.Header><h3>Login Form</h3></Card.Header>
     <Card.Body>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
         <h5>Dog-gone-it!</h5>
          Something went wrong with your login credentials!
        </Alert>

        <Form.Group>
          <Form.Control
            type="text"
            className="my-2"
            size="lg"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="password"
            className="my-2"
            size="lg"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="mt-3"
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
      </Card.Body>
       </Card>
       </Col>
       </Row>
      </Container>
    </>
  );
};

export default LoginForm;
