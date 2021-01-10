import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MovieItem(props) {
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  const nullPhoto =
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';

  return (
    <Link to={`/Movie/${props.movie.id}`} className="links">
      <Card key={props.movie.id} style={{ width: '100%', height: '100%' }}>
        <Card.Img
          src={
            props.movie.backdrop_path !== null
              ? baseUrl + props.movie.backdrop_path
              : nullPhoto
          }
          className="height-image-card"
        />
        <Card.Body>
          <Card.Title
            title={props.movie.title}
            className="white-color titles"
            style={{ fontSize: '18px' }}
          >
            {`${props.movie.title}`.substr(0, 20)}
            {props.movie.title.length >= 20 ? '...' : ''}
          </Card.Title>
          <div className="badges-place">
            <Badge className="white-color bg-orange">
              {props.movie.release_date}
            </Badge>
            <Badge className="white-color bg-orange">
              Rating: ({props.movie.vote_average})
            </Badge>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
