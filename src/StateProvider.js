import React, { useReducer, createContext } from "react";

export const StateContext = createContext();

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};

const initialState = {
  isLoading: true,
  movies: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setLoading":
      return { ...state, isLoading: action.payload };
    case "setMovies":
      state.movies=action.payload;
      return state  ;
    default:
      return state ;
  }
}
