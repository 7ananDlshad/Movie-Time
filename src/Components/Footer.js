import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { databaseRef } from '../firebase';
import logo from '../images/logo.webp';

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
      <Row className="mx-5 my-3">
        <Col>
          <h2>Find Us</h2>
          <div>
            <a href="https://www.linkedin.com/in/hanandlshad/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: '35px' }}
                className="white-color"
              />
            </a>
            <a href="https://github.com/7ananDlshad" target="_blank">
              <FontAwesomeIcon
                icon={faGithubSquare}
                style={{ fontSize: '35px' }}
                className="white-color mx-3"
              />
            </a>

            <a href="https://twitter.com/7ananTaha" target="_blank">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                style={{ fontSize: '35px' }}
                className="white-color"
              />
            </a>
          </div>
          <h2 className="mt-5">E-mail</h2>
          <div>
            <p>info@movie.com</p>
          </div>
          {/* <h2>Our Team</h2>
          <ol>
            <li className="py-3 size-of-li">
              Hanan Dlshad&nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: '25px' }}
                className="orange-color"
              />
            </li>

            <li className="pb-3 size-of-li">
              Shna Rafeeq&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: '25px' }}
                className="orange-color"
              />
            </li>
            <li className="pb-3 size-of-li">
              Azhin Rashid&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: '25px' }}
                className="orange-color"
              />
            </li>
            <li className="pb-3 size-of-li">
              Eman Yusef&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: '25px' }}
                className="orange-color"
              />
            </li>
            <li className="size-of-li">
              Sara Khalil&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ fontSize: '25px' }}
                className="orange-color"
              />
            </li>
          </ol> */}
        </Col>
        <Col>
          <h2 className="mb-3">Contact Us</h2>
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
      <p className="py-3 pl-5">
        Developed with <span className="orange-color">❤</span> by
        <span className="orange-color"> Persevers</span>
      </p>
    </footer>
  );
}
export default Footer;
