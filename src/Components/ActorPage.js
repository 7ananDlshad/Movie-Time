import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";

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
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

  const profileImage = person.profile_path
    ? baseUrl + person.profile_path
    : nullPhoto;

  return (
    <div
    className="flex-grow-1 bg-dark ">
      <Button variant="secondary" onClick={() => history.goBack()}>
        Back
      </Button>
      {person.id && (
        <Container>
          <Row>
            <div className="col-4">
              <img width="100%" alt="posterImage" src={profileImage} />
            </div>
            <div className="col-8 text-white">
              <h5>{person.name}</h5>

              <h5>{person.birthday}</h5>
              <p>{person.biography}</p>
              <h5>{person.place_of_birth}</h5>
            </div>
          </Row>
        </Container>
      )}
      {!person.id && <Spinner animation="border" variant="warning" size="sm" />}
    </div>
  );
}
