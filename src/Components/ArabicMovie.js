import React, { useEffect, useState } from 'react';
import { constructUrl } from './Api';
import { Row, Col } from 'react-bootstrap';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ArabicMovie() {
  const [movies, setMovies] = useState([]);

  let SEARCH_URL;

  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  const nullPhoto =
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';

  useEffect(() => {
    async function fetchData() {
      // You can await here
      SEARCH_URL = constructUrl('list/457');
      let res = await fetch(SEARCH_URL);
      let data = await res.json();

      setMovies(data.items);
    }
    fetchData();
  }, []);
  return (
    <div className="flex-grow-1 container my-4">
      <Row md={3} lg={4} xs={1}>
        {movies.map((movie) => (
          <Col key={movie.id} className="my-3">
            <Link to={`/Movie/${movie.id}`} className="links">
              <Card key={movie.id} style={{ width: '100%', height: '100%' }}>
                <Card.Img
                  src={
                    movie.poster_path !== null
                      ? baseUrl + movie.poster_path
                      : nullPhoto
                  }
                  className="height-image-card"
                />
                <Card.Body>
                  <Card.Title
                    title={movie.title}
                    className="white-color titles"
                    style={{ fontSize: '18px' }}
                  >
                    {`${movie.title}`.substr(0, 20)}
                    {movie.title.length >= 20 ? '...' : ''}
                  </Card.Title>
                  <div className="badges-place">
                    <Badge className="white-color bg-orange">
                      {movie.release_date}
                    </Badge>
                    <Badge className="white-color bg-orange">
                      Rating: ({movie.vote_average})
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default ArabicMovie;
