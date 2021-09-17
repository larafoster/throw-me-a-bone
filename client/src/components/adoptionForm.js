import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AdoptForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">First Name</Label>
        <Input type="fname" name="fname" id="First" placeholder="Please enter your first name." />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Last Name</Label>
        <Input type="lname" name="lname" id="Last" placeholder="Please enter your last name." />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Street Address</Label>
        <Input type="address" name="address" id="Address" placeholder="Please enter you street address." />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">City</Label>
        <Input type="city" name="city" id="City" placeholder="Please enter the city you live in." />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">State</Label>
        <Input type="stateL" name="stateL" id="State" placeholder="Please enter the state you live in." />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Zip Code</Label>
        <Input type="zip" name="zip" id="Zip" placeholder="Please enter your zip code." />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="Email" placeholder="Please enter your email." />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Name of dog that you're interested in</Label>
        <Input type="dogname" name="dogname" id="Dog" placeholder="Please enter the name of the dog you want to adopt!" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Is there anything we need to know about your home to ensure this adoption would be a good fit?</Label>
        <Input type="textarea" name="extrainfo" id="Info" />
      </FormGroup>
      <Button>Submit</Button>
      </Form>
    )
  }