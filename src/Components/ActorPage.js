import React, { useState, useEffect } from 'react';
import { constructUrl } from './Api';
import { Button, Container, Row, Spinner, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ActorPage(props) {
  let actorId = props.match.params.actorId;
  const history = useHistory();

  const [person, setPerson] = useState({});
  useEffect(() => {
    const SEARCH_URL = constructUrl(`person/${actorId}`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, [actorId]);
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  const nullPhoto =
    'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png';

  const profileImage = person.profile_path
    ? baseUrl + person.profile_path
    : nullPhoto;
  console.log(person);
  return (
    <div className="flex-grow-1 ">
      <Button onClick={() => history.goBack()} className="bg-orange m-2">
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ fontSize: '25px' }}
          className="white-color "
        />
      </Button>
      {person.id && (
        <Container>
          <Row>
            <Col className="col-4" md={4} lg={5} xs={12}>
              <img
                width="100%"
                alt="posterImage"
                src={profileImage}
                className="mb-5"
              />
            </Col>
            <Col className="text-white" md={8} lg={7} xs={12}>
              <h1>{person.name}</h1>

              <small>
                <em>
                  {person.birthday} , {person.place_of_birth}
                </em>
              </small>
              <br />
              <br />
              <p>{person.biography}</p>
              <br />
            </Col>
          </Row>
        </Container>
      )}
      {!person.id && <Spinner animation="border" variant="warning" size="sm" />}
    </div>
  );
}
