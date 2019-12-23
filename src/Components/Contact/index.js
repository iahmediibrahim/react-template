import React from 'react';
import {
  ContactSection,
  ContactTitle,
  Form,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  inputSubmit,
  Textarea,
} from './style.js';
import Footer from './../Footer';
const Contact = () => {
  return (
    <React.Fragment>
      <ContactSection>
        <div className="container">
          <ContactTitle>
            <span>Drop </span>Me A line
          </ContactTitle>
          <Form action="">
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputExp type="text" placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message" />
            <inputSubmit type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
