import React, { useState, useEffect } from 'react';
import { Container, Card, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useMutation } from '@apollo/client';
import { ADD_FORM } from '../utils/mutations'



const AdoptForm = () => {
  const [userFormData, setUserFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    userState: '',
    zip: '',
    email: '',
    dogName: '',
    message: ''
  })
  const [addData, { error }] = useMutation(ADD_FORM)
  const handleInput = (e) => {
    const { name, value } = e.target
    setUserFormData({...userFormData, [name]: value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    try {
      const { data } = await addData({
        variables: {...userFormData},
      });
      console.log(data)
  } catch (err) {
      console.log(err)
  }}
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Card>
          <FormGroup row>
            <Label for="exampleEmail">First Name</Label>
            <Col sm={10}>
            <Input type="fname" name="firstName" id="First" value={userFormData.firstName} placeholder="First name" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail">Last Name</Label>
            <Col sm={10}>
            <Input type="lname" name="lastName" id="Last" value={userFormData.lastName} placeholder="Last name" />
            </Col>
            </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail">Street Address</Label>
            <Col sm={10}>
            <Input type="address" name="street" id="Address" value={userFormData.street} placeholder="Street address" />
            </Col>
            </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail">City</Label>
            <Col sm={10}>
            <Input type="city" name="city" id="City" value={userFormData.city} placeholder="City" />
            </Col>
            </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail">State</Label>
            <Col sm={10}>
            <Input type="stateL" name="userState" id="State" value={userFormData.userState} placeholder="State" />
            </Col>
            </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail">Zip Code</Label>
            <Col sm={10}>
            <Input type="zip" name="zip" id="Zip" value={userFormData.zip} placeholder="Zip code" />
            </Col>
            </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail">Email</Label>
            <Col sm={10}>
            <Input type="nemail" name="email" id="Email" value={userFormData.email} placeholder="Email" />
            </Col>
            </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail">Name of dog that you're interested in</Label>
            <Col sm={10}>
            <Input type="dogname" name="dogName" id="Dog" value={userFormData.dogName} placeholder="Name of dog" />
            </Col>
            </FormGroup>
          <FormGroup row>
          <Label for="exampleText">Is there anything we need to know about your home to ensure this adoption would be a good fit?</Label>
          <Col sm={10}>
          <Input type="textarea" name="message" value={userFormData.message} id="Info" />
          </Col>
          </FormGroup>
          <Button row center>Proceed to checkout!</Button>
          </Card>
        </Container>
      </Form>
    )
  }
  export default AdoptForm