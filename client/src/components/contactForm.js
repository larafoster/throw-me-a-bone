import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
    Form,
    FormGroup,
    Input,
    Button,
    Alert

} from 'reactstrap';
function ContactForm() {
  const [state, handleSubmit] = useForm("mzbyyngr");
  if (state.succeeded) {
      return <div className="col-md-11"><Alert color="info">
        Thanks for getting in touch!
      </Alert></div>;
  }
  return (
      <>
      <div className="col-md-10">

     <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </FormGroup>
  
       
    <FormGroup>
        <Input type="textarea" name="message" placeholder="Send me a note..." id="message" />
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </FormGroup>
      <Button color="primary" type="submit" disabled={state.submitting}>Submit</Button>
    </Form>
    </div>
    </>
  );
}

export default ContactForm;
