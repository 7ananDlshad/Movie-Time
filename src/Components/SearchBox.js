import React, { useState, useContext, useEffect } from 'react';
import { Button, Form, FormControl, Spinner } from 'react-bootstrap';
import DropdownCategories from './DropdownCategories';
import { constructUrl } from './Api';
import { StateContext } from '../StateProvider';
import { useHistory, useLocation } from 'react-router-dom';

export default function SearchBox() {
  const [state, dispatch] = useContext(StateContext);
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.has('query')
    ? searchParams.get('query')
    : '';
  const categoryId = searchParams.has('categoryId')
    ? parseInt(searchParams.get('categoryId'))
    : 0;
  const categoryName = searchParams.has('categoryName')
    ? searchParams.get('categoryName')
    : 'All';

  const [category, setCategory] = useState({
    id: categoryId,
    name: categoryName,
  });

  const changeCategory = (category) => {
    setCategory(category);
  };

  const [query, setQuery] = useState(searchQuery);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'setMovies', payload: [] });

    dispatch({ type: 'setLoading', payload: true });

    history.push({
      pathname: '/search',
      search:
        '?query=' +
        query +
        '&categoryId=' +
        category.id +
        '&categoryName=' +
        category.name,
    });
  };

  const [listOfPredicates, setListOfPredicates] = useState([]);

  useEffect(() => {
    let autoComplit;
    if (query !== '') {
      autoComplit = constructUrl('search/multi', query);
    }

    fetch(autoComplit)
      .then((res) => res.json())
      .then((data) => {
        setListOfPredicates(data.results);
      });
    console.log(listOfPredicates);
  }, [query]);

  useEffect(() => fetchMovies(searchQuery), [searchQuery, categoryId]);

  function fetchMovies(query = '') {
    let SEARCH_URL;
    if (query !== '') {
      SEARCH_URL = constructUrl('search/movie', query);
    } else {
      SEARCH_URL = constructUrl('movie/popular');
    }

    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.results !== undefined) {
          let movies = data.results;
          if (category.id) {
            movies = movies.filter((movie) =>
              movie.genre_ids.includes(category.id)
            );
          }

          dispatch({ type: 'setMovies', payload: movies });
        }
        dispatch({ type: 'setLoading', payload: false });
      })

      .catch((err) => console.log(err));
  }

  return (
    <Form inline onSubmit={onSubmit} style={{ flexFlow: 'row' }}>
      <DropdownCategories category={category} setCategory={changeCategory} />

      <FormControl
        type="text"
        placeholder="Search..."
        value={query}
        onChange={onChange}
        list="data"
      />
      <datalist id="data">
        {listOfPredicates.map((item, key) => (
          <option key={key} value={item.original_title} />
        ))}
      </datalist>

      <Button type="submit" className="bg-orange" style={{ marginLeft: '5px' }}>
        Search
        <span>
          {state.isLoading ? (
            <Spinner animation="border" variant="dark" size="sm" />
          ) : (
            ' '
          )}
        </span>
      </Button>
    </Form>
  );
}
