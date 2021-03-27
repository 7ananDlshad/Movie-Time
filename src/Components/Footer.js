import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { databaseRef } from '../firebase';

function Footer() {
  const [feedback, setFeedback] = useState({
    email: '',
    message: '',
  });

  const handleEmail = (e) =>
    setFeedback({ ...feedback, email: e.target.value });
  const handleMessage = (e) =>
    setFeedback({ ...feedback, message: e.target.value });
  //set
  const addFeedback = (e) => {
    e.preventDefault();
    databaseRef.add({
      email: feedback.email,
      message: feedback.message,
    });
    setFeedback({ email: '', message: '' });
  };

  return (
    <footer className="text-light text-center flex-shrink-1 footer-style">
      <p className="py-3">
        Developed with <span className="orange-color">❤</span> by
        <span className="orange-color"> Persevers</span>
      </p>
      <Form onSubmit={addFeedback}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email"
            value={feedback.email}
            onChange={handleEmail}
            required
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="write Your Message"
            value={feedback.message}
            onChange={handleMessage}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </footer>
  );
}
export default Footer;
