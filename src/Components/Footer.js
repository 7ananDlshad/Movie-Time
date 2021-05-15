/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { databaseRef } from '../firebase';

import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <footer className="text-light footer-style">
      <Row className="mx-1 my-3">
        <Col lg={6} md={6} xs={12} className="pb-5">
          <h3>Find Us</h3>
          <div>
            <a href="https://www.linkedin.com/in/hanandlshad/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: '25px' }}
                className="white-color"
              />
            </a>
            <a href="https://github.com/7ananDlshad" target="_blank">
              <FontAwesomeIcon
                icon={faGithubSquare}
                style={{ fontSize: '25px' }}
                className="white-color mx-3"
              />
            </a>

            <a href="https://twitter.com/7ananTaha" target="_blank">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                style={{ fontSize: '25px' }}
                className="white-color"
              />
            </a>
          </div>
          <h3 className="mt-5">E-mail</h3>
          <div>
            <p>info@movie.com</p>
          </div>
        </Col>
        <Col lg={6} md={6} xs={12}>
          <h3 className="mb-3">Contact Us</h3>
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
                rows={5}
                placeholder="write Your Message"
                value={feedback.message}
                onChange={handleMessage}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ float: 'right' }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;
