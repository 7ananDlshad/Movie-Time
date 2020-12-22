import React,{useContext} from "react";
import MovieItem from "./MovieItem";
import { Row, Col } from "react-bootstrap";
import {StateContext} from "../StateProvider"; 

export default function MoviesGrid() {
  const [state] = useContext(StateContext);

  return (
    <div className="flex-grow-1 container my-4">
      <Row md={3} lg={4} xs={1}>
        {state.movies.map((movie) => (
          <Col key={movie.id}>
            <MovieItem movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
