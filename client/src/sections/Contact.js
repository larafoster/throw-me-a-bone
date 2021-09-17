import React from "react";

import ContactForm from "../components/contactForm.js";
const Contact = () => {
  return (
    <>
      <div id="contact" className="contact-section bg-color section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-title">
                <h1>Contact Us</h1>
              </div>
              <ContactForm />
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
