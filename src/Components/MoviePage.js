import React, { useState, useEffect } from 'react';
import { constructUrl } from './Api';
import {
  Button,
  Badge,
  Container,
  Row,
  Spinner,
  Col,
  Carousel,
  Card,
} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../App.css';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MoviePage(props) {
  const history = useHistory();
  const [movie, setMovie] = useState('');
  const [trailers, setTrailers] = useState([]);
  const [actors, setActors] = useState([]);

  let movie_id = props.match.params.id;
  let SEARCH_URL;

  useEffect(() => {
    async function fetchData() {
      // You can await here
      // eslint-disable-next-line react-hooks/exhaustive-deps
      SEARCH_URL = constructUrl(`movie/${movie_id}`);
      let res = await fetch(SEARCH_URL);
      let data = await res.json();

      SEARCH_URL = constructUrl(`movie/${movie_id}/videos`);
      let resTrailer = await fetch(SEARCH_URL);
      let dataTrailer = await resTrailer.json();
      const tmp = [];
      dataTrailer.results.map(function (trailer) {
        tmp.push(`https://www.youtube.com/watch?v=${trailer.key}`);
        return tmp;
      });
      setTrailers(tmp);

      SEARCH_URL = constructUrl(`movie/${movie_id}/credits`);
      let resActors = await fetch(SEARCH_URL);
      let dataActors = await resActors.json();
      let actors = dataActors.cast;

      setActors(actors);
      setMovie(data);
    }
    fetchData();
  }, [movie_id]);

  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const nullPhoto =
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';

  const posterImage = movie.poster_path
    ? baseUrl + movie.poster_path
    : nullPhoto;

  return (
    <div>
      <div
        className="flex-grow-1"
        style={{
          backgroundImage: `url(${
            movie.backdrop_path !== null
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : nullPhoto
          })`,
          backgroundSize: 'cover',
          width: '100%',
          position: 'relative',
        }}
      >
        <div className="mask">
          <Button onClick={() => history.goBack()} className="bg-orange m-2">
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ fontSize: '25px' }}
              className="white-color "
            />
          </Button>
        </div>
        {movie.id && (
          <Container>
            <Row>
              <div className="col-4 my-5">
                <img width="100%" alt="posterImage" src={posterImage} />
              </div>
              <div className="col-6 text-white my-5">
                <h1>{movie.original_title}</h1>
                <small style={{ fontWeight: 'lighter' }}>
                  <em>{movie.tagline}</em>
                </small>
                <br /> <br />
                <h3>Overview:</h3>
                <h5>" {movie.overview} "</h5>
                <br />
                <br />
                {movie.genres
                  ? movie.genres.map((genre) => {
                      return (
                        <Badge
                          style={{ marginRight: '20px', marginLeft: '10px' }}
                          className="bg-orange"
                        >
                          {genre.name}
                        </Badge>
                      );
                    })
                  : null}
              </div>
            </Row>
          </Container>
        )}
        {!movie.id && (
          <Spinner animation="border" variant="warning" size="sm" />
        )}
      </div>
      <div className="my-5">
        <Col sm={12} className="CarouselCol" align="middle">
          <Carousel className="Carousel" style={{ zIndex: 3 }}>
            {trailers.map((v, i) => {
              return (
                <Carousel.Item>
                  <ReactPlayer width="100%" key={`haha-${i}`} url={v} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </div>

      <div className="card-container m-3">
        {actors.map((actor) => {
          return (
            <Link
              key={actor.id}
              to={`/person/${actor.id}`}
              className="links"
              style={{ margin: '5px' }}
            >
              <Card
                key={'1' + actor.id}
                style={{ width: '150px' }}
                className="mb-4"
              >
                <Card.Img
                  src={
                    actor.profile_path !== null
                      ? baseUrl + actor.profile_path
                      : nullPhoto
                  }
                  style={{
                    width: '100%',
                    height: '15wh',
                    minHeight: '220px',
                    objectFit: 'cover',
                  }}
                />
                <Card.Body>
                  <Card.Title
                    className="white-color titles"
                    style={{ fontSize: '13px' }}
                  >
                    {`${actor.name}`.substr(0, 14)}
                    {actor.name.length >= 16 ? '...' : ''}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
